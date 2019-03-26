import React, {Component} from 'react';
import { setServers } from 'dns';
import { InputGroup, InputGroupAddon, InputGroupText, Input, FormControl } from 'react-bootstrap';


class DonationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPayClick: false,
            amount: "",
            message: "",
            fullname: "", 
            email: ""
        }

        this.amounts = [10, 25, 50, 100, 500];
    }


    onSelectAmount(val) {
        this.setState({amount: val});

    }

    handleAmountChange(e) {
        this.setState({amount: e.target.value});

    }

    handleEmailChange(e) {
        this.setState({email: e.target.value});
    }
    
    handleFullnameChange(e) {
        this.setState({fullname: e.target.value})
    }

    handleMessageChange(e) {
            this.setState({message: e.target.value})
        
    }

    render() {

        console.log(this.state.amount)
        console.log(this.state.email)
        console.log(this.state.fullname)
        console.log(this.state.message)

        return (
            <div>
            <section className="sa-page-title text-left">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Donation Page</h1>
                        </div>
                        <div className="col-md-12">
                            <nav className="breadcrumb">
                            <ul>
                                <li className="breadcrumb-item"><a href="donation.html#">Home</a></li>
                                <li className="breadcrumb-item active">Donation Page</li>
                            </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section-padding">
                <div className="container">
                    <div className="donation_form">
                        <form>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Donation Amount *</label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <div className="input-group mb-3">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon1">$</span>
                                        </div>
                                        <input type="number" className="form-control border w-auto" value={this.state.amount} onChange={this.handleAmountChange.bind(this)}></input>
                                        </div>
                                        <ul className="select_amount">
                                        {this.amounts.map(item => <li key={item} className={item == this.state.amount ? 'active' : ''} onClick={() => this.onSelectAmount(item)}>{item}$</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                          

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Message</label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                    <InputGroup  value={this.state.message} onChange={this.handleMessageChange.bind(this)}>
                                        <FormControl
                                        className="form-control border"
                                        rows="3"
                                        as="textarea" 
                                        maxLength="250"
                                        aria-label="With textarea" 
                                        />
                                    </InputGroup>

                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Donator Details * </label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control border" placeholder="Full Name" value={this.state.fullname} onChange={this.handleFullnameChange.bind(this)}></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="email" className="form-control border" placeholder="Email Address" value={this.state.email} onChange={this.handleEmailChange.bind(this)}></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2 m_none">
                                        &nbsp;
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <input type="submit" className="btn dark-btn" value="Donate Now"></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        )
    }
}

export default DonationPage;