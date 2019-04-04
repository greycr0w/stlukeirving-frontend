import React, {Component} from 'react';

class Events extends Component {

    constructor(props) {
        super(props)
        this.state = {
            events: "",
            latestEvents: "",
            upcomingEvents: "",

        }


    }

    render() {

        return(
            <div>

                <section className="sa-page-title donation text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h1>Events</h1>
                        </div>
                            <div className="col-md-12">
                                <nav className="breadcrumb">
                                <ul>
                                    <li className="breadcrumb-item"><a href="shop-details.html#">Home</a></li>
                                    <li className="breadcrumb-item active">Upcoming Events</li>

                                </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding latest_event_sermons m-0">

      	<div className="container">
          	<div className="row">
      			<div className="col-md-6 col-lg-7">
                  	<div className="heading">
          	        	<h3>Latest Events</h3>
      	                <a href="next-events.html#" className="btn btn-sm pull-right">See All</a>
                      </div>
                      <div className="event_list">
                      	<ul>
                          	<li>
                              	<div className="event_info">
                                      <div className="event_date">
                                          <span>20</span> Aug'18
                                      </div>
                                      <h6><a href="next-events.html#">Which is the same as saying</a></h6>
                                      <ul>
                                          <li><i className="fa fa-clock-o"></i> Sunday  (8:00 am -9:00 am)</li>
                                          <li><i className="fa fa-map-marker"></i> 56 Thatcher Avenue River Forest</li>
                                      </ul>
                                  </div>
                              </li>
                              <li>
                              	<div className="event_info">
                                      <div className="event_date">
                                          <span>16</span> Aug'18
                                      </div>
                                      <h6><a href="next-events.html#">If you are going to use</a></h6>
                                      <ul>
                                          <li><i className="fa fa-clock-o"></i> Sunday  (8:00 am -9:00 am)</li>
                                          <li><i className="fa fa-map-marker"></i> 56 Thatcher Avenue River Forest</li>
                                      </ul>
                                  </div>
                              </li>
                              <li>
                              	<div className="event_info">
                                      <div className="event_date">
                                          <span>27</span> Aug'18
                                      </div>
                                      <h6><a href="next-events.html#">Nor again is there anyone</a></h6>
                                      <ul>
                                          <li><i className="fa fa-clock-o"></i> Sunday  (8:00 am -9:00 am)</li>
                                          <li><i className="fa fa-map-marker"></i> 56 Thatcher Avenue River Forest</li>
                                      </ul>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>

                  <div className="col-md-6 col-lg-5">
                      <div className="heading sa-heading-2">
                          <h3>Latest Events</h3>
                          <a href="next-events.html#" className="btn btn-sm pull-right">See All</a>
                      </div>
                      <div className="event_list">
                          <ul>
                              <li>
                                  <div className="event_info sa-event-info-2">
                                      <div className="thumb">
                                          <img src="../assets/images/event/01.png" alt="img"></img>
                                      </div>
                                      <div className="event-location">
                                          <div className="event_date">
                                              <span>20</span> Aug'18
                                          </div>
                                          <h6><a href="next-events.html#">Which is same as saying</a></h6>
                                          <ul>
                                              <li><i className="fa fa-clock-o"></i> Sunday  (8:00 am -9:00 am)</li>
                                              <li><i className="fa fa-map-marker"></i> 56 Thatcher Avenue River</li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div className="event_info sa-event-info-2">
                                      <div className="thumb">
                                          <img src="../assets/images/event/02.png" alt="img"></img>
                                      </div>
                                      <div className="event-location">
                                          <div className="event_date">
                                              <span>16</span> SEP’18
                                          </div>
                                          <h6><a href="next-events.html#">If you are going to use</a></h6>
                                          <ul>
                                              <li><i className="fa fa-clock-o"></i> Sunday  (8:00 am — 9:00 am)</li>
                                              <li><i className="fa fa-map-marker"></i> 56 Thatcher Avenue River Forest</li>
                                          </ul>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      <section className="pd-default-2 bg-gray">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="sa-section-title text-center">
                        <h2>Upcoming Events</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some</p>
                    </div>
                </div>
            </div>
            <div className="events_wrap">
                <div className="event_date">
                    <span>20</span> Aug'18
                </div>
                <div className="event_img">
                    <a href="next-events.html#"><img src="../assets/images/event/event-1.jpg" alt="image"></img></a>
                </div>
                <div className="event_info">
                    <h4><a href="next-events.html#">Which is the same as saying</a></h4>
                    <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.</p>
                    <ul>
                        <li><i className="fa fa-clock-o"></i> Sunday  (8:00 am -9:00 am)</li>
                        <li><i className="fa fa-map-marker"></i> 56 Thatcher Avenue River Forest</li>
                    </ul>
                    <a href="next-events.html#" className="btn">Join Now <i className="fa fa-caret-right"></i> </a>
                </div>
            </div>
        
            <div className="events_wrap">
                <div className="event_date">
                    <span>26</span> Aug'18
                </div>
                <div className="event_img">
                    <a href="next-events.html#"><img src="../assets/images/event/event-2.jpg" alt="image"></img></a>
                </div>
                <div className="event_info">
                    <h4><a href="next-events.html#">On the other hand, we denounce</a></h4>
                    <p>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend.</p>
                    <ul>
                        <li><i className="fa fa-clock-o"></i> Sunday  (8:00 am -9:00 am)</li>
                        <li><i className="fa fa-map-marker"></i> 56 Thatcher Avenue River Forest</li>
                    </ul>
                    <a href="next-events.html#" className="btn">Join Now <i className="fa fa-caret-right"></i> </a>
                </div>
            </div>
        </div>
    </section>

           
            </div>

        )
    }
}

export default Events;