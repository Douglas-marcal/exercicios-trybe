const { getPokemonDetails } = require("./exercicios");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    function callback(error, result) {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    }

    getPokemonDetails(({ name }) => name === 'Darth Vader', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    function callback(err, result) {
      expect(result).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
      done();
    }

    getPokemonDetails(({ name }) => name === 'Charmander', callback);
  });
});
