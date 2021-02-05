import React, { useEffect } from 'react';

export default function SideMenuFilterButton(props) {
  useEffect(() => {
    console.log('I am a BUTTON!');
  }, []);

  const filterCategory = async (event) => {
    props.onClick(event);
  };

  return (
    <button
      className={styles.button}
      onClick={filterCategory}
      id={props.category}
      style={{ fontSize: '1.2rem', textAlign: 'start' }}
    >
      {props.category}
      <span className="mx-2 badge badge-pill badge-success">
        {props.quantity}
      </span>
    </button>
  );
}

const styles = {
  button:
    'btn btn-outline-light w-100 d-flex justify-content-between align-items-center',
};
