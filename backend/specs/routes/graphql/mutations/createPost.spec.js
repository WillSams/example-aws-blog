process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const bootstrap = require('../../../../src/bootstrap');

chai.use(require('chai-http'));
chai.should();

describe('Route - Mutations - /api/graphql', () => {

  it('`createPost` mutation should create post', done => {

    const params = {
      postId: 'test-post-4',
      title: 'This is another test',
      author: 'John Smit',
      content: '<p>Lorem Ipsum...forever?</p>'
    };

    chai.request(bootstrap)
      .post('/api/graphql')
      .set({ "Authorization": `Bearer ${process.env.TOKEN_SECRET}` })
      .send({
        query: `mutation CreatePost($input: CreatePostInput!) {
          createPost(input: $input) {
            Id
            Metadata
            Title
            Author
            Content
          }
        }`,
        variables: { input: params }
      })
      .end((err, res) => {
        if (err) return done(err);

        res.headers['content-type'].should.contains('application/json');

        const result = res?.body?.data?.createPost;

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

        done();
      });
  });
});