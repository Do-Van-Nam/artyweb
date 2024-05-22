import styles from "./picBox.module.css"




export default function PicBox({props}){
    // const pic = {
    //     width: "auto",
    // height: "200px",
    // backgroundImage:"url(https://upload.wikimedia.org/wikipedia/commons/2/21/La_Vague_%28Gustave_Courbet_-_Mus%C3%A9e_des_beaux-arts_de_Lyon%29.jpg)",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "contain"
    // }


    return (


        <div className={styles.picbox}>
            <div className={styles.picdes}>
                {props.picdescription}
            </div>
            <div className={styles.picarea}>
                {/* <div style={pic}></div> */}
                <img className={styles.pic} src={props.picsrc} alt="" />
                <div className={styles.picname}>{props.picname}</div>
            </div>
        </div>

    )
}