const { dbGet, dbQuery } = require('../../utils/responses');
const { Comment, Post } = require('../../models');

const comment = (root, { postId, commentId }) =>
  dbQuery({ query: Comment.get({ postId, commentId }) })
    .then(data => data[0]);

const comments = async (root, { postId }) =>
  dbQuery({ query: Comment.queryByPost({ postId }) })
    .then(data => data);

const post = async (root, { postId }) =>
  dbGet({ query: Post.get({ postId }) })
    .then(async data => {
      const c = comments(root, { postId });
      return Object.assign(data, { Comments: c, });
    });

const posts = (root, { }) =>
  dbQuery({ query: Post.queryAll })
    .then(data => data);

module.exports = {
  comment,
  comments,
  post,
  posts,
};