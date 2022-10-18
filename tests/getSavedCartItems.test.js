const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verificar se ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    await getSavedCartItems(cartItem);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
