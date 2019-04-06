import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import WeeklyBulletin from '../WeeklyBulletin/WeeklyBulletin';
import MassSchedule from '../MassSchedule/MassSchedule';

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
                            
                            </li>

                            <li className="dropdown">
                                <Link to="/weeklybulletin">Weekly Bulletin<span className="nav_arrow">
                                    
                                </span></Link>

                            </li>

                            <li className="dropdown">
                                <Link to="/formation">Formation<span className="nav_arrow">
                                    
                                </span></Link>

                            </li>

                            <li className="dropdown">
                                <Link to="/services">Services<span className="nav_arrow">
                                    
                                </span></Link>
                                <ul className="sub-menu">
                                        <li><Link to="/baptism">Baptism</Link></li>
                                        <li><Link to="/marriage">Marriage</Link></li>
                                    
                                </ul>
                            </li>

                            <li className="dropdown">
                                <Link to="/services">Our Community<span className="nav_arrow">
                                    
                                </span></Link>
                                <ul className="sub-menu">
                                        <li><Link to="/history">History</Link></li>
                                        <li><Link to="/information">Information</Link></li>
                                    
                                </ul>
                            </li>

                            <li className="dropdown">
                                <Link to="/parish">Parish<span className="nav_arrow">
                                    
                                </span></Link>
                                <ul className="sub-menu">
                                        <li><Link to="/parish_groups">Parish Groups</Link></li>
                                        <li><Link to="/parish_staff">Parish Staff</Link></li>

                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="">Calendar</a>
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