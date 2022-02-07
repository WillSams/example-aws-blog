process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { createPost } = require('../../../src/resolvers/mutations');

chai.should();

describe('Resolvers - Mutation', () => {

  const params = {
    postId: 'test-post-4',
    title: 'This is another test',
    author: 'John Smit',
    content: '<p>Lorem Ipsum...forever?</p>'
  };

  it('`createPost` mutation should create post', async () => {
    const result = await createPost(null, { input: { ...params } }).then(data => data);

    result.should.have.property('Id');
    expect(result.Id).to.equal(`Post-${params.postId}`);

    result.should.have.property('Metadata');
    expect(result.Metadata).to.equal('Post');

    result.should.have.property('Title');
    expect(result.Title).to.equal(params.title);

    result.should.have.property('Author');
    expect(result.Author).to.equal(params.author);

    result.should.have.property('Content');
    expect(result.Content).to.equal(params.content);
  });
});