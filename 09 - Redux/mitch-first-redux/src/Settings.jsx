import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTitle, allRowsRemoved } from './actions';

export default function Settings() {
  const [titleInput, setTitleInput] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const dispatch = useDispatch();
  const title = useSelector((state) => state.title);

  const handleChangeButton = () => {
    dispatch(updateTitle(titleInput));
  };

  const firstLetterToUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div>
      <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>
        Settings
        {!isSettingsOpen && (
          <button
            style={{ background: '#2A52B0' }}
            onClick={() => {
              setIsSettingsOpen(!isSettingsOpen);
              setTitleInput(title);
            }}
          >
            Open
          </button>
        )}
        {isSettingsOpen && (
          <button
            style={{ background: '#E33A36' }}
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            Close
          </button>
        )}
      </h2>

      {isSettingsOpen && (
        <>
          <p style={style2}>
            <span>
              Title:
              <input
                type="text"
                value={titleInput}
                onChange={(e) =>
                  setTitleInput(firstLetterToUpperCase(e.target.value))
                }
                style={style1}
                onKeyUp={(e) => e.key === 'Enter' && handleChangeButton()}
              />
            </span>
            <button
              onClick={handleChangeButton}
              style={{ background: '#2A52B0' }}
            >
              Save
            </button>
          </p>

          <p style={style2}>
            <span>Clear all data</span>
            <button
              onClick={() => dispatch(allRowsRemoved())}
              style={{ background: '#2A52B0' }}
            >
              Clear
            </button>
          </p>
        </>
      )}
    </div>
  );
}

const style1 = {
  background: 'rgba(0,0,0,0)',
  border: 'none',
  color: 'white',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  borderBottom: '1px white solid',
  padding: '3px',
  margin: '0px 7px',
  textAlign: 'center',
  width: '180px',
};

const style2 = {
  background: 'rgba(0,0,0,0.2)',
  borderRadius: '3px',
  padding: '0 10px',
  marginBottom: '0px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};
