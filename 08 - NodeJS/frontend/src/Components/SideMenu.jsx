import React, { useEffect, Fragment } from 'react';
import SideMenuFilterButton from './SideMenuFilterButton';

export default function SideMenu(props) {
  useEffect(() => {
    console.log('Side menu iterated!');
  }, []);

  const buildUniqueSetOfCategories = (items) => {
    const categories = items.map((item) => item.categoria);
    const uniqueCategories = [...new Set(categories)];
    return uniqueCategories;
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
        <SideMenuFilterButton
          category={`Todos`}
          quantity={props.data.length}
          onClick={allCategories}
        />

        {buildUniqueSetOfCategories(props.data).map((category, index) => {
          return (
            <Fragment key={index}>
              <SideMenuFilterButton
                category={category}
                quantity={
                  props.data.filter((item) => item.categoria === category)
                    .length
                }
                onClick={filterCategory}
              />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
