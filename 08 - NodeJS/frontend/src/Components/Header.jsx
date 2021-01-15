import React from 'react';

export default function Header({ title, text }) {
  return (
    <header
      className="container text-white border-bottom border-white mb-3"
      style={{ paddingTop: '75px' }}
    >
      <h2>{title}</h2>
      <p className="lead">{text}</p>
    </header>
  );
}
