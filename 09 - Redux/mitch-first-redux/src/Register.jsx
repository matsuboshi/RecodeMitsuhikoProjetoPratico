import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rowAdded } from './actions';

export default function Register() {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');

  const handleRegister = () => {
    dispatch(rowAdded(description));
    setDescription('');
  };

  const firstLetterToUpperCase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setDescription(firstLetterToUpperCase(e.target.value))}
        onKeyUp={(e) =>
          description !== '' && e.key === 'Enter' && handleRegister()
        }
        value={description}
        placeholder="Insert data here"
        style={style1}
      />
    </div>
  );
}

const style1 = {
  background: '#af713b',
  border: 'none',
  fontSize: '1.2rem',
  color: 'white',
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  borderBottom: '2px #3bafa2 solid',
  padding: '5px',
  margin: '0px',
  textAlign: 'center',
  width: '95%',
};
