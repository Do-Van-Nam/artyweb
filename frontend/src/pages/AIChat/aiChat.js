import clsx from 'clsx';
import { Link } from "react-router-dom";
import { useState,useRef } from 'react';

import Header from "../../components/Header/header"
import Question from "../../components/Question/question"
import Answer from "../../components/Answer/answer"
import styles from './aiChat.module.css'

export default function AIChat(){
    var inputRef=useRef(null)
    var [renderedElement,setRenderedElement] = useState([])
    function handleSubmit(event){
        event.preventDefault()
        const inputValue= inputRef.current.value
        if(inputValue==='') return;
        setRenderedElement([...renderedElement,<Question question={inputValue}/>] )
        inputRef.current.value=''

    }
    function handleKeyPress(event){
        if(event.key==="Enter") {
            event.preventDefault()
            handleSubmit(event)

        }
    }




    return(
        <div className={styles.aichat}>
            <Header/>
            <div className={styles.chat_box}>
            {
                renderedElement.map((e)=>{
                    return e
                })
            }
            </div>
           
            <div className={styles.ask}>

            
            <input type='text'  className={styles.question}
            placeholder='Nhập câu hỏi.....'
            ref={inputRef}
            onKeyPress={handleKeyPress}
           />
  

            <button  className={styles.button_1} onClick={handleSubmit}>Gửi</button>
</div>
            

            

        </div>



    )
}


