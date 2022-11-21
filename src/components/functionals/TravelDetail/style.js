import React from 'react';

export const CardHeader = ({ departure, arrival, id }) => {
  return (
    <div className="card-header">
      <div className="container d-flex justify-content-between p-4">
        <div>Travel from <i>{departure}</i> to <i>{arrival}</i></div>
        <div>#{id}</div>
      </div>
    </div>
  );
};

export const CardBodyLi = ({ leftTitle, rightTitle, leftText, rightText }) => {
  return (
    <li className="list-group-item bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col col-sm-8">{leftTitle}</div>
          <div className="col">{rightTitle}</div>
        </div>
        <div className="row">
          <div className="col col-sm-8">{leftText}</div>
          <div className="col">{rightText}</div>
        </div>
      </div>
    </li>
  );
};

