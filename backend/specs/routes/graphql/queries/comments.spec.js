process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');
const { reseedDb } = require('../../..');

chai.use(require('chai-http'));
chai.should();

describe('Route - Queries - /api/graphql', () => {

  before(() => reseedDb());

  it('`comments` query should retrieve comments for a post', done => {
    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ "Authorization": `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `
        query ListComments($postId: String!) {
          comments(postId: $postId) {
            Id
            Metadata
            Author
            Content
          }
        }`,
        variables: { 'postId': '1' },
      })
      .end((err, res) => {
        if (err) return done(err);

        expect(res.status).to.equal(200);

        res.headers['content-type'].should.contains('application/json');

        const result = res?.body?.data?.comments;
        expect(result.length).to.equal(4);

        done();
      });
  });
});