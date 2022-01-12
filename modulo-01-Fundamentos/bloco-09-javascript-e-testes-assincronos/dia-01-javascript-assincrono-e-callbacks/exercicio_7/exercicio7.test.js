// TESTE 7
const { uppercase } = require('./exercicios')

describe('testa o exercicio 7', () => {
  it('teste', (done) => {
    uppercase('fazendo um teste', (str) => {
      try {
        expect(str).toBe('FAZENDO UM TESTE');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
