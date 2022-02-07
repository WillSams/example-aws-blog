process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');
const { reseedDb } = require('../../..');

chai.use(require('chai-http'));
chai.should();

describe('Route - Queries - /api/graphql', () => {
  before(() => reseedDb());;

  it('`comment` query should retrieve comment', done => {
    const variables = { postId: '1', commentId: '1' };
    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ "Authorization": `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `query GetComment($postId: String!, $commentId: String!) {
            comment(postId: $postId, commentId: $commentId) {
              Id
              Metadata
              Author
              Content
            }
          }`,
        variables: variables,
      })
      .end((err, res) => {
        if (err) return done(err);

        expect(res.status).to.equal(200);

        res.headers['content-type'].should.contains('application/json');

        const result = res?.body?.data?.comment;

        result.should.have.property('Id');
        expect(result.Id).to.equal(`Post-${variables.postId}`);

        result.should.have.property('Metadata');
        expect(result.Metadata).to.equal(`Comment-${variables.commentId}`);

        result.should.have.property('Author');
        expect(result.Author).to.equal('Testee');

        result.should.have.property('Content');
        expect(result.Content).to.equal('Post 1, comment 1');

        done();
      });
  });
});