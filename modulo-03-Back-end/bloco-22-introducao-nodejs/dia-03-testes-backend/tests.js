const { expect } = require('chai');
const { exerciseOne } = require('./exercise01');

describe('Exercise 1', () => {
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
});
