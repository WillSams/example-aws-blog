process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');

chai.use(require('chai-http'));
chai.should();

describe('Route - Mutations - /api/graphql', () => {

  it('`createComment` mutation should create comment', done => {

    const params = {
      postId: 'test-post-4',
      commentId: 'Comment-abc',
      author: 'Jane Doe',
      content: '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat</p>'
    };

    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ "Authorization": `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `mutation CreateComment($input: CreateCommentInput!) {
          createComment(input: $input) {
            Id
            Metadata
            Author
            Content
          }
        }`,
        variables: { input: params }
      })
      .end((err, res) => {
        if (err) return done(err);

        res.headers['content-type'].should.contains('application/json');

        const result = res?.body?.data?.createComment;

        result.should.have.property('Id');
        expect(result.Id).to.equal(`Post-${params.postId}`);

        result.should.have.property('Metadata');
        expect(result.Metadata).to.equal(`Comment-${params.commentId}`);

        result.should.have.property('Author');
        expect(result.Author).to.equal(params.author);

        result.should.have.property('Content');
        expect(result.Content).to.equal(params.content);

        done();
      });
  });
});