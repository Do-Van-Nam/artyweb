import styles from "./picBox.module.css"

export default function PicBox({props}){

    return (
        <div className={styles.picbox}>
            <div className={styles.picdes}>
                {props.picdescription}
            </div>
            <div className={styles.picarea}>
                <img className={styles.pic} src={props.picsrc} alt="" />
                <div className={styles.picname}>{props.picname}</div>
            </div>
        </div>

    )
}