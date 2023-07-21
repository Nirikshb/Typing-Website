import { createContext, useContext, useState } from "react";

// Create the TestModeContext context
const TestModeContext = createContext();

// Create a TestModeContextProvider component to provide the context values to its children
export const TestModeContextProvider = ({ children }) => {
   
    const [testTime, setTestTime] = useState(15);

    // Values to be provided by the context
    const values = {
        testTime,
        setTestTime
    };

    return (
        <TestModeContext.Provider value={values}>
            {children}
        </TestModeContext.Provider>
    );
};

// Custom hook to consume the TestModeContext
export const useTestMode = () => useContext(TestModeContext);
