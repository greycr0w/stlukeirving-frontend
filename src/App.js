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
import WeeklyBulletin from './components/WeeklyBulletin/WeeklyBulletin'
import Home from './components/Home/Home'






class App extends Component {
  render() {

    return (
      

        <div>
        <Router>
        <Header></Header>

                    <div>
						<Route exact path="/" component={Home} />
                        <Route path="/donate" component={DonationPage}/>
                        <Route path="/weeklybulletin" component={WeeklyBulletin}/>
                    </div>
                    <Footer></Footer>

        </Router>
        </div>     
    );
  }
}

export default App;
