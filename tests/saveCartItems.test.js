const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verificar se executando saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado;', async () => {
    await saveCartItems(cartItem);
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it("Verificar se executando saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros - 1° ( a chave 'cartItems') e o 2° (valor passado como argumento para saveCartItems.)", async () => {
    await saveCartItems(cartItem);
    expect(localStorage.setItem).toHaveBeenCalled('cartItems', saveCartItems());
  });
});
