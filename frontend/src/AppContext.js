import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [log, setLog] = useState(false);
    const [userid, setUserid] = useState("");

    return (
        <AppContext.Provider value={{ data, setData ,log,setLog,userid,setUserid}}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
