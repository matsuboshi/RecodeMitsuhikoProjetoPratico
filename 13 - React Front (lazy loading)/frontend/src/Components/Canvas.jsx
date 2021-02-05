import React from 'react';

export default function Canvas(props) {
  return (
    <div style={{ minHeight: 'calc(100vh - 115px)' }}>{props.children}</div>
  );
}
