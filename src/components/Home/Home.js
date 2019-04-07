import React, {Component} from 'react'
import {Parallax} from 'react-parallax'
import MassSchedule from '../MassSchedule/MassSchedule'
import {Link} from 'react-router-dom';
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return(

            <div>
            <Parallax bgImage={process.env.PUBLIC_URL + '/assets/images/bg/Church_Altar.jpg'} strength={500}>
                    <div style={{ height: 500 }}>
                    </div>
                    <div className="">
                        <div className="container mission-statement">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="sa-banner-slider">
                                        <div className="mission-statement-text">
                                            <div className="banner-details">
                                                <h2>Our Mission</h2>
                                                <p>"Building our lives in the image of Christ through worship and prayer."</p>
                                                <Link to="/" className="sa-btn-transparent">Learn more About Us<img src="assets/images/icon/arrow-right.png" alt="img"></img></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-10 col-12">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            <div className="sa-upcoming-sermons pd-default-3">
            <div className="container">
                <div className="row">
                
                    <div className="col-lg-7 col-12">
               
                        <h2 className="sa-video-title">Upcoming Sermons</h2>
                        
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
                    
                    <div className="col-lg-5 col-md-12">
                    <h2 className="sa-video-title">See our Mass Schedule</h2>

                    <h2 className="sa-video-title"> <MassSchedule></MassSchedule></h2>
                   

                        <h2 className="sa-video-title">Previous Sermons</h2>
                        <div className="sa-video-block mg-bottom-30">
                            <div className="video-blog">
                                <div className="video-blog-popup">
                                    <div className="thumb">
                                        <img src="assets/images/sermons/01.png" alt="img"></img>
                                    </div>
                                    <a className="popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fa fa-play"></i></a>
                                </div>
                                <div className="video-content text-center">
                                    <h5>Living A Christian Life</h5>
                                    <p>Joint 985 People  |  40:20 Munites</p>
                                    <a href="home-4.html#" className="btn dark-btn">Watch Sermon</a>
                                </div>
                            </div>
                        </div>
                        <div className="sa-video-block">
                            <div className="video-blog">
                                <div className="video-blog-popup">
                                    <div className="thumb">
                                        <img src="assets/images/sermons/02.png" alt="img"></img>
                                    </div>
                                    <a className="popup-youtube" href="http://www.youtube.com/watch?v=0O2aH4XLbto"><i className="fa fa-play"></i></a>
                                </div>
                                <div className="video-content text-center">
                                    <h5>Donation is the social work</h5>
                                    <p>Joint 985 People  |  40:20 Munites</p>
                                    <a href="home-4.html#" className="btn dark-btn">Watch Sermon</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        
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
        </section>
        

       

        
        <section className="sa-schedules-wrap pd-default">
            <div className="container">
                <div className="sa-schedules-section">
                    <div className="row">
                        <div className="col-lg-5 col-12">
                            <div className="sa-schedule">
                                <div className="sa-schedules-heading">
                                    <h2>Service Times & Schedules</h2>
                                    <p>Many desktop publishing packages and the web page editors now use lorem Ipsum as their default model text and a search fornt.</p>
                                </div>
                                <div className="sa-schedules-content">
                                    <p><i className="fa fa-check-circle"></i> Lorem ipsum nullam tortor consequ.</p>
                                    <p><i className="fa fa-check-circle"></i> Non ullamcorper lobortis incept.</p>
                                    <p><i className="fa fa-check-circle"></i> Cubilia quisque velit primis rhon.</p>
                                    <p><i className="fa fa-check-circle"></i> Donec pote libero enim aliquam.</p>
                                </div>
                                <a className="btn dark-btn" href="home-4.html#">Contact us</a>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <table className="table sa-schedules-table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Schedule Day</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    <tr>
                                        <th scope="row">Saturday</th>
                                        <td>Campus - 1</td>
                                        <td>2:00 PM - 5:45 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sunday</th>
                                        <td>Campus - 1</td>
                                        <td>4:00 PM - 9:45 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Monday</th>
                                        <td>Campus - 3</td>
                                        <td>9:00 PM - 5:45 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Tuesday</th>
                                        <td>Campus - 2</td>
                                        <td>2:00 PM - 5:45 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Wednesday</th>
                                        <td>Campus - 5</td>
                                        <td>2:00 PM - 5:45 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Thursday</th>
                                        <td>Campus - 4</td>
                                        <td>2:00 PM - 5:45 PM</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Friday</th>
                                        <td>Campus - 4</td>
                                        <td>2:00 PM - 5:45 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </div>    
    
        )
    }

}
export default Home;