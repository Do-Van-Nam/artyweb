import styles from "./ticketBox.module.css"
import { useState } from "react";
const thumb= '../../assets/images/image.png'
import TicketPopup from "../TicketPopup/ticketPopup"

export default function ticketBox({props}){
    const [isHovered, setIsHovered] = useState(false);
    function handleMouseEnter(){
        setIsHovered(true)
    }
    function handleMouseLeave(){
        setIsHovered(false)
    }
    const stylehover = {
        overflow: 'visible'
    }
    const stylenothover = {
        overflow: 'hidden'
    }
    return (

        <div className={styles.ticketBox} id="ticket"  
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
               style={isHovered? stylehover:stylenothover }
                >
            {
                (()=>{
                    if(isHovered) return <TicketPopup props={props}/>
                })()
                }
            <img src={props.thumbnail} />
            <div className={styles.name}>{props.name}</div>
            <div>Địa điểm: {props.location}</div>
            <div>Thời gian: {props.time}</div>
            <div>Giờ mở cửa: {props.opentime}</div>
            <div>Giá vé: {props.cost}</div>
            <div>
            <button className={styles.button_1} >Mua vé</button>
            <button className={styles.button_1} >Xem online</button>
            </div>
</div>  
    )
}