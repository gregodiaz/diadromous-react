import React from 'react';

export default function TravelDetail() {

    return (
        <div className='container-fluid w-auto m-5'>
            <div className="card bg-dark text-white" >
                <div className="card-header">
                    <div className="container d-flex justify-content-between p-4">
                        <div>From City A to City B</div>
                        <div>#1</div>
                    </div >
                </div>
                <div className="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-dark text-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-sm-8">Departure</div>
                                    <div className="col">Price</div>
                                </div>
                                <div className="row">
                                    <div className="col col-sm-2">Buenos Aires</div>
                                    <div className="col col-sm-6">18/11/2022 - 19:36:43</div>
                                    <div className="col">$6943.96</div>
                                </div>
                            </div >
                        </li>
                        <li class="list-group-item bg-dark text-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col col-sm-8">Arrival</div>
                                    <div className="col">Tickets [Remaining/Total]</div>
                                </div>
                                <div className="row">
                                    <div className="col col-sm-2">Buenos</div>
                                    <div className="col col-sm-6">18/11/2022 - 19:36:43</div>
                                    <div className="col">43/65</div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item bg-dark text-white">
                            <div className="container">
                                <div className="row">
                                    <div className="col">Validation</div>
                                </div>
                                <div className="row">
                                    <div className="col col-sm-2">18/11/2022</div>
                                    <div className="col col-sm-2">64%</div>
                                </div>
                                <div className="row">
                                    <div className="col col-sm-2">18/11/2022</div>
                                    <div className="col col-sm-2">64%</div>
                                </div>
                                <div className="row">
                                    <div className="col col-sm-2">18/11/2022</div>
                                    <div className="col col-sm-2">64%</div>
                                </div>
                                <div className="row">
                                    <div className="col col-sm-2">18/11/2022</div>
                                    <div className="col col-sm-2">64%</div>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item bg-dark text-white">
                            <div className="container d-flex justify-content-between">
                                <button className="btn btn-secondary">Back</button>
                                <button className="btn btn-outline-primary">Prev</button>
                                <button className="btn btn-outline-primary">Next</button>
                                <button className="btn btn-warning">Buy</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div >
        </div >
    );
};



