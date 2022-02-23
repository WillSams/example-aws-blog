const { dbGet, dbPut, dbQuery, } = require('../../utils/responses');
const { Post, Comment } = require('../../models');

const createPostRelatedEntity = ({ item, query }) =>
  dbPut({ item }).then(() => dbQuery({ query }).then(data => data[0]));

const createPost = (root, { input }) =>
  dbPut({ item: Post.put({ ...input }) }).then(() =>
    dbGet({ query: Post.get({ postId: input.postId }) }).then(data => data));

const createComment = (root, { input }) =>
  createPostRelatedEntity({
    item: Comment.put({ ...input }),
    query: Comment.get({ postId: input.postId, commentId: input.commentId })
  });

module.exports = {
  createComment,
  createPost,
};
