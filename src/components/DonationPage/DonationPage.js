import React, {Component} from 'react';
import { setServers } from 'dns';
import { InputGroup, FormControl, FormCheck, FormGroup } from 'react-bootstrap';
import Checkbox from 'react-simple-checkbox';
import NumberFormat from 'react-number-format';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
import {Alert } from 'reactstrap';
import ReactFitText from 'react-fittext';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';

import Swal from 'sweetalert2';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class DonationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            active: "",
            amount: "",
            country: "",
            countries: ["c", "sad", "life"],
            message: "",
            fullname: "",
            phone: "",
            tak: false, 
            email: "",
            isMounted: false,
            isLoading: true
        }



        this.amounts = [10, 25, 50, 100, 500];
    }


    
    onSelectAmount(val) {
        this.setState({amount: val});

    }

    handleAmountChange(e) {
        this.setState({amount: e.value})

    }

    //same event handler for both inputs
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    componentDidMount() {

        axios({ method: 'get',
        url: 'https://api.stlukeirving.org/donation_category',
        })
        .then( (response) => {
            
            console.log(response.data);
            this.setState({categories: response.data})
            this.setState({isLoading: false})

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });

        axios({ method: 'get',
        url: 'https://api.stlukeirving.org/countries',
        })
        .then( (response) => {
            
            console.log(response.data);
            this.setState({countries: response.data})

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }

 

    handleTakChange(e) {
        this.setState({tak: e})
    }

    async donate() {
        
        if(this.state.isMounted === false) {
            this.setState({isMounted: true})
        }

        if( this.state.active  && !(this.state.amount == null || this.state.amount.length == 0) && !(this.state.fullname == null || this.state.fullname.length == 0) && !(this.state.email == null || this.state.email.length == 0) && !(this.state.phone == null || this.state.phone.length == 0) && !(this.state.tak == false)) {
            try {
                var data = await axios.put('https://api.stlukeirving.org/donation', {
                    name: this.state.fullname,
                    email: this.state.email,
                    phone: this.state.phone,
                    amount: this.state.amount,
                    category: { id: this.state.active.id }
                });

                // You are beign redirected to PayPal...

                if(data.data.approve_url) {
                    window.location = data.data.approve_url;
                }
            } catch(e) {
                Swal.fire(
                    'That\'s Sad!',
                    'Your donation didin\'t go through our system, please try again.',
                    'error'
                )
            }
        }
    }

    render() {
        
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
            <section className="sa-place-section pd-default-3 text-center" ref="selection">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="sa-section-title text-center">
                            <h2>Support our Saints</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                        </div>
                    </div>
                </div>                 
                <div className="row justify-content-center">
                <ClipLoader
                css={override}
                sizeUnit={"px"}
                size={80}
                color={'#deb668'}
                loading={this.state.isLoading}
            />
                {this.state.categories.map((category) => { 
                    return (
                    <div className="col-lg-3 col-md-4">
                        <div className="sa-place-single">
                        <img className="img-responsive" src={category.photo ? category.photo.access_url : "https://via.placeholder.com/400x300"} />
                                <div className="sa-place-info">
                            
                                <ReactFitText maxFontSize={28}>
                                <h2>{category.name}</h2>
                                </ReactFitText>
                                <p>View on Maps</p>
                                <a className="sa-btn-transparent" onClick={a => { this.setState({ active: category }); this.refs.donation.scrollIntoView({behavior:'smooth',block:'start'})}}>{this.state.active === category ? 'Selected' : 'Choose'} <i className="fa fa-caret-right"></i></a>
                            </div>
                        </div>
                    </div>
                    ) 
                    })}
                </div>
            </div>
        </section>
        
            <div className="section-padding" ref="donation">
                <div className="container">
                    <div className="donation_form">
                        <form>
                    

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Chosen *</label>
                                    </div>
                                    
                                        { this.state.active ? <div className="col-md-9">

                                            <h2>{ this.state.active.name }</h2>
                                        </div> : <div className="col-md-9" onClick={a => this.refs.selection.scrollIntoView({behavior:'smooth',block:'start'})}>
                                            <Errors  errors="Please select an entitiy."/>
                                        </div>}
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-lg-2">
                                        <label className="form-label">Donation Amount *</label>
                                    </div>
                                    <div className="col-md-9 col-lg-10">
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">$</span>
                                        
                                            </div>
                                            <NumberFormat allowNegative={false} className="form-control border w-auto" thousandSeparator={true} value={this.state.amount}  onValueChange={this.handleAmountChange.bind(this)}/>

                                            <div className="error-msg">
                                            {(!this.state.amount || !this.state.amount.length) && this.state.isMounted == true 
                                            ?
                                            <Errors errors="Donation Amount is required."/>
                                            :
                                            null
                                            }
                                        </div>

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

                                    <InputGroup name="message" value={this.state.message} onChange={this.handleChange.bind(this)}>
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
                                                <input type="text" className="form-control border" placeholder="Fullname" name="fullname" value={this.state.fullname} onChange={this.handleChange.bind(this)}></input>
                                                {(!this.state.fullname || !this.state.fullname.length) && this.state.isMounted == true 
                                                ?
                                                <Errors errors="Fullname is required."/>
                                                :
                                                null
                                                }
                                                    </div>
                                          
                                            
                                        </div>
                                        <div className="row mt-3">
                                           
                                                    <div className="col-sm-6">
                                                        <input type="email" className="form-control border" placeholder="Email address" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}></input>
                                                        {(!this.state.email || !this.state.email.length) && this.state.isMounted == true 
                                                        ?
                                                        <Errors errors="Email addrress is required."/>
                                                        :
                                                        null
                                                        }
                                                    </div>
                                            
                                        </div>
                                        <div className="row mt-3">
                                           
                                           <div className="col-sm-6">
                                               <input type="email" className="form-control border" placeholder="Phone number" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this)}></input>
                                               {(!this.state.phone || !this.state.phone.length) && this.state.isMounted == true 
                                               ?
                                               <Errors errors="Phone number is required."/>
                                               :
                                               null
                                               }
                                           </div>
                                         
                                        </div>
                                        <div className="row mt-3">
                                           
                                           <div className="col-sm-6">
                                           
                                               <select className="select form-control border">
                                               {this.state.countries.map((country) => { 
                                                   return (
                                               <option value={country} onChange={this.handleChange.bind(this)}>{country}</option>

                                                )})}
                                               this.state
                                               </select>
                                               
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
                                    <a href={true} className="btn dark-btn" onClick={this.donate.bind(this)}>Donate</a>
                                        <div className="form-check">
                                            <Checkbox
                                            color="#deb668"
                                            className="form-check-input universal-checkbox"
                                            size="3"
                                            tickSize="3"
                                            id="id1"
                                            checked={this.state.tak}
                                            onChange={this.handleTakChange.bind(this)}
                                            >

                                            </Checkbox>
                                            <label className="universal-checkbox-label" htmlFor="id1">I agree to receive emails and text messages on my phone number.
                                        
                                            </label>
                                            {this.state.tak === false && this.state.isMounted == true 
                                            ?
                                            <Errors errors="You need to agree to our Terms and Conditions."/>
                                            :
                                            null
                                            }
                                        </div>
                                        
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


function Errors(props) {
    const errors = props.errors;

    if (true) {
        return (
            <Alert color="danger" isOpen={true}>
                {errors}
            </Alert>
        );
    }
    return "";
  }

export default DonationPage;