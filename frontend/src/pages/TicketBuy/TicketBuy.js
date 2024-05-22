import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "../../components/Header/header"
import Footer from '../../components/Footer/footer';
import TicketBox from "../../components/TicketBox/ticketBox"
import TicketPopup from "../../components/TicketPopup/ticketPopup"
import styles from './ticketBuy.module.css'

export default function TicketBuy() {
    var [exh, setExh] = useState([])
    var [exhspics, setExhspics] = useState([])
    var [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchExhData = async ()=>{
            try {
                const response = await axios.get('http://localhost:5713/watch')
               let  exh1 = response.data.exhs
                setExh(exh1)
                const response1 = await axios.get('http://localhost:5713/exhspics')
                let exhspics1 =  response1.data.exhspics
                setExhspics(exhspics1)
                const updatedExh = exh1.map((e) => {
                    let idartist = e.idartist;
                    let pic = exhspics1.find((e) => e.idartist === idartist);
                    if (pic) {
                        e.thumbnail = pic.picsrc;
                        console.log(e.thumbnail);
                    }
                    let pics = exhspics1.filter((e) => e.idartist === idartist);
                    if(pics) e.pics = pics;
                    return e
                });
                setExh(updatedExh)
            } catch (error) {
                console.log(error)
            }
            finally{
                setLoading(false)

            }
        }
fetchExhData()
    }, [])
    return (
        <div className={styles.ticketbuy}>
            <Header />
            <div className={styles.tickets}>
                {
                    loading ? (
                        <div>Loading....</div>
                    ) : (
                        exh.map((exh, index) => {
                            return <TicketBox key={index} props={exh} />
                        })
                    )
                }
            </div>
            <Footer />
        </div>
    )
}

