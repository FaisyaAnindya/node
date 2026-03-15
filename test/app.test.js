const chai = require('chai');
const expect = chai.expect;

describe('Basic Unit Test', () => {
  it('Harus mengembalikan true untuk logika sederhana', () => {
    expect(1 + 1).to.equal(2);
  });
});
