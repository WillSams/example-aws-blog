process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

const { post } = require('../../../src/resolvers/queries');
const { reseedDb } = require('../..');

chai.should();

describe('Resolvers - Queries', () => {
  before(() => reseedDb());

  const params = { postId: '3' };

  it('`post` query should retrieve post', () => {
    post(null, { ...params }).then(result => {

      result.should.have.property('Id');
      expect(result.Id).to.equal('Post-3');

      result.should.have.property('Metadata');
      expect(result.Metadata).to.equal('Post');

      result.should.have.property('Author');
      expect(result.Author).to.equal('Testee');

      result.should.have.property('Content');
      expect(result.Content).to.equal('<div>Test 3</div>');
    });
  });
});