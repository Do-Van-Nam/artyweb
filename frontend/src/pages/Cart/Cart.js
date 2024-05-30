import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import Header from "../../components/Header/header"
import Footer from '../../components/Footer/footer';
import BoughtTicketBox from "../../components/BoughtTicketBox/boughtTicketBox"
import { AppContext } from '../../AppContext';
import styles from './cart.module.css'



export default function Cart() {
    var [exh, setExh] = useState([])
    var [boughtticket, setBoughtTicket] = useState([])
    var [props, setProps] = useState([])
    var [loading, setLoading] = useState(true)
var {userid,setUserid} = useContext(AppContext)
    setUserid(localStorage.getItem('userid'))
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await axios.get('http://localhost:5713/watch')
                let exh1 = response.data.exhs
                setExh(exh1)
                const response1 = await axios.get(`http://localhost:5713/boughtticket/${userid}`)
                let boughttickets = response1.data.boughttickets
                setBoughtTicket(boughttickets)
                let props = exh1.filter((e)=>{
                    let idartist = e.idartist
                    return boughttickets.some((ticket)=>ticket.idartist===idartist)
                })
                props.map(e=>{
                    let idartist = e.idartist
                    let ticket = boughttickets.find(e=>e.idartist===idartist)
                    e.paid=ticket.paid
                    e._id = ticket._id
                    return e
                })
                setProps(props)
            } catch (error) {
                console.log(error)
            }
            finally {
                setLoading(false)
            }
        }
        fetchdata()
    }, []);
    return (
        <div className={styles.ticketbuy}>
            <Header />

            <div className={styles.tickets}>
                {loading ? <div>LOADING</div> : <></>}
                {
                    props.map(e=><BoughtTicketBox key={e.idartist} props={e} />)
                }
                
            </div>
            <Footer />
        </div>



    )
}

