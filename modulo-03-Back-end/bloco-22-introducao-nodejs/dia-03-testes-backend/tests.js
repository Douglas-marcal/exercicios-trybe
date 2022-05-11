const { expect } = require('chai');
const { exerciseOne } = require('./exercise01');

describe('Exercises 1, 2, 3', () => {
  it('returns "positivo"', () => {
    const result = exerciseOne(4);

    expect(result).to.be.equals('positivo');
  });

  it('returns "negativo"', () => {
    const result = exerciseOne(-4);

    expect(result).to.be.equals('negativo');
  });

  it('returns "neutro"', () => {
    const result = exerciseOne(0);

    expect(result).to.be.equals('neutro');
  });

  it('returns "o valor deve ser um número"', () => {
    const result = exerciseOne('0');

    expect(result).to.be.equals('o valor deve ser um número');
  });
});
