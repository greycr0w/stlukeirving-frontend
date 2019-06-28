import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax'
import MassSchedule from '../MassSchedule/MassSchedule'
import {Link} from 'react-router-dom';
import Reflection from '../Reflection/Reflection';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bannerText: "",
            bannerImg: "",
            event: []
        }
    }

    componentDidMount() {
        axios({ method: 'get',
        url: 'https://api.stlukeirving.org/banner_group/1/banner',
        })
        .then( (response) => {
            
            var banner = response.data[ Math.floor( Math.random() * response.data.length)  ];

            this.setState({bannerText: banner.values[1].text_content})
            this.setState({bannerImg: banner.values[0].media.access_url})

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

        axios({ method: 'get',
        url: 'https://saintlukecatholicchurch.mhsoftware.com/jsonp/calendar_id/2.js?dayspan=8',
        })
        .then( (response) => {

            this.setState({event: response.data.items})
        }
        );

      
    }

    render() {
        return(

            <div>
            <Parallax strength={600}>
            <div style={{ height: '530px' }} />

                <Background className="wrapper-bg">
                    <img src={this.state.bannerImg} className="custom-bg"/>
                  
                </Background>
                         <div className="container mission-statement">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 col-12">
                                    <div className="sa-banner-slider">
                                        <div className="mission-statement-text">
                                            <div className="banner-details">
                                                <h2>Our Mission</h2>
                                                <p>{this.state.bannerText}</p>
                                                <Link to="/mission" className="sa-btn-transparent">Learn more About Us<img src="assets/images/icon/arrow-right.png" alt="img"></img></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-10 col-12">
                                    
                                </div>
                            </div>
                        </div>
                </Parallax>

                <div className="container mt-5">
                    <div className="row">
                        <a href="//httpbin.org" target="_blank" className="d-block col-md-4 main-card text-align-center">
                            <img src={process.env.PUBLIC_URL + '/assets/images/squares/mass.png'} className="img-fluid" />

                        </a>
                        <MassSchedule>
                            <a className="col-md-4 main-card text-align-center">
                                <img src={process.env.PUBLIC_URL + '/assets/images/squares/mass.png'} className="img-fluid" />
                            </a>
                        </MassSchedule>
                        <a href="#" className="d-block col-md-4 main-card text-align-center">
                            <img src={process.env.PUBLIC_URL + '/assets/images/squares/mass.png'} className="img-fluid" />

                        </a>
                    </div>
                </div>

            {/* <div className="container">
                <div className="section-padding">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="home_squares_wrapper">
                                <MassSchedule></MassSchedule>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">

                            <button>two</button>
                        </div>
                        <div className="col-lg-3 col-sm-6">

                            <button>two</button>
                        </div>
                    </div>

                </div>
            </div>

                    */}


                        
            <div className="sa-upcoming-sermons pd-default-3">
            <div className="container">
                <div className="row">
                
                    <div className="col-lg-7 col-12">
               
                        <h2 className="sa-video-title">Upcoming Events</h2>
                        {this.state.event.map(a => (
                            <div className="sa-events-area">
                            <div className="media">

                                { a.attachments[0] && <img src={a.attachments[0].url} className="event-image" alt="Event image"></img> } 
                                <div className="media-body sa-event">
                                    <h5>{a.description}</h5>
                                    <p>{a.long_description}</p>
                                    <div className="sa-events">
                                        <p><i className="fa fa-clock-o"></i>{a.starting_date + " " + (a.starting_time || '')}</p>
                                        { a.location && a.location.location_name && <p><i className="fa fa-map-marker"></i>{ a.location.location_name }</p> }
                                    </div>
                                </div>
                            </div>
                        </div>
                        )) }
                        
                       
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