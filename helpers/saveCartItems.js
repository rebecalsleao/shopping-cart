const saveCartItems = (myObj) => {
  localStorage.setItem('cartItems', JSON.stringify(myObj)); //salvar itens no local Storage
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
