// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições!

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
let productsValue = {};
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

function onClickRemoveItem(id) {
  const cartItems = document.getElementsByClassName('cart__item');
  for (let index = 0; index < cartItems.length; index += 1) {
    const element = cartItems[index];
    console.log(element.textContent);
    if (element.textContent.includes(id)) {
      element.remove();
    }
  }
}

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', () => {
    onClickRemoveItem(id);
  });
  return li;
};

function onClickAddItemCart(id) {
  fetchItem(id).then((product) => {
    const itemElementSon = createCartItemElement({
      id: product.id,
      title: product.title,
      price: product.price,
    });
    const creatProductHtml = document.getElementsByClassName('cart__items');
    creatProductHtml[0].appendChild(itemElementSon);
  });
}

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const buttom = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  buttom.addEventListener('click', () => {
    onClickAddItemCart(id);
  });
  // section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  section.appendChild(buttom);

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

function loadProducts() {
  const getProducts = fetchProducts('computador');
  getProducts.then((value) => {
    productsValue = value;
    value.results.forEach((item) => {
      const result = createProductItemElement({
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
      });
      const getSectionTag = document.getElementsByClassName('items');
      getSectionTag[0].appendChild(result);
    });
  });
}

function onClickCleanCart() {
  const buttom = document.querySelector('.empty-cart');
  buttom.addEventListener('click', () => {
    const allLi = document.querySelectorAll('.cart__item');
    for (let index = 0; index < allLi.length; index += 1) {
      const element = allLi[index];
      element.remove();
    }
  });
}

window.onload = () => {
  loadProducts();
  onClickCleanCart();
};
