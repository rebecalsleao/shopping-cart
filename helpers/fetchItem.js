const fetchItem = async (item) => {
  if (item === undefined) {
    throw new Error('You must provide an url');
  }

  const response = await fetch(`https://api.mercadolibre.com/items/${item}`);
  const result = await response.json();
  return result;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
