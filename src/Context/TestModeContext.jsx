import { createContext, useContext, useState } from "react";
import UpperMenu from "../Components/UpperMenu";

const TestModeContext = createContext();
//create context a react function 
//default prop know as children prop is default
export const TestModeContextProvider = ({children})=>{

    const [testTime, setTestTime] = useState(15);

    const values = {
        testTime,
        setTestTime
    }

return (<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>)
}
// instead of using children to export we have can use react's useContext hook.
export const useTestMode = ()=> useContext(TestModeContext);
