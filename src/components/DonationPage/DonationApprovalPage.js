import React, {Component} from 'react';
import axios from 'axios'
import queryString from 'query-string';
import {Link} from 'react-router-dom';

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
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">donation approved</li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sa-place-section pd-default-3 text-center" ref="selection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="sa-section-title text-center">
                            <h2>We are very thankful.</h2>
                            <p>We are very thankful for this donation, god bless you for being so generous.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>   
        </div>;
    }
}
