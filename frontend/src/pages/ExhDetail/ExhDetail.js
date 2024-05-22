import React, { useState, useEffect, useContext } from 'react';
import clsx from 'clsx';
import { Link,useLocation ,useParams} from "react-router-dom";
import axios from 'axios'

import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import TicketBox from "../../components/TicketBox/ticketBox"
import PicBox from "../../components/PicBox/picBox"
import { AppContext } from '../../AppContext';
import styles from './exhdetail.module.css'

export default function ExhDetail() {
    const {data} = useContext(AppContext)
    var idartist = useParams()
    console.log(typeof data,data, idartist)
    // var [ exhspics,setExhspics] = useState([])
    // var [loading,setLoading] = useState(false)
    // useEffect(() => {
    //     setLoading(true)
    //     axios
    //         .get('http://localhost:5713/exhspics')
    //         .then((response) => {
    //             setExhspics(response.data.exhspics)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    //         .finally(()=>{
    //             setLoading(false)
    //         })
    // }, [])

    return (
        <div className={styles.exhdetail}>
            <Header/>
            <h1>{data.name}</h1>
            {data.pics.map((e)=>{
                return  <PicBox props={e}/>

            })}
            {/* <PicBox/>
            <PicBox/>   
            <PicBox/>   
            <PicBox/>    */}
            <Footer/>
            
        </div>



    )
}

