import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";


import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import TicketBox from "../../components/TicketBox/ticketBox"
import styles from './exhdetail.module.css'

export default function Home() {
    return (
        <div className={styles.home}>
            <Header />
            


         
    
            <Footer/>
            
        </div>



    )
}

