import { Fragment } from 'react';
import { server } from '../config';
import Meta from '../components/Meta';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';

const products = ({ products }) => {
  return (
    <div>
      <Meta title="Produtos" />
      <Header page="Produtos" />
      <div
        id="productCards"
        className="d-flex flex-wrap justify-content-around"
      >
        {products.map((item) => (
          <Fragment key={item.id}>
            <ProductCard
              categoria={item.categoria}
              imagem={item.imagem}
              descricao={item.descricao}
              preco={item.preco}
              preco_venda={item.preco_venda}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default products;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/products`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
