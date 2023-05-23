import { createContext, useContext, useState } from "react";


const TestModeContext = createContext();
//create context a react function 

export const TextModeContextProvider = ({children})=>{

    const [testTime, setTestTime] = useState(15);

    const values = {
        testTime,
        setTestTime
    }

return (<TestModeContext.Provider value={values}>{children}</TestModeContext.Provider>)
}

export const useTestMode = ()=> useContext(TestModeContext);
