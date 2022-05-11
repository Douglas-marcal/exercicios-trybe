const fs = require('fs/promises');
const sinon = require('sinon');
const { expect } = require('chai');
const { exerciseOne } = require('./exercise01');
const { writeFiles } = require('./exercise04');

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

describe('Exercise 4', () => {
  const fileName = 'newFile.txt';
  const fileContent = 'Writing something';

  before(() => {
    sinon.stub(fs, 'writeFile').returns(fileContent);
  });

  after(() => {
    fs.writeFile.restore();
  });

  it('returns "ok"', async () => {
    const result = await writeFiles(fileName, fileContent);

    expect(result).to.be.equals('ok');
    expect(result).to.be.a('string');
  });
});
