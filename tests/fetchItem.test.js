require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('A função fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Verificar se a função fetchItem com o argumento "MLB1615760527", se a fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Verificar se a função fetchItem com o argumento "MLB1615760527", se a fetch utiliza o endpoint específico', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Verificar se fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });
  it('Verificar se, ao chamar a função fetchItem sem argumento, retorna um erro com mensagem específica', async () => {
    await expect(fetchItem()).rejects.toThrow('You must provide an url');
  });
});
