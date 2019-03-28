import React, {Component} from 'react';
import axios from 'axios';

class WeeklyBulletin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pdfFile: null
        }
      
    }
    componentDidMount() {

        let pdfFile
        axios({ method: 'get',
        url: 'https://api.stlukeirving.org/bulletin/last',
        })
        .then( (response) => {
            pdfFile = response.data
            console.log(response);
            this.setState({pdfFile: pdfFile})

        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


    }
    render() {
console.log(this.state);
        return(
            <div>
            <section className="sa-page-title donation text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1>Weekly Bulletin</h1>
                    </div>
                    <div className="col-md-12">
                        <nav className="breadcrumb">
                        <ul>
                            <li className="breadcrumb-item"><a href="shop-details.html#">Home</a></li>
                            <li className="breadcrumb-item active">Weekly Bulletin</li>

                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>



        <section className="sa-product-details-section">
            <div className="container sa-bg-color">
                <div className="row">
                <div className="weekly-bulletin-iframe">
                {this.state.pdfFile ? <iframe className="pdf-file" src={this.state.pdfFile.file.access_url}></iframe> : null}
                </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="row justify-content-center text-center">

                        </div>
                    </div>
                    
                    <div className="col-lg-7 col-md-12">
                        <div className="sa-single-product-details-area">
                            <div className="sa-single-product-details-social">
                                <ul>
                                    <li><a href="shop-details.html#"><i className="fa fa-share-alt"></i></a></li>
                                    <li><a href="shop-details.html#"><i className="fa fa-heart"></i></a></li>
                                </ul>
                            </div>
                            <div className="sa-single-product-details">
                                {this.state.pdfFile ? <a href={this.state.pdfFile.file.access_url} className="btn btn-lg dark-btn mt-3">Download</a> : null}

                                <h2>Download our Weekly Bulletin, and be up to date with our newest events.</h2>

                                <br></br>
                                <br></br>
                                <br></br>
                                <div className="mt-5">
                                <h5>Short Description</h5>
                                <p>This is Weekly Bulletin, in this PDF</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </section>


            </div>
        )
    }
}

export default WeeklyBulletin