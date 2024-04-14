import { FaReply } from 'react-icons/fa'



import styles from "./answer.module.css"

export default function Question(props){

return(
    <div className={styles.answer_container}>
        <FaReply className={styles.icon}/>
        <div className={styles.answer}>{props.answer}</div>
        


    </div>
)



}




