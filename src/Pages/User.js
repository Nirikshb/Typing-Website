import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import TableUserData from "../Components/TableUserData";
import Graph from "../Components/Graph";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserInfo from "../Components/UserInfo";
import { useTheme } from "../Context/ThemeContext";

const User = () => {
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const { theme } = useTheme();

  // Function to fetch user data from Firestore
  const fetchUserData = async () => {
    try {
      const { uid } = auth.currentUser;
      const snapshot = await db
        .collection("Results")
        .where("userId", "==", uid)
        .orderBy("timeStamp", "desc")
        .get();

      const tempData = snapshot.docs.map((doc) => doc.data());
      const tempGraphData = tempData
        .map((data) => [data.timeStamp.toDate().toLocaleString().split(","), data.wpm])
        .reverse();

      setData(tempData);
      setGraphData(tempGraphData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // UseEffect to fetch user data when the component mounts or when user state changes
  useEffect(() => {
    if (!loading) {
      fetchUserData();
    }
    // If the user is not logged in, navigate to the home page
    if (!loading && !user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  // Show loading spinner if data is still loading
  if (loading) {
    return (
      <>
        <CircularProgress style={{ color: theme.textColor }} />
      </>
    );
  }

  // Rendering user data once loaded
  return (
    <div className="canvas user-canvas">
      <Header />
      <UserInfo totalTestTaken={data.length} />
      <div className="graph-user-page">
        <Graph graphData={graphData} type="date" />
      </div>
      <TableUserData data={data} />
      <Footer />
    </div>
  );
};

export default User;
