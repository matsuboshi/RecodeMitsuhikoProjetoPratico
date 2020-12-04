import React from 'react';

export default function ProductCard(props) {
  const show_info = (event) => {
    const target = event.currentTarget;
    const element = target.getElementsByTagName('figcaption')[0];
    element.style.visibility = 'initial';
  };

  const hide_info = (event) => {
    const target = event.currentTarget;
    const element = target.getElementsByTagName('figcaption')[0];
    element.style.visibility = 'hidden';
  };

  return (
    <div
      className="itemDiv "
      id={`${props.categoria}`}
      style={{ display: 'inline-block' }}
    >
      <div
        className="card  m-2 border-0 shadow-lg"
        style={{
          width: '15rem',
          height: '23rem',
          background: 'linear-gradient(70deg, #3D215B, #611e8a)',
        }}
      >
        <figure
          onMouseOver={show_info}
          onMouseOut={hide_info}
          className="d-flex justify-content-center align-items-center"
        >
          <figcaption
            className="position-absolute"
            style={{ visibility: 'hidden' }}
          >
            <button className="btn btn-success shadow">
              <span className="lead">Ver info</span>
            </button>
          </figcaption>

          <img
            src={require(`../${props.imagem}`).default}
            className="card-img-top p-3"
            alt={`${props.imagem}`}
            style={{ background: '#5c1986' }}
          />
        </figure>

        <div className="card-body text-center pt-0">
          <p className="card-text" style={{ fontSize: '0.8rem' }}>
            {props.descricao}
          </p>

          <div className="card-text d-flex justify-content-between">
            <p
              className=" text-danger  font-weight-bold "
              style={{ textDecoration: 'line-through' }}
            >
              R$ {props.preco}
            </p>

            <p className="font-weight-bold">R$ {props.preco_venda}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
