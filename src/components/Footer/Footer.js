import React, {Component} from 'react';
import JoinNewsletter from '../JoinNewsletter/JoinNewsletter'

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
                        <div className="col-md-4 top_widget newsletter-button">
                        <JoinNewsletter></JoinNewsletter>
                        </div>
                        <div className="col-md-3 top_widget">
                            <div className="follow_us">
                                <ul>
                                    <li><a href="https://www.facebook.com/St-Luke-Catholic-Church-Irving-Texas-1703729443281316/?__tn__=%2Cd%2CP-R&eid=ARCn1z2oAz52DN5bdoPd_TxPF0tWM0by8Q65EUf6bf8uwPAaMBZPkyfS0v_wUqlH289v0_FyJ4gaxePG"><i className="fa fa-2x fa-facebook"></i></a></li>
                                    <li><a href="https://www.facebook.com/St-Luke-Catholic-Church-Irving-Texas-1703729443281316/?__tn__=%2Cd%2CP-R&eid=ARCn1z2oAz52DN5bdoPd_TxPF0tWM0by8Q65EUf6bf8uwPAaMBZPkyfS0v_wUqlH289v0_FyJ4gaxePG"><i className="fa fa-2x fa-youtube"></i></a></li>
                                    <li><a href="https://www.facebook.com/St-Luke-Catholic-Church-Irving-Texas-1703729443281316/?__tn__=%2Cd%2CP-R&eid=ARCn1z2oAz52DN5bdoPd_TxPF0tWM0by8Q65EUf6bf8uwPAaMBZPkyfS0v_wUqlH289v0_FyJ4gaxePG"><i className="fa fa-2x fa-instagram"></i></a></li>

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
                            <p className="contact-us-church">Church</p>
                            <p>202 S. MacArthur Blvd Irving, Texas 75060</p>
                            <p className="contact-us-church">Rectory</p>
                            <p>1015 Schulze Drive Irving, Texas 75060</p>
                            <p>Email:  <a href="mailto:contact@stlukeirving.org">conatct@stlukeirving.org</a></p>
                            <p>Phone:  972-259-3222	</p>
                            <p>Fax: 972-259-3339</p>
                        </div>
                    </div>

                    <div className="col-md-4 footer_widget">
                    <div class="widget_inner">


                	    <div class="instagram_img">
                            <img src={process.env.PUBLIC_URL + '/assets/images/banner/church_footer.jpg'}></img>
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

            
        </footer>
        )
    }
}

export default Footer;