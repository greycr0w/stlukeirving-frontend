import React, {Component} from 'react';
import Popup from "reactjs-popup";



let styles = {
   
    width: '90%',

  };
  
  export default () => (
    <Popup trigger={<button>Mass </button>} contentStyle={styles}modal>

                    <section className="modal-mass">
                            <div className="sa-schedules-section">
                            <div className="header"> <h2 className="mass-schedule-title">Mass Schedule</h2> </div>


                                    <div className=" col-12">
                                        <table className="table sa-schedules-table">
                                            <thead className="thead-dark">
                                                <tr>
                                                    <th scope="col">Monday-Saturday</th>
                                                    <th scope="col">Tuesday-Friday</th>
                                                    <th>Saturday</th>
                                                    <th className="text-align-left" >Sunday</th>
                                   
                                                
                                                </tr>
                                            </thead>
                                            <tbody className="table-body">
                                                <tr>
                                                    <th scope="row">English 6:30 A.M. Paraliturgy 
                                                    <br></br>
                                                    English 8:00 A.M.
                                                    </th>
                                                    <th>Spanish 7:00 P.M.</th>
                                                    <th>English 5:30 P.M.</th>
                                                    <th>English: 7:30 A.M. & 11:00 A.M.
                                                    <br></br>
                                                    Spanish: 9:00 A.M., 1:00 P.M., 3:00 P.M., & 4:30 P.M.
                                                    <br></br>
                                                    Portuguese: 6:00 P.M.
                                                    </th>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                    </section>
    </Popup>
        
);

