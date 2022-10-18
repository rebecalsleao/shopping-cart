// require('../mocks/fetchSimulator');
// const { fetchProducts } = require('../helpers/fetchProducts');
// const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('A função fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Verificar se na função fetchProducts, fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Verificar se ao chamar a função fetchProducts, com o argumento "computador", a função fetch utiliza endpoint específico com computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verificar se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  it('Verificar se a função fetchProducts sem argumento, retorna um erro com a mensagem específica', async () => {
    await expect(fetchProducts()).rejects.toThrow('You must provide an url');
  });
});
