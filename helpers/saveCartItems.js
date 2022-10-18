const saveCartItems = (myObj) => {
  localStorage.setItem('cartItems', JSON.stringify(myObj));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
