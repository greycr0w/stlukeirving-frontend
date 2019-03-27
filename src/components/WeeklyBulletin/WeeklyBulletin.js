import React, {Component} from 'react';

class WeeklyBulletin extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
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
                                <h2>Download our Weekly Bulletin, and be up to date with our newest events.</h2>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div className="mt-5">
                                <h5>Short Description</h5>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered altera putintion in some form, by injected humour, or randomised words which don't look even slightly you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
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