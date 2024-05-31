const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive')  
}

// PRODUCT LIST
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'TV',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Ladder',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Computer',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// FUNCION PARA EL EJERCICIO
function renderProducts(arr) {
  // insertando los articulos para que se vean y eso se hace recorriendo el array
  for (product of productList) {

    // Creamos elemento div
    const productCard = document.createElement('div');
    // a productCard le agregamos una clase
    productCard.classList.add('product-card');

    // crear una imagen
    // product = {name, price, image}
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside)

    // 
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    // 
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');

    // productPrice.innerText = `$ ${product.price}`;
    productPrice.innerText = '$' + product.price;
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    // 
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');

    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    // ya se han creado pero es hora de insertar el contenido de cada elemento creado
    productInfoFigure.appendChild(productImgCart);

    // 
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure)

    // 
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    // 
    cardsContainer.appendChild(productCard);

  }
}

// llamdno a la funcion
renderProducts(productList);