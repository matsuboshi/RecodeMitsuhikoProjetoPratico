import React, { useState, useEffect, Fragment } from 'react';
import { lazy, Suspense } from 'react';
import Loading from './Loading';
const ProductCard = lazy(() => import('../Components/ProductCard'));
const SideMenu = lazy(() => import('../Components/SideMenu'));

export default function SplittedBodyProducts() {
  const [products, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log('Just opened page ---> PRODUCTS');

    let mounted = true;
    fetchProducts().then(() => {
      if (mounted) {
        setloading(false);
        console.log('PRODUCTS MOUNTED');
      }
    });

    return function cleanup() {
      mounted = false;
      console.log('PRODUCTS UNMOUNTED');
    };
  }, []);

  const fetchProducts = async () => {
    const url = 'http://localhost:3001/products';
    const data = await fetch(url);
    const items = await data.json();
    setProducts(items);
    setProductsToShow(items);
    console.log('PRODUCTS FETCHED');
  };

  const handleShowAllButtonClick = () => {
    const newProductsToShow = products;
    setProductsToShow(newProductsToShow);
    console.log('SHOW: Every product!');
  };

  const handleFilterCategoryClick = (category) => {
    const newProductsToShow = products;
    setProductsToShow(
      newProductsToShow.filter((item) => item.categoria === category)
    );
    console.log(`SHOW: ${category}`);
  };

  return (
    <main className="container">
      <section className="row">
        <div className=" col-lg-3 pb-4 font-weight-bold text-white">
          <Suspense fallback={<Loading />}>
            <SideMenu
              onShowAllButtonClick={handleShowAllButtonClick}
              onFilterCategoryClick={handleFilterCategoryClick}
              data={products}
            />
          </Suspense>
        </div>

        <div
          id="productCards"
          className=" col-lg-9  d-flex flex-wrap justify-content-around"
        >
          {loading && <h2>Loading...</h2>}

          {!loading &&
            productsToShow &&
            productsToShow.map((item) => (
              <Fragment key={item.id}>
                <Suspense fallback={<Loading />}>
                  <ProductCard
                    categoria={item.categoria}
                    imagem={item.imagem}
                    descricao={item.descricao}
                    preco={item.preco}
                    preco_venda={item.preco_venda}
                  />
                </Suspense>
              </Fragment>
            ))}
        </div>
      </section>
    </main>
  );
}
