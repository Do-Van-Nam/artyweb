import React from "react"
import { Routes, Route } from 'react-router-dom'



import styles from "./styles.module.css"
import styles1 from "./styles.css"

import Home from "./pages/HomePage/Home"
import TicketBuy from "./pages/TicketBuy/TicketBuy"
import Cart from "./pages/Cart/Cart"
import Login from "./pages/Login/Login"
import ExhDetail from "./pages/ExhDetail/exhDetail"

import AIChat from "./pages/AIChat/aiChat"

import AppProvider from "./AppContext"


function App() {
    return (
        <div className={styles1.body1}>
            <AppProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aichat" element={<AIChat />} />
                <Route path="/login" element={<Login log={true} />} />
                <Route path="/signup" element={<Login log={false} />} />
                <Route path="/ticket_buy" element={<TicketBuy />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/exhdetail/:idartist" element={<ExhDetail />} />
            </Routes>
            </AppProvider>
        </div>
    )
}




export default App