import styles from "./footer.module.css";
import clsx from "clsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../assets/images/logo1.png";
import ReactDOM from 'react-dom'
// import {faFacebook} from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className={styles.footer_container} >
      <footer id="footer-copyright" class="footer-copyright">
		<div class="container" >
			<div class="hm-footer-copyright text-center">
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
		</div>

		

	</footer>

    </div>
  );
}
