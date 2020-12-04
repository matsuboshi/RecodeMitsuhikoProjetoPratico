import React, { useEffect, useState } from 'react';

export default function SideMenu(props) {
  const [products, setProducts] = useState(0);
  const [categorySet, setCategorySet] = useState([]);

  useEffect(() => {
    fetchProducts();
    console.log('Side menu iterated!');
  }, []);

  const fetchProducts = async () => {
    const url =
      'http://projetopraticomitsuhikorecode/07%20-%20React_PHP_Boot/backend/getProd.php';
    const data = await fetch(url);
    const items = await data.json();
    setProducts(items);
    buildUniqueSetOfCategories(items);
  };

  const buildUniqueSetOfCategories = (items) => {
    const categories = items.map((item) => item.categoria);
    const uniqueCategories = [...new Set(categories)];
    setCategorySet(uniqueCategories);
  };

  const allCategories = async () => {
    props.onShowAllButtonClick();
  };

  const filterCategory = async (event) => {
    props.onFilterCategoryClick(event.target.id);
  };

  return (
    <>
      <h3>Categorias</h3>
      <div className="btn-group-vertical nav flex-column">
        <button
          className={styles.button}
          onClick={allCategories}
          style={{ fontSize: '1.2rem', textAlign: 'start' }}
        >
          Todos
          <span className="mx-2 badge badge-pill badge-success">
            {products.length}
          </span>
        </button>

        {categorySet.map((category, idx) => {
          return (
            <button
              key={idx}
              className={styles.button}
              onClick={filterCategory}
              id={category}
              style={{ fontSize: '1.2rem', textAlign: 'start' }}
            >
              {category}
              <span className="mx-2 badge badge-pill badge-success">
                {products.filter((item) => item.categoria === category).length}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}

const styles = {
  button:
    'btn btn-outline-light w-100 d-flex justify-content-between align-items-center',
};
