const fetch = require('node-fetch');

const fetchProducts = async (product) => {
  if (product === null) {
    throw new Error('You must provide an url');
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const data = await response.json();
  return data;
};

module.exports = {
  fetchProducts,
};
