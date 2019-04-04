import React, {Component} from 'react';

import { InputGroup, FormControl, FormCheck, FormGroup } from 'react-bootstrap';
import Checkbox from 'react-simple-checkbox';
import NumberFormat from 'react-number-format';

import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Alert } from 'reactstrap';
  
import axios from 'axios'
import queryString from 'query-string';

export default class DonationApprovalPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    async componentDidMount() {
        try {
            let params = queryString.parse(this.props.location.search);
            console.log(params);

            await axios.post('https://api.stlukeirving.org/donation/' + this.props.match.params.id + '/approve',
                {
                    payer_id: params.PayerID,
                    payment_id: params.paymentId,
                    token: params.token
                }
            );
        } catch(e) {
            this.setState({ error: e.message });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        return <div>
            <section className="sa-page-title text-left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Thank you!</h1>
                        </div>
                        <div className="col-md-12">
                            <nav className="breadcrumb">
                            <ul>
                                <li className="breadcrumb-item"><a href="donation.html#">Home</a></li>
                                <li className="breadcrumb-item active">donation approved</li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                { //this.state.loading ? 
                   // <div>Validating payment.</div> :
                        //this.state.error ? <div>Error: {this.state.error}</div>
               // : 
                <div>
                    <section className="sa-product-details-section">
                    <div className="container sa-bg-color">
                        <div className="row">
                        <p className="m-4">
                        <h1>Thank you for making the world a better place!
                                    You should feeld proud of yourself for donating to a worthly cause!</h1>
                                    </p>
                        <div className="weekly-bulletin-iframe">
                        <img className="pdf-file" src="https://inventionland.com/wp-content/uploads/2015/09/National_Thank_You_Day.png"></img>
                        </div>
                        </div>
                    </div>
                
                </section>

                
                </div> }
            </div>
        </div>;
    }
}
