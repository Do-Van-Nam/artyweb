import styles from "./footer.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa'
export default function Footer() {
  return (
			<div class={styles.footerContainer}>
				<p>
					 contact info
           <br/>
           <div className={styles.contact_container}>
             <FaFacebook  onClick={()=>{
              window.location.href="https://www.facebook.com/profile.php?id=100033635897130"
          }}/>
            <FaEnvelope className={styles.envelope} title="nam15sep2003@gmail.com"/>
          <div>     
          </div>
          <FaPhone title="0961597093"/>
          </div>
				</p>
			</div>
  );
}
