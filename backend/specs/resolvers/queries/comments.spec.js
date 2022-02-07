process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { comments } = require('../../../src/resolvers/queries');
const { reseedDb } = require('../..');

describe('Resolvers - Queries', () => {
  before(() => reseedDb());

  const params = { postId: '2' };

  it('`comments` query should retrieve comments for given post', async () => {
    const result = await comments(null, { ...params });

    expect(result.length).to.equal(2);
  });
});