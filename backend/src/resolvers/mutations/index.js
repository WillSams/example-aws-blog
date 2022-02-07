const { dbGet, dbPut, dbQuery, } = require('../../utils/responses');
const { Post, Comment } = require('../../models');

const createPostRelatedEntity = async ({ item, query }) => {
  await dbPut({ item });
  return dbQuery({ query }).then(data => data[0]);
};

const createPost = async (root, { input }) => {
  await dbPut({ item: Post.put({ ...input }) });
  return dbGet({ query: Post.get({ postId: input.postId }) })
    .then(data => data);
};

const createComment = (root, { input }) =>
  createPostRelatedEntity({
    item: Comment.put({ ...input }),
    query: Comment.get({ postId: input.postId, commentId: input.commentId })
  });

module.exports = {
  createComment,
  createPost,
};
