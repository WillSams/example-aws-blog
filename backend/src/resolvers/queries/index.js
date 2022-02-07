const { dbGet, dbQuery } = require('../../utils/responses');
const { Comment, Post } = require('../../models');

const comment = async (root, { postId, commentId }) =>
  await dbQuery({ query: Comment.get({ postId, commentId }) })
    .then(data => data[0]);

const comments = async (root, { postId }) =>
  await dbQuery({ query: Comment.queryByPost({ postId }) })
    .then(data => data);

const post = async (root, { postId }) =>
  await dbGet({ query: Post.get({ postId }) })
    .then(async data => {
      const c = await comments(root, { postId });
      return Object.assign(data, { Comments: c, });
    });

const posts = async () =>
  await dbQuery({ query: Post.queryAll })
    .then(data => data);

module.exports = {
  comment,
  comments,
  post,
  posts,
};