import React, {Component} from 'react'
import Popup from "reactjs-popup";

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


let styles = {
   
    width: '40%',

};

class JoinNewsletter extends Component {


    constructor(props) {
        super(props)

        this.state = {
            fullname: "",
            phone: "",
            tak: false, 
            email: ""
        }
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleTakChange(e) {
        this.setState({tak: e})
    }

    render() {

        return(
            <Popup trigger={<button className="btn dark-btn button"> Join Newsletter </button>} contentStyle={styles}modal>

            <section className="modal-mass">
            <div className="section-padding" ref="donation">
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
                                           
                                               <select className="select form-control border">
                                               
                                               </select>
                                               
                                           </div>
                                        </div>
                                        
                            </div>
                            <div className="form-group">
                                <div className="row">
                                <div className="col-md-9 col-lg-10">

                                <a href={true} className="btn dark-btn" >Join</a>
</div>
                                    <div className="col-md-9 col-lg-10">
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
            </section>
    </Popup>

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

export default JoinNewsletter;