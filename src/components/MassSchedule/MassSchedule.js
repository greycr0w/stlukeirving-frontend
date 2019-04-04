import React, {Component} from 'react';
import Popup from "reactjs-popup";



let styles = {
   
    width: '90%',

  };
  
  export default () => (
    <Popup trigger={<button className="button"> Open Modal </button>} contentStyle={styles}modal>

                    <section className="modal-mass">
                            <div className="sa-schedules-section">
                            <div className="header"> <h2>Mass Schedule</h2> </div>


                                    <div className=" col-12">
                                        <table className="table sa-schedules-table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">Schedule Day</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                <tr>
                                                    <th scope="row">Saturday</th>
                                                    <td>Campus - 1</td>
                                                    <td>2:00 PM - 5:45 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Sunday</th>
                                                    <td>Campus - 1</td>
                                                    <td>4:00 PM - 9:45 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Monday</th>
                                                    <td>Campus - 3</td>
                                                    <td>9:00 PM - 5:45 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Tuesday</th>
                                                    <td>Campus - 2</td>
                                                    <td>2:00 PM - 5:45 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Wednesday</th>
                                                    <td>Campus - 5</td>
                                                    <td>2:00 PM - 5:45 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Thursday</th>
                                                    <td>Campus - 4</td>
                                                    <td>2:00 PM - 5:45 PM</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Friday</th>
                                                    <td>Campus - 4</td>
                                                    <td>2:00 PM - 5:45 PM</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                    </section>
    </Popup>
        
);

