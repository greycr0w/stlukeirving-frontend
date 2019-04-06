import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';

class UnsubscribeNewsletter extends Component {


    constructor(props) {

        super(props)

        this.state = {


        }
    }

    componentDidMount() {

        
        axios({ method: 'delete',
        url: 'https://api.stlukeirving.org/unsubscribe' + window.location.search,
        })
        .then( (response) => {
            
        })
        .catch(function (e) {
            Swal.fire(
                'That\'s Sad!',
                (e.response && e.response.data && e.response.data.message) || 'Something bad happened.',
                'error'
            )
        });
    }


    render() {

        return(
            <div>

            <section className="sa-page-title text-left">   
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Unsubscribed</h1>
                        </div>
                        <div className="col-md-12">
                            <nav className="breadcrumb">
                            <ul>
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active">Unsubscribed</li>
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
                            <h2>We are sorry to see you leaving.</h2>
                            <p>You have unsubscribed from our emailing list, you will no longer receive content regarding the St. Luke Irving Church</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>       




            </div>


        )
    }
}

export default UnsubscribeNewsletter;