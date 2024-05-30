import styles from "./header.module.css";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from '../../AppContext';
import { useContext, useState } from "react";
import userpic from "./image.png"
import Notification from "../Notification/Notification";


export default function Header() {
	const { log, setLog } = useContext(AppContext)
	if (localStorage.getItem('userid') !== '') setLog(true)
	const [clickUser, setClickUser] = useState(false)
	const [notification, setNotification] = useState(false)
	const navigate = useNavigate()

	return (
		<div class='body' className={styles.header}>
			{notification && <Notification message={"Ban chua dang nhap ! Dang nhap de xem ve da mua!"} duration={2000} />}
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
									<li class="smooth-menu">
										{log ? <Link to='/cart'>Vé xem</Link> :
											<Link onClick={() => {
												setNotification(true)
												setTimeout(() => {
													setNotification(false);
												}, 3000);
											}}>Vé xem</Link>
										}

									</li>
									{/* <li class="smooth-menu"><Link to='/aichat'>AI chat</Link></li> */}
									{log ? (
										<li className={clsx("smooth-menu", styles.user)}>
											<img className={styles.userpic} src={userpic} alt="" onClick={() => { clickUser ? setClickUser(false) : setClickUser(true) }} />
											{clickUser && <div className={styles.userpanel}>
												<button className={clsx(styles.button_1, "smooth-menu")} >Thông tin tài khoản</button>
												<button className={clsx(styles.button_1, "smooth-menu")} >Đổi mật khẩu</button>
												<button className={styles.button_1} onClick={() => {
													setLog(false);
													navigate('/')
													localStorage.setItem('userid', '')
												}}>Đăng xuất</button>
											</div>
											}
										</li>
									) : (
										<li className="smooth-menu"><Link to='/signup'>Đăng ký</Link></li>

									)}
									{log ? (
										<></>
									) : (
										<li className="smooth-menu"><Link to='/login'>Đăng nhập</Link></li>
									)}
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
