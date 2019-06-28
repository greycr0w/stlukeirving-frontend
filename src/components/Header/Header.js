import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            show: ""
        };
    }

    render() {
        return (

        <header id="header" className="nav-stacked sa-header" data-spy="affix" data-offset-top="1">
                        <div className="container">

            <nav id="navigation_bar" className="navbar navbar-default sa-navbar">
                  <div className="navbar-header">
                    <div className="logo">
                        <div className="app-logo-wrapper">
                            <Link to="/">
                            <img className="app-logo" src={process.env.PUBLIC_URL + '/assets/images/bg/newstluke.png'} alt=""></img>
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
                                <Link  to="/weeklybulletin">Weekly Bulletin<span className="nav_arrow">
                                    
                                </span></Link>

                            </li>

                            <li className="dropdown">
                                <Link to="/">Our Community<span className="nav_arrow">
                                    
                                </span></Link>
                                <ul className="sub-menu">
                                        <li><Link to="/history">History</Link></li>
                                        <li><Link to="/information">Information</Link></li>
                                        <li><Link to="/mission">Mission</Link></li>
                                    
                                </ul>
                            </li>

                            <li className="dropdown">
                                <Link to="/formation">Formation<span className="nav_arrow">
                                    
                                </span></Link>

                            </li>

                            <li className="dropdown">
                                <Link to="/services">Services<span className="nav_arrow">
                                    
                                </span></Link>
                                {/* <ul className="sub-menu">
                                        <li><Link to="/">Baptism</Link></li>
                                        <li><Link to="/">Marriage</Link></li>
                                    
                                </ul> */}
                            </li>


                            <li className="dropdown">
                                <Link to="/">Parish<span className="nav_arrow">
                                    
                                </span></Link>
                                <ul className="sub-menu">
                                        <li><Link to="/parish_groups">Parish Groups</Link></li>
                                        <li><Link to="/parish_staff">Parish Staff</Link></li>

                                </ul>
                            </li>

                            <li className="dropdown">
                                <a href="https://saintlukecatholicchurch.mhsoftware.com/View.html?btnUnused=Return+to+Viewing+Calendars">Calendar</a>
                            </li>

                            <li>
                                <Link className="btn dark-btn" to="/donate">Donate</Link>
                            </li>
                        </ul>
                      
                     
                    </div>

            </nav>
            </div>

        </header>
        )
    }
}

export default Header;
