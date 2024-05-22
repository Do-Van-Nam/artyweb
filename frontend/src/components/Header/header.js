import styles from "./header.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Header() {
   return (

      <div class='body' >
		<header class="top-area">
			<div class="header-area">
	
			    <nav class="navbar navbar-default bootsnav navbar-fixed dark no-background">
			        <div class="container">
			            <div class="navbar-header">
			                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
			                    <i class="fa fa-bars"></i>
			                </button>
			               <Link to='/'> <a class="navbar-brand" ><img className={styles.logo} src="../../../public/favicon-32x32.png" alt="" /> ARTY</a></Link>
			            </div>
			             <div class="collapse navbar-collapse menu-ui-design" id="navbar-menu">
			                <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
			                <li class=" smooth-menu active"></li>
			                    <li class=" smooth-menu"><Link to='/'>Trang chủ</Link></li>
			                    <li class="smooth-menu"><Link to='/ticket_buy'>Mua vé</Link></li>
			                    <li class="smooth-menu"><Link to='/cart'>Vé xem</Link></li>
			                    {/* <li class="smooth-menu"><Link to='/aichat'>AI chat</Link></li> */}
			                    <li class="smooth-menu"><Link to='/signup'>Đăng ký</Link></li>
			                    <li class="smooth-menu"><Link to='/login'>Đăng nhập</Link></li>
			                    {/* <li class="smooth-menu"><a href="#contact">contact</a></li> */}
			                </ul>
			            </div>
			        </div>
			    </nav>
		
			</div>

		    {/* <div class="clearfix"></div> */}

		</header>






         

      </div>


   );
}
