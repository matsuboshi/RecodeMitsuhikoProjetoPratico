import React from 'react';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#3D215B' }}>
      <div
        className="container text-center text-white font-weight-bold d-flex flex-column justify-content-center align-items-center"
        style={{ height: '120px' }}
      >
        <p className="m-0 p-0">Formas de pagamento:</p>
        <p className="m-0 p-0">
          <img alt="payment" className="mx-1" height="40px" src="visa.svg" />
          <img alt="payment" className="mx-1" height="40px" src="master.svg" />

          <img
            alt="payment"
            className="mx-1"
            height="40px"
            src="discover.svg"
          />
          <img
            alt="payment"
            className="mx-1"
            height="40px"
            src="american.svg"
          />
          <img alt="payment" className="mx-1" height="40px" src="paypal.svg" />
          <img alt="payment" className="mx-1" height="40px" src="bitcoin.svg" />
        </p>
        <p className="m-0 p-0">&copy; Recode Pro</p>
      </div>
    </footer>
  );
}
