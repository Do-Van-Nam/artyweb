import styles from "./ticketBox.module.css"
const thumb= '../../assets/images/image.png'
import TicketPopup from "../TicketPopup/ticketPopup"

export default function ticketBox({props}){




    return (
        <div className={styles.ticketBox} id="ticket">
        {/* <TicketPopup/> */}

            {/* <img src='./image.png' alt="Thumbnail" /> */}
            <div className={styles.thumb}></div>
            <div className={styles.name}>{props.name}</div>
            <div>Địa điểm: {props.location}</div>
            <div>Thời gian: {props.time}</div>
            <div>Giờ mở cửa: {props.opentime}</div>
            <button className={styles.button_1} >Mua vé</button>
        </div>
    )
}