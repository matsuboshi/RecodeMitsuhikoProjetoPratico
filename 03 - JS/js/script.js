function filterCategory(category) {
  let elements = document.getElementsByClassName('itemDiv');
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].id);
    if (category == elements[i].id) {
      elements[i].style = 'display: block;';
    } else {
      elements[i].style = 'display: none;';
    }
  }
}

function allCategories() {
  let elements = document.getElementsByClassName('itemDiv');
  console.log(elements);
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].id);
    elements[i].style = 'display: block;';
  }
}

let highlightImg = (image) => {
  console.log(image);
  if (image.width == 160) {
    image.width = 190;
  } else {
    image.width = 160;
  }
};
