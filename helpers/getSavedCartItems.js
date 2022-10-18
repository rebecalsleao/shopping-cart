const getSavedCartItems = () => {
  const item = localStorage.getItem('cartItems');
  if (item === undefined) {
    return null;
  }

  const recoveredObject = JSON.parse(item);
  return recoveredObject;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
