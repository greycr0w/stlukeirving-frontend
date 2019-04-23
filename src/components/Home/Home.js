import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax'
import MassSchedule from '../MassSchedule/MassSchedule'
import {Link} from 'react-router-dom';
import Reflection from '../Reflection/Reflection';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return(

            <div>
            <Parallax strength={300}>
            <div style={{ height: '635px' }} />

                <Background className="wrapper-bg">
                    <img src={process.env.PUBLIC_URL + '/assets/images/bg/Church_Altar.jpg'} className="custom-bg"/>
                  
                </Background>
                         <div className="container mission-statement">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="sa-banner-slider">
                                        <div className="mission-statement-text">
                                            <div className="banner-details">
                                                <h2>Our Mission</h2>
                                                <p>Building our lives in the image of Christ through worship and prayer.</p>
                                                <Link to="/" className="sa-btn-transparent">Learn more About Us<img src="assets/images/icon/arrow-right.png" alt="img"></img></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-10 col-12">
                                    
                                </div>
                            </div>
                        </div>
                </Parallax>


          
                        <section className="section-class">
                            <MassSchedule>
                                <div className="visual">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/squ-1.jpg'} alt="Choir &amp; Orchestra"></img>
                         
                                </div>
                                <div className="text">
                                    <h3 className="title">Mass schedule</h3>
                                    <p className="times">
                                        <span className="day">Sundays</span><br></br>
                                        9:15 &amp; 10:50am CT<br></br>
                                        <span className="emphasized sm alt">Learn More</span>
                                    </p>
                                </div>
                            </MassSchedule>
                        </section>
            <div className="sa-upcoming-sermons pd-default-3">
            <div className="container">
                <div className="row">
                
                    <div className="col-lg-7 col-12">
               
                        <h2 className="sa-video-title">Upcoming Events</h2>
                        
                        <div className="sa-events-area">
                            <div className="media">
                                <img src="assets/images/event2/1.jpg" alt="Event image"></img>
                                <div className="media-body sa-event">
                                    <h5>God is always with you on believe.</h5>
                                    <p>You need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    <div className="sa-events">
                                        <p><i className="fa fa-clock-o"></i>Sunday  (8:00 am — 9:00 am)</p>
                                        <p><i className="fa fa-map-marker"></i>56 Thatcher Avenue River Forest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sa-events-area sa-events-area-2">
                            <div className="media">
                                <img src="assets/images/event2/2.jpg" alt="Event image"></img>
                                <div className="media-body sa-event">
                                    <h5>The power of giving thanks </h5>
                                    <p>You need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    <div className="sa-events">
                                        <p><i className="fa fa-clock-o"></i>Sunday  (8:00 am — 9:00 am)</p>
                                        <p><i className="fa fa-map-marker"></i>56 Thatcher Avenue River Forest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sa-events-area sa-events-area-2">
                            <div className="media">
                                <img src="assets/images/event2/3.jpg" alt="Event image"></img>
                                <div className="media-body sa-event">
                                    <h5>Learn helping without hurting</h5>
                                    <p>You need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                                    <div className="sa-events">
                                        <p><i className="fa fa-clock-o"></i>Sunday  (8:00 am — 9:00 am)</p>
                                        <p><i className="fa fa-map-marker"></i>56 Thatcher Avenue River Forest</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                  
                   

                      
                </div>
            </div>
        </div>
        

{/*         
        <section id="causes" className="section-padding gray_bg">
            <div className="container">
                <div className="owl-carousel">
                    <div className="item">
                        <div className="causes_info white_text">
                            <div className="h__set">
                                <h6>Urgent CAUSES</h6>
                            </div>
                            <h2>The Five Points of Gospel Truth</h2>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                            <div className="causes_chart">
                                <p>Raised: <strong>$15,000.00</strong></p>
                                <div className="chart"><img src="assets/images/chart.png" alt="image"></img></div>
                                <p>Goal: <strong>$25,000.00</strong></p>
                            </div>
                            <a href="home-4.html#" className="btn btn-lg dark-btn">Donate Now</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="causes_info white_text">
                            <div className="h__set">
                                <h6>Urgent CAUSES</h6>
                            </div>
                            <h2>The Five Points of Gospel Truth</h2>
                            <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                            <div className="causes_chart">
                                <p>Raised: <strong>$15,000.00</strong></p>
                                <div className="chart"><img src="assets/images/chart.png" alt="image"></img></div>
                                <p>Goal: <strong>$25,000.00</strong></p>
                            </div>
                            <a href="home-4.html#" className="btn btn-lg dark-btn">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        

        <Parallax strength={300}>

                <Background className="wrapper-bg ">
                    <img src={process.env.PUBLIC_URL + '/assets/images/bg/Church_Full.jpg'} className="custom-bg"/>
                    <div className="reflection-bg">
                            &nbsp;
                        </div>
                </Background>
                <section className="pd-default ">

                        <div className="container visibility-reflection">
                            <div className="sa-schedules-section">
                            <h1 className="text-align-center reflection-title">Today's Reflection</h1>

                                <div className="row">
                                    <div className="reflection">
                                            <Reflection/>
                                    </div>
                            </div>
                          
                            </div>
                            
                        </div>
                       
                        
                        </section>
                        
                </Parallax>

     


        </div>    
    
        )
    }

}
export default Home;