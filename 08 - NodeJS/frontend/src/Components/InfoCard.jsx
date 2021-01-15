import React from 'react';

export default function InfoCard(props) {
  return (
    <div
      className="card text-white mb-4 w-100 shadow-lg"
      style={{ background: 'linear-gradient(90deg, #3D215B, #611e8a)' }}
    >
      <div className="card-body d-flex align-items-center ">
        <i
          className={`${props.fontAwesomeIcon} mr-2`}
          style={{ fontSize: '34px' }}
        ></i>
        <h6 className="card-title m-2">{props.info}</h6>
      </div>
    </div>
  );
}
