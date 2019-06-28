import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WeeklyBulletin from './components/WeeklyBulletin/WeeklyBulletin'
import Home from './components/Home/Home'
import Events from './components/Events/Events'
import ServicePayment from './components/ServicePayment/ServicePayment';
import UnsubscribeNewsletter from './components/UnsubscribeNewsletter/UnsubscribeNewsletter';
import UnderConstruction from './components/UnderConstruction/UnderConstruction';
import History from './components/OurCommunity/History';
import ParishStaff from './components/Parish/ParishStaff';
import Information from './components/OurCommunity/Information';
import Mission from './components/Mission/Mission';
import ParishGroups from './components/Parish/ParishGroups';
import Services from './components/Services/Services';

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
                        <Route path="/mission" component={Mission}/>
                        <Route path="/parish_groups" component={ParishGroups}/>
                        <Route path="/formation" component={UnderConstruction}/>
                        <Route path="/services" component={Services}/>
                        
                    </div>
        <Footer></Footer>

        </Router>
        </div>     
    );
  }
}

export default App;
