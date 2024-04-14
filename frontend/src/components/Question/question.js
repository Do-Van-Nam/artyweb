import { FaQuestion } from 'react-icons/fa'



import styles from "./question.module.css"

export default function Question(props){

return(
    <div className={styles.question_container}>
        <FaQuestion className={styles.icon}/>
        <div className={styles.question}>{props.question}</div>



    </div>
)



}




