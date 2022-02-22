process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { posts } = require('../../../src/resolvers/queries');
const { reseedDb } = require('../..');

describe('Resolvers - Queries', () => {
  before(() => reseedDb());

  it('`posts` query should retrieve all posts', () => {
    posts(null).then(result => {
      expect(result.length).to.equal(3);
    });
  });
});