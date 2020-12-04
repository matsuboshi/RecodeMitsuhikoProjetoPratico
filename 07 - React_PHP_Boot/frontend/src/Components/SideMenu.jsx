import React, { useEffect, useState } from 'react';
import SideMenuFilterButton from './SideMenuFilterButton';

export default function SideMenu(props) {
  const [allQty, setAllQty] = useState(0);
  const [refQty, setRefQty] = useState(0);
  const [lauQty, setLauQty] = useState(0);
  const [micQty, setMicQty] = useState(0);
  const [disQty, setDisQty] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const url = 'http://recode/React/Atividade%20AVA%20(PDO)/api1.php';
    const data = await fetch(url);
    const items = await data.json();
    setAllQty(items.length);
    setRefQty(items.filter((item) => item.categoria === 'refrigerator').length);
    setLauQty(
      items.filter((item) => item.categoria === 'laundryMachine').length
    );
    setMicQty(items.filter((item) => item.categoria === 'microwave').length);
    setDisQty(items.filter((item) => item.categoria === 'dishwasher').length);
  };

  const allCategories = async () => {
    props.onShowAllButtonClick();
    // console.log(products.length);
  };

  const filterCategory = async (event) => {
    props.onFilterCategoryClick(event.target.id);
  };

  return (
    <>
      <h3>Categorias</h3>
      <div className="btn-group-vertical nav flex-column">
        <button className={styles.button} onClick={allCategories}>
          Todos ({allQty})
        </button>

        <SideMenuFilterButton
          buttonName="Geladeiras"
          category="refrigerator"
          quantity={refQty}
          onClick={filterCategory}
        />

        <SideMenuFilterButton
          buttonName="Lavadoras"
          category="laundryMachine"
          quantity={lauQty}
          onClick={filterCategory}
        />

        <SideMenuFilterButton
          buttonName="Microondas"
          category="microwave"
          quantity={micQty}
          onClick={filterCategory}
        />

        <SideMenuFilterButton
          buttonName="Lava-Loucas"
          category="dishwasher"
          quantity={disQty}
          onClick={filterCategory}
        />
      </div>
    </>
  );
}

const styles = {
  button: 'btn btn-outline-light w-100',
};
