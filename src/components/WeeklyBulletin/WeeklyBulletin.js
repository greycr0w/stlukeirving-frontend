import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
class WeeklyBulletin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pdfFile: ""
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

                        </div>
                    
                    </div>
                </div>
            </section>


        <section className="sa-product-details-section">
            <div className="container sa-bg-color">
                <div className="row">
                <h1 className="weekly-bulletin-title">Weekly Bulletin</h1>

                    <div className="weekly-bulletin-iframe">
        
                        {this.state.pdfFile ? <iframe className="pdf-file" src={this.state.pdfFile.file.access_url}></iframe> : null}

                    </div>
                   
                    
                    <div className="col-lg-7 col-md-12 ml-3">
                         

                                <h5 className="mt-3">Download our Weekly Bulletin and be up to date with our newest events.</h5>
                            
                                {this.state.pdfFile ? <a href={this.state.pdfFile.file.access_url} className="btn btn-sm dark-btn mt-3 mb-3">Download</a> : null}

                    </div>
                </div>
            </div>
           
        </section>


            </div>
        )
    }
}

export default WeeklyBulletin