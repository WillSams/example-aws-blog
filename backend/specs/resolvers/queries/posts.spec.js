process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { posts } = require('../../../src/resolvers/queries');
const { reseedDb } = require('../..');

describe('Resolvers - Queries', () => {
  before(() => reseedDb());

  it('`posts` query should retrieve all posts', async () => {
    const result = await posts(null);

    expect(result.length).to.equal(3);
  });
});