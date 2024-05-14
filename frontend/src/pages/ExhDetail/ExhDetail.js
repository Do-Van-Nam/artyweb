import React, { useState, useEffect, } from 'react';
import clsx from 'clsx';
import { Link,useParams } from "react-router-dom";


import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import styles from './exhDetail.module.css'

export default function ExhDetail() {
    // const {artistid} = useParams()
    return (
        <div >


            <Header />
            <h1>{artistid}</h1>
            <h1>{artistid}</h1>


         
<Footer/>
    
        </div>
    )
}

