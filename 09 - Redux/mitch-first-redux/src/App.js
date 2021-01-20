import React from 'react';
import Stats from './Stats';
import Settings from './Settings';
import ListSection from './ListSection';
import Header from './Header';
import Register from './Register';

export default function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Header />
        <div style={style1}>
          <Stats />
        </div>
        <div style={style2}>
          <Register />
        </div>
        <div style={style3}>
          <ListSection />
        </div>
        <div style={style2}>
          <Settings />
        </div>
      </div>
    </>
  );
}

const style1 = {
  background: '#51968e',
  marginBottom: '20px',
  padding: '20px',
  borderRadius: '15px',
  width: '430px',
};

const style2 = {
  background: '#af713b',
  marginBottom: '20px',
  padding: '20px',
  borderRadius: '15px',
  width: '430px',
};

const style3 = {
  marginBottom: '20px',
  borderRadius: '15px',
  width: '600px',
  display: 'flex',
  justifyContent: 'center',
};
