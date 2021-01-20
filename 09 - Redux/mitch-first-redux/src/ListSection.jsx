import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rowResolved, rowRemoved } from './actions';

export default function ListSection() {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.dataList);

  const handleSolved = (e) => {
    dispatch(rowResolved(+e.target.id));
  };
  const handleDelete = (e) => dispatch(rowRemoved(+e.target.id));

  return (
    <div>
      {dataList.length === 0 ? (
        <h2>No data so far!!</h2>
      ) : (
        <table>
          <thead>
            <tr>
              <th style={{ ...style3, width: '100px' }}>Id</th>
              <th style={{ ...style3, width: '300px' }}>Description</th>
              <th style={{ ...style3, width: '100px' }}>Solved</th>
              <th style={{ ...style3, width: '320px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((row) => (
              <tr key={row.id} style={row.resolved ? style1 : style2}>
                <td>{row.id}</td>

                <td>{row.description}</td>
                <td>
                  {row.resolved ? <span>Done!!!</span> : <span>Pending</span>}
                </td>
                <td>
                  <button
                    id={row.id}
                    onClick={handleSolved}
                    style={{ background: '#2A52B0' }}
                  >
                    Check
                  </button>
                  <button
                    id={row.id}
                    onClick={handleDelete}
                    style={{ background: '#E33A36' }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const style1 = {
  background: '#7D4DB0',
};

const style2 = {
  background: '#51968e',
};

const style3 = {
  textAlign: 'center',
  fontSize: '1.3rem',
  padding: '5px',
  textDecoration: 'underline',
};
