process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { comments } = require('../../../src/resolvers/queries');
const { reseedDb } = require('../..');

describe('Resolvers - Queries', () => {
  before(() => reseedDb());

  const params = { postId: '2' };

  it('`comments` query should retrieve comments for given post', () => {
    comments(null, { ...params }).then(result => {
      expect(result.length).to.equal(2);
    });
  });
});