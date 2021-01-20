import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Stats() {
  const dataList = useSelector((state) => state.dataList);
  const dataListSolved = useSelector((state) =>
    state.dataList.filter((row) => row.resolved)
  );
  const dataListNotSolved = useSelector((state) =>
    state.dataList.filter((row) => !row.resolved)
  );

  const row = dataList.slice(-1)[0];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <div style={style3}>
        <h2>Stats: </h2>
      </div>

      <div style={style3}>
        <span style={style2}>
          Solved:
          <span style={style1}> {dataListSolved.length}</span>
        </span>

        <span style={style2}>
          Not solved:
          <span style={style1}> {dataListNotSolved.length}</span>
        </span>
      </div>

      <div style={style3}>
        <span style={style2}>
          Total:
          <span style={style1}> {dataList.length}</span>
        </span>

        <span style={style2}>
          Recent:
          {dataList.length === 0 ? (
            <span style={style1}> No data so far! </span>
          ) : (
            <span style={style1}>
              {' '}
              ID {row.id} - {row.resolved ? 'Solved' : 'Not solved'}
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

const style1 = {
  color: 'white',
  background: '#7D4DB0',
  padding: '2px 6px 2px 2px ',
  margin: '3px',
  borderRadius: '10px',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
};

const style2 = {
  margin: '3px',
};

const style3 = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 10px',
};
