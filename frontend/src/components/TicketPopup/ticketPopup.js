import { useState ,useContext} from "react";
import styles from "./ticketPopup.module.css"
// const thumb = '../../assets/images/image.png'
import clsx from "clsx";
import { Link } from "react-router-dom";
import { AppContext } from '../../AppContext';
import axios from 'axios'

export default function ticketBox({ props }) {
    const {data,setData} = useContext(AppContext)
    setData(props)
    var pics = props.pics
    const [index,setIndex]= useState(0)
    var l= pics.length
    var clickleft = ()=>{
        setIndex((prevIndex)=>(prevIndex ===0 ? l-1:prevIndex-1))
    }
    var clickright = ()=>{
        setIndex((prevIndex)=>(prevIndex ===l-1 ? 0:prevIndex+1))
    }
    var bgstyle = {
        backgroundImage: `url(${pics[index].picsrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
    const buyTicket=async()=>{
        try {
            const response = await axios.post('http://localhost:5713/boughtticket',{
            idartist: props.idartist,
            paid:false
        })
        console.log("Ticket Bought: ",response.data)
        } catch (error) {
                console.log(error)
        }
        
        
    }
    return (
        <div className={styles.ticketBox} id="ticket">
            {/* <img src='./image.png' alt="Thumbnail" /> */}
            <div className={styles.thumb} style={bgstyle} >
                <button className={styles.btnswitch} onClick={clickleft}> {"<"} </button>

                <button className={styles.btnswitch} onClick={clickright}>{">"}</button>
            </div>
            <div className={styles.name}>{props.name}</div>
            <div>Địa điểm: {props.location}</div>
            <div>Thời gian: {props.time}</div>
            <div>Giờ mở cửa: {props.opentime}</div>
            <div>Giá vé: {props.cost}</div>
            <div>
            <button className={styles.button_1} onClick={buyTicket}>Mua vé</button>
           <Link to={`/exhdetail/${props.idartist}`}> <button className={styles.button_1} >Xem online</button></Link>
</div>


        </div>
    )
}