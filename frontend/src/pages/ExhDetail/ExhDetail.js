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

    return (
        <div className={styles.exhdetail}>
            <Header/>
            <h1>{data.name}</h1>
            {data.pics.map((e)=>{
                return  <PicBox props={e}/>
            })}
            <Footer/>
        </div>
    )
}

