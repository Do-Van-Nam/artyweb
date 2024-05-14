import styles from "./ticketPopup.module.css"
// const thumb = '../../assets/images/image.png'
import clsx from "clsx";


export default function ticketBox({ props }) {
    var pics = props.pics
    var i = 0, l= pics.length
    var bgstyle = {
        backgroundImage: 'url(${pics[i]})',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    clickleft = ()=>{
        if(i==0) i=l-1
        else i-=1
    }
    clickright = ()=>{
        if(i==l-1) i=0
        else i+=1
    }
    return (
        <div className={styles.ticketBox} id="ticket">
            {/* <img src='./image.png' alt="Thumbnail" /> */}
            <div className={clsx(styles.thumb, bgstyle)}>
                <button className={styles.left} onClick={clickleft}></button>

                <button className={styles.right} onClick={clickright}></button>
            </div>
            <div className={styles.name}>{props.name}</div>
            <div>Địa điểm: {props.location}</div>
            <div>Thời gian: {props.time}</div>
            <div>Giờ mở cửa: {props.opentime}</div>
            <button className={styles.button_1} >Mua vé</button>



        </div>
    )
}