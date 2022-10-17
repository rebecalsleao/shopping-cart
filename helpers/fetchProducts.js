const fetchProducts = async (product) => {
  if (product === null) {
    throw new Error('You must provide an url');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const result = await response.json();
  return result;
};

module.exports = {
  fetchProducts,
};
