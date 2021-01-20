import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const title = useSelector((state) => state.title);
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
