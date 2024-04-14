import React, { useState, useEffect } from 'react';
import axios from 'axios';




import Header from "../../components/Header/header"
import Footer from '../../components/Footer/footer';
import TicketBox from "../../components/TicketBox/ticketBox"
import styles from './ticketBuy.module.css'



export default function Watch() {
    var [exh, setExh] = useState([])
    var [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        axios
            .get('http://localhost:5713/watch')
            .then((response) => {
                setExh(response.data.exhs)
                setLoading(false)
                // console.log(typeof exh)
                // console.log(exh)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    // console.log(typeof exh)
    // console.log('a')
    // console.log(exh)
    
    return (
        <div className={styles.ticketbuy}>
            <Header />
            <div className={styles.tickets}>
                {
                    loading ? (
                        <div>Loading....</div>
                    ) : (
                            exh.map((exh, index) => {
                               return <TicketBox props={exh} />
                            })
                    )
                }
            </div>
            <Footer/>


        </div>



    )
}

