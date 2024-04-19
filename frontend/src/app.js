import React from "react"
import {Routes,Route} from 'react-router-dom'



import styles from "./styles.module.css"
import styles1 from "./styles.css"

import Home from "./pages/HomePage/Home"
import TicketBuy from "./pages/TicketBuy/TicketBuy"
import Watch from "./pages/Watch/Watch"
import Login from "./pages/Login/Login"

import AIChat from "./pages/AIChat/aiChat"



function App() {
    return (
<div className={styles1.body1}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ticket_buy" element={<TicketBuy/>} />
            <Route path="/watch" element={<Watch/>} />
            <Route path="/aichat" element={<AIChat/>} />
            <Route path="/login" element={<Login log={true}/>} />
            <Route path="/signup" element={<Login log={false}/>} />
        </Routes>
</div>
    )
}




export default App