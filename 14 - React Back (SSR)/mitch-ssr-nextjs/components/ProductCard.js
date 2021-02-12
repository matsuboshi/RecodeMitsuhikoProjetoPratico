import React from 'react';

export default function ProductCard(props) {
  const show_info = (event) => {
    const img = event.currentTarget.querySelector('img');
    img.className = 'card-img-top p-2';
    img.style.background = '#812db1';

    const target = event.currentTarget;
    const infoButton = target.getElementsByTagName('figcaption')[0];
    infoButton.style.visibility = 'initial';

    const wholeCard = event.currentTarget;
    wholeCard.classList.add('shadow');
  };

  const hide_info = (event) => {
    const img = event.currentTarget.querySelector('img');
    img.className = 'card-img-top p-4';
    img.style.background = '#5c1986';

    const target = event.currentTarget;
    const element = target.querySelector('figcaption');
    element.style.visibility = 'hidden';

    const wholeCard = event.currentTarget;
    wholeCard.classList.remove('shadow');
  };

  return (
    <div
      className="card  m-2 border-0 shadow-lg"
      style={{
        width: '15rem',
        height: '23rem',
        background: 'linear-gradient(70deg, #3D215B, #611e8a)',
      }}
      id={`${props.categoria}`}
      onMouseOver={show_info}
      onMouseOut={hide_info}
    >
      <figure className="d-flex justify-content-center align-items-center">
        <figcaption
          className="position-absolute"
          style={{ visibility: 'hidden' }}
        >
          <button className="btn btn-success shadow">
            <span className="lead">Ver info</span>
          </button>
        </figcaption>

        <img
          src={props.imagem}
          className="card-img-top p-4"
          alt={`${props.imagem}`}
          style={{ background: '#5c1986' }}
        />
      </figure>

      <div className="card-body text-center pt-0">
        <p className="card-text text-white" style={{ fontSize: '0.8rem' }}>
          {props.descricao}
        </p>

        <div className="card-text d-flex justify-content-between">
          <p
            className=" text-danger  font-weight-bold "
            style={{ textDecoration: 'line-through' }}
          >
            R$ {props.preco}
          </p>

          <p className="font-weight-bold text-white">R$ {props.preco_venda}</p>
        </div>
      </div>
    </div>
  );
}
