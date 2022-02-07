process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');
const { reseedDb } = require('../../..');

chai.use(require('chai-http'));
chai.should();

describe('Route - Queries - /api/graphql', () => {
  before(() => reseedDb());

  it('`post` query should retrieve post', done => {
    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ "Authorization": `Bearer ${process.env.TOKEN_SECRET}` })
      .send({ query: '{ post(postId: "1") { Id Metadata Author Content } }' })
      .end((err, res) => {
        if (err) return done(err);

        expect(res.status).to.equal(200);

        const result = res?.body?.data?.post;

        result.should.have.property('Id');
        expect(result.Id).to.equal('Post-1');

        result.should.have.property('Metadata');
        expect(result.Metadata).to.equal('Post');

        result.should.have.property('Author');
        expect(result.Author).to.equal('Tester');

        result.should.have.property('Content');
        expect(result.Content).to.equal('<div>Test 1</div>');

        done();
      });
  });
});