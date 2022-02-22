process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { createComment } = require('../../../src/resolvers/mutations');

chai.should();

describe('Resolvers - Mutation', () => {

  const params = {
    postId: 'test-post-4',
    commentId: 'Comment-abc',
    author: 'Jane Doe',
    content: '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat</p>',
  };

  it('`createComment` mutation should create comment', () => {
    createComment(null, { input: { ...params } }).then(result => {

      result.should.have.property('Id');
      expect(result.Id).to.equal(`Post-${params.postId}`);

      result.should.have.property('Metadata');
      expect(result.Metadata).to.equal(`Comment-${params.commentId}`);

      result.should.have.property('Author');
      expect(result.Author).to.equal(params.author);

      result.should.have.property('Content');
      expect(result.Content).to.equal(params.content);
    });
  });
});