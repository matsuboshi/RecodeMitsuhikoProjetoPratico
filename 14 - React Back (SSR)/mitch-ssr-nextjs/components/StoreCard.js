import React from 'react';

export default function StoreCard(props) {
  return (
    <div className="col-lg-4 d-flex justify-content-center">
      <div
        className="card text-white m-3 border-0 shadow-lg"
        style={{
          minWidth: '15rem',
          background: 'linear-gradient(90deg, #3D215B, #611e8a)',
        }}
      >
        <img src={props.image} className="card-img-top" alt={props.image} />
        <div className="card-body">
          <h5 className="card-title">{props.city}</h5>
          <p className="card-text">
            {props.address}
            <br />
            {props.floor}
            <br />
            {props.district}
            <br />
            {props.number}
          </p>
        </div>
      </div>
    </div>
  );
}
