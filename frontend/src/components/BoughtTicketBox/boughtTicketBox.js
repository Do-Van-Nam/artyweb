import styles from "./boughtTicketBox.module.css"
import { useState } from "react";
import clsx from "clsx"
import qrpic from "./qrpic.jpg"
import qrticket from "./image.png"
import axios from 'axios'

export default function boughtTicketBox({ props }) {
    const [paid, setPaid] = useState(props.paid)
    const [qrcode, setQrcode] = useState(false)
    const [ticket, setTiket] = useState(false)
    const [deleted, setDeleted] = useState(false)
    var bgstyle = {
        backgroundImage : `url(${qrpic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
    var qrcodestyle = {
        backgroundImage : `url(${qrticket})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center'
    }
    const Qrarea = function () {
        return (
            <div className={styles.qrarea}>
                <button className={clsx(styles.button_1, styles.button_x)} onClick={()=>{setQrcode(false)}}>X</button>
                <div>Chuyển khoản {props.cost} đ để thanh toán</div>
                <div className={styles.qrpic} style={bgstyle} ></div>
                <button className={styles.button_1} onClick={getPaid }>Đã thanh toán</button>
            </div>
        )
    }
    const downloadqr = ()=>{
        const link = document.createElement('a');
    link.href = qrticket; 
    link.download = 'qrpic.jpg'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
    const Qrticket = function () {
        return (
            <div className={styles.qrarea}>
                <button className={clsx(styles.button_1, styles.button_x)} onClick={()=>{setTiket(false)}}>X</button>
                <div>Sử dụng QR code này để tham gia triển lãm</div>
                <div className={styles.qrpic} style={qrcodestyle} ></div>
                <button className={styles.button_1} onClick={downloadqr } >Lưu về máy</button>

            </div>
        )
    }
const deleteTicket= async () => {
    try {
    const response = await axios.delete(`http://localhost:5713/boughtticket/${props.idartist}`)
    } catch (error) {
        console.log(error)
    }
    setDeleted(true)
}
const getPaid = async ()=>{
    try {
        const updatedBoughtTicket={
            idartist:props.idartist,
            paid: true
        }
    const response = await axios.put(`http://localhost:5713/boughtticket/${props.idartist}`,updatedBoughtTicket)
    } catch (error) {
        console.log(error)
    }
    setQrcode(false)
    setPaid(true)
}
    if(!deleted)
    return (
        <div className={styles.ticketBox} id="ticket">
            {qrcode && (<Qrarea/>)}
            {ticket && (<Qrticket/>)}
            <img src={props.thumbnail} />
            <div className={styles.name}>Vé xem {props.name}</div>
            <div>Địa điểm: {props.location}</div>
            <div>Thời gian: {props.time}</div>
            <div>Giờ mở cửa: {props.opentime}</div>
            <div>Giá vé: {props.cost}</div>
            <div>
                {
                    !paid && (<button className={styles.button_1} onClick={()=>setQrcode(true)}>Thanh Toán</button>) 
                }
                {
                    !paid && (<button className={styles.button_1} onClick={deleteTicket}>Xóa Vé</button>)
                }
                {
                    paid && <button className={styles.button_1} onClick={()=>setTiket(true)}>Xem vé</button>
                }
            </div>
        </div>
            
    )
}