import React, { useState } from 'react';

export default function SideMenuFilterButton(props) {
  const filterCategory = async (event) => {
    props.onClick(event);
  };

  return (
    <button
      className="btn btn-outline-light w-100"
      onClick={filterCategory}
      id={`${props.category}`}
    >
      {props.buttonName} ({props.quantity})
    </button>
  );
}
