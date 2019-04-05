import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import DonationPage from './components/DonationPage/DonationPage'
import DonationApprovalPage from './components/DonationPage/DonationApprovalPage'
import WeeklyBulletin from './components/WeeklyBulletin/WeeklyBulletin'
import Home from './components/Home/Home'
import Events from './components/Events/Events'
import MassSchedule from './components/MassSchedule/MassSchedule';





class App extends Component {
  render() {

    return (
      

        <div>
        <Router>
        <Header></Header>

                    <div>
						            <Route exact path="/" component={Home} />
                        <Route path="/donate" component={DonationPage}/>
                        <Route path="/donation/:id/approve" component={DonationApprovalPage}/>
                        <Route path="/weeklybulletin" component={WeeklyBulletin}/>
                        <Route path="/events" component={Events}/>

                        
                    </div>
                    <Footer></Footer>

        </Router>
        </div>     
    );
  }
}

export default App;
