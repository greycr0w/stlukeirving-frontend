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
import ServicePayment from './components/ServicePayment/ServicePayment';
import UnsubscribeNewsletter from './components/UnsubscribeNewsletter/UnsubscribeNewsletter';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import History from './components/OurCommunity/History';
import ParishStaff from './components/Parish/ParishStaff';
import Information from './components/OurCommunity/Information';


class App extends Component {
  render() {

    return (
      

        <div>
        <Router>
        <Header></Header>

                    <div>
						            <Route exact path="/" component={Home} />
                        <Route path="/donate" component={UnderConstruction}/>
                        <Route path="/donation/:id/approve" component={UnderConstruction}/>
                        <Route path="/weeklybulletin" component={WeeklyBulletin}/>
                        <Route path="/events" component={Events}/>
                        <Route path="/service_payment" component={ServicePayment}/>
                        <Route path="/unsubscribe" component={UnsubscribeNewsletter}/>
                        <Route path="/history" component={History}/>
                        <Route path="/parish_staff" component={ParishStaff}/>
                        <Route path="/information" component={Information}/>
                        
                    </div>
        <Footer></Footer>

        </Router>
        </div>     
    );
  }
}

export default App;
