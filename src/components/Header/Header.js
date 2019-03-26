import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

class Header extends Component {



    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (

        <header id="header" className="nav-stacked sa-header" data-spy="affix" data-offset-top="1">
            <nav id="navigation_bar" className="navbar navbar-default sa-navbar">
                  <div className="navbar-header">
                    <div className="logo">
                        <div className="app-logo-wrapper">
                            <Link to="/">
                            <img className="app-logo" src={process.env.PUBLIC_URL + '/assets/images/stluke-logo.png'} alt="image"></img>
                            </Link>
                        </div>
                    </div> 
                    <button id="menu_slide" data-target="#navigation" aria-expanded="false" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                  </div>

                    <div className="collapse navbar-collapse" id="navigation">
                        <ul className="nav navbar-nav">
                            <li className="dropdown"><Link to="/">Home <span className="nav_arrow"></span></Link>
                                <ul className="sub-menu">
                                    <li><a href="home-1.html">Home 01</a></li>
                                    <li><a href="home-2.html">Home 02</a></li>
                                    <li><a href="home-3.html">Home 03</a></li>
                                    <li><a href="home-4.html">Home 04</a></li>
                                    <li><a href="home-5.html">Home 05</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                            <Link to="/weeklybulletin">Weekly Bulletin <span className="nav_arrow">
                                
                            </span></Link>

                            </li>
                            <li className="dropdown"><a href="home-4.html#">Templates <span className="nav_arrow"></span></a>
                                <ul className="sub-menu">
                                    <li><a target="_blank" href="https://preview.themeforest.net/item/grafelli-data-driven-donation-html5-template/full_screen_preview/23069873?_ga=2.137700400.1840276854.1545523954-415330251.1529251968">Grafelli</a></li>
                                </ul>
                            </li>
                            
                            <li className="dropdown"><a href="home-4.html#">Landing <span className="nav_arrow"></span></a>
                                <ul className="sub-menu">
                                    <li><a href="landing-charity.html">landing charity</a></li>
                                    <li><a href="landing-donation.html">landing donation</a></li>
                                    <li><a href="landing-event.html">landing event</a></li>
                                    <li><a href="landing-ngo.html">landing ngo</a></li>
                                    <li><a href="landing-non-profit.html">landing nonprofit</a></li>
                                </ul>
                            </li>
                            <li className="dropdown"><a href="home-4.html#">Landing <span className="nav_arrow"></span></a>
                                <ul className="sub-menu">
                                    <li><a href="landing-charity.html">landing charity</a></li>
                                    <li><a href="landing-donation.html">landing donation</a></li>
                                    <li><a href="landing-event.html">landing event</a></li>
                                    <li><a href="landing-ngo.html">landing ngo</a></li>
                                    <li><a href="landing-non-profit.html">landing nonprofit</a></li>
                                </ul>
                            </li>
                            
                            <li className="dropdown ">
                                      <a className="user" href="home-4.html#"><i className="fa fa-2x fa-user" aria-hidden="true"></i></a>
                                      <ul className="sub-menu">
                                          <li><a href="home-4.html#">Dashboard</a></li>
                                          <li><a href="home-4.html#">Update Profile</a></li>
                                          <li><a href="home-4.html#">Logout</a></li>
                                      </ul>
                            </li>

                            <li>
                            <Link className="btn dark-btn" to="/donate">Donate</Link>
                            </li>
                        </ul>
                      
                     
                    </div>

            </nav>
            
        </header>
        )
    }
}


export default Header;