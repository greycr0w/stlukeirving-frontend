import React, {Component} from 'react'
import Popup from "reactjs-popup";

import { InputGroup, FormControl, FormCheck} from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Checkbox from 'react-simple-checkbox';
import NumberFormat from 'react-number-format';
import {Redirect} from 'react-router-dom';
import {Alert} from 'reactstrap';
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


let styles = {

    width: '85%',

};

let stylesOverlay = {

    paddingTop: '20px',

};

class JoinNewsletter extends Component {


    constructor(props) {
        super(props)

        this.state = {
            redirect: false,
            fullname: "",
            phone: "",
            tak: false, 
            countries: [],
            email: "",
            isMounted: false
        }
    }

    componentDidMount() {
            axios({ method: 'get',
            url: 'https://api.stlukeirving.org/country',
            })
            .then( (response) => {
                
                console.log(response.data);

                var us = response.data.filter(a=>a.key == "US")[0];
                var active_id = (us && us.id) || response.data[0].id;
                this.setState({countries: response.data, active_id})

            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
         

    }

    async subscribe(close) {
        if(this.state.isMounted === false) {
            this.setState({isMounted: true})
        }              
          console.log("run")


        if( this.state.active_id  && !(this.state.fullname == null || this.state.fullname.length == 0) && !(this.state.email == null || this.state.email.length == 0) && !(this.state.phone == null || this.state.phone.length == 0) && !(this.state.tac == false)) {
            try {
                var data = await axios.put('https://api.stlukeirving.org/mailing_list_record', {
                    name: this.state.fullname,
                    email: this.state.email,
                    phone: this.state.phone,
                    country: { id: this.state.active_id }
                });
                console.log("run")
                // You are beign redirected to PayPal...
                 Swal.fire(
                    'We are happy!',
                    'Thank you for joining our community',
                    'success'
                ).then(()=> {
                    close();

                });


               
            } catch(e) {
                Swal.fire(
                    'That\'s Sad!',
                    (e.response && e.response.data && e.response.data.message) || 'Something bad happened.',
                    'error'
                )
            }
        }
    }
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleTakChange(e) {
        this.setState({tak: e})
    }

    render() {
       

        return (

            <Popup trigger={<button className="btn dark-btn button"> Weekly Bulletin </button>} overlayStyle={stylesOverlay} contentStyle={styles}modal>
            { close =>
            <section className="modal-mass">
            <div className="newsletter-popup-padding" ref="donation">
            <div className="header newsletter-title"> <h2>Subscribe to Receive our Weekly Bulletin</h2> </div>

                    <div className="newsletter-form donation_form">
                        <form>
                    

                          


                            <div className="form-group">
                                  
                                        <div className="row">
                                            <div className="col-sm-12">
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

                                                    <div className="col-sm-12">
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
                                           
                                           <div className="col-sm-12">
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
                                           
                                           <div className="col-sm-12">
                                           
                                               <select className="select form-control border" onChange={a => this.setState({ active_id: a.target.value })} value={this.state.active_id}>
                                               {this.state.countries.map((country) => { 
                                                   return (
                                               <option key={country.id} value={country.id}>{country.name}</option>

                                                )})}
                                               </select>
                                               
                                           </div>
                                        </div>
                                        
                            </div>
                                
                                    <div className="form-check">
                                                <Checkbox
                                                color="#deb668"
                                                className="form-check-input inline-checkbox"
                                                size="3"
                                                tickSize="3"
                                                id="id1"
                                                checked={this.state.tak}
                                                onChange={this.handleTakChange.bind(this)}
                                                >
                                                </Checkbox>
                                             
                                        <label className="newsletter-checkbox-label" htmlFor="id1">I agree to receive emails and text messages on my phone number.
                                                
                                                </label>
                                                    {this.state.tak === false && this.state.isMounted == true 
                                                    ?
                                                    <Errors errors="You need to agree to our Terms and Conditions."/>
                                                    :
                                                    null
                                                    }
                                    </div>
                             
                                    <a className="btn dark-btn mt-3" onClick={a => this.subscribe(close)} >Join</a>
                        </form>
                    </div>
                    </div>
            </section>
            }
    </Popup>
        )
    }
}

function Errors(props) {
    const errors = props.errors;

    if (true) {
        return (
            <Alert className="alert-newsletter" color="danger" isOpen={true}>
                {errors}
            </Alert>
        );
    }
    return "";
}

export default JoinNewsletter;