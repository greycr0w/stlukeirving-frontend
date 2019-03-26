import React, {Component} from 'react';


class Footer extends Component {


    constructor(props) {
        super(props);

        this.state = {
            

        }
    }


    render() {
        return(


        <footer id="footer">
            <div className="footer_top secondary-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 top_widget">
                            <div className="footer_logo">
                                <div className="footer-logo-wrapper">
                                    <img className="app-logo" src={process.env.PUBLIC_URL + '/assets/images/stluke-logo.png'} alt="image"></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 top_widget">
                        
                            <div className="newsletter">

                                <form>
                                   
                                    <div className="email_input">
                                        <input type="email" placeholder="Email address"></input>
                                    </div>
                                    <button type="submit">Submit <i className="fa fa-caret-right"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 top_widget">
                            <div className="follow_us">
                                <ul>
                                    <li><a href="home-4.html#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="home-4.html#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="home-4.html#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="home-4.html#"><i className="fa fa-youtube-play"></i></a></li>
                                    <li><a href="home-4.html#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer_widget">
                        <div className="widget_inner">
                            <h5>Contact Us</h5>
                            <p>Address: 202 S. MacArthur Blvd Irving, Texas 75060</p>
                            <p>Email:  <a href="mailto:support@stlukeirving.org">support@stlukeirving.org</a></p>
                            <p>Phone:  972-259-3222	</p>
                        </div>
                    </div>
                    <div className="col-md-4 footer_widget">
                        <div className="widget_inner">
                            <div className="instagram_img">
                                <ul>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/01.jpg" alt="image"></img></a></li>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/02.jpg" alt="image"></img></a></li>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/03.jpg" alt="image"></img></a></li>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/04.jpg" alt="image"></img></a></li>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/05.jpg" alt="image"></img></a></li>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/06.jpg" alt="image"></img></a></li>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/07.jpg" alt="image"></img></a></li>
                                    <li><a href="home-4.html#"><img src="assets/images/feed/charity/08.jpg" alt="image"></img></a></li>
                                </ul>
                                <a href="home-4.html#" className="insta_url"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 footer_widget">
                        <div className="widget_inner">
                            <h5>Useful Links</h5>
                            <div className="footer_nav">
                                <ul>
                                    <li><a href="home-4.html#">FAQ</a></li>
                                    <li><a href="home-4.html#">Account</a></li>
                                    <li><a href="home-4.html#">Privacy Policy</a></li>
                                    <li><a href="home-4.html#">Cart</a></li>
                                    <li><a href="home-4.html#">Terms & Conditions</a></li>
                                    <li><a href="home-4.html#">Checkout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <p>&copy; 2019 St. Luke Irving All Rights Reserved</p>
                        </div>
                        <div className="col-md-4">
                          
                        </div>
                        <div className="col-md-4">
                            <div className="footer_links">
                                <a href="home-4.html#">Home</a>
                                <a href="home-4.html#">About Us</a>
                                <a href="home-4.html#">Sermon</a>
                                <a href="home-4.html#">Events</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        )
    }
}

export default Footer;