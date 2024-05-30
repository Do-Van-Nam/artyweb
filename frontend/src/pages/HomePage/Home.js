import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Link } from "react-router-dom";


import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import TicketBox from "../../components/TicketBox/ticketBox"
import styles from './home.module.css'
import ChatbotEmbed from './ChatbotEmbed';

export default function Home() {
 

    return (
        <div className={styles.home} >
            <Header />
            <section id="welcome-hero" class="welcome-hero">
                < div class="container">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="header-text">
                                <h2>hi <span>,</span> welcome to <br/> arty  <span>.</span> </h2>
                                    <p>trang mua vé và xem triển lãm tranh</p>
                                    <Link to='/ticket_buy'>Mua vé</Link>
                            </div>

                                
                            </div>
                        </div>
                    
                </div>
            </section>
            
	<section id="about" class="about">
		<div class="section-heading text-center">
			<h2>about arty</h2>
		</div>
		<div class="container">
			<div class="about-content">
				<div class="row">
					<div class="col-sm-6">
						<div class="arty-about-txt">
							<h3>
                            ARTY là một trang web thú vị cho những người yêu nghệ thuật, nơi bạn có thể khám phá một bảo tàng ảo hoàn toàn mới. Chúng tôi tập trung vào việc cung cấp một nền tảng trực tuyến độc đáo để trải nghiệm các tác phẩm nghệ thuật đặc sắc từ những danh họa vĩ đại nhất trong lịch sử.
							</h3>
                            <br/>
							<h3>
                            Với ARTY, bạn có thể:<br/>
                    Khám phá Bộ Sưu Tập: Dạo một vòng qua các triển lãm ảo tại ARTY và khám phá những tác phẩm đỉnh cao từ các danh họa nổi tiếng như Vincent van Gogh, Leonardo da Vinci, Claude Monet và nhiều người khác
                    <br/>
                    
                    Mua vé: Mua vé trực tiếp tới các triển lãm để có thể tận mắt thưởng thức các tác phẩm của các danh họa trên thế giới.
                    <br/>
                    Xem online: Với tính năng xem online bạn có thể xem các tác phẩm của từng danh họa, tìm hiểu ý nghĩa của từng tác phẩm.
                    </h3>
							
						</div>
					</div>
					<div class="col-sm-offset-1 col-sm-5">
						<div class="arty-about-img">
							<img src="assets/images/about/image.png" alt="monalisa_image"/>
							

						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
    {/* <ChatbotEmbed/> */}
    <Footer/>
    
            
        </div>

  


    )
}

