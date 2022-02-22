process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { comment } = require('../../../src/resolvers/queries');
const { reseedDb } = require('../..');

chai.should();

describe('Resolvers - Queries', () => {
  before(() => reseedDb());

  const params = { postId: '3', commentId: '7' };

  it('`comment` query should retrieve comment', () => {
    comment(null, { ...params }).then(result => {
      result.should.have.property('Id');
      expect(result.Id).to.equal(`Post-${params.postId}`);

      result.should.have.property('Metadata');
      expect(result.Metadata).to.equal(`Comment-${params.commentId}`);

      result.should.have.property('Author');
      expect(result.Author).to.equal('Testee');

      result.should.have.property('Content');
      expect(result.Content).to.equal('Post 3, comment 1');
    });
  });
});