process.env.NODE_ENV = 'test';

const { spawn } = require('child_process');
const { sleep } = require('sleep');

const { createComment, createPost } = require('../src/resolvers/mutations');

const posts = [
  { postId: '1', title: 'Post 1', author: 'Tester', content: '<div>Test 1</div>', },
  { postId: '2', title: 'Post 2', author: 'Tester', content: '<div>Test 2</div>', },
  { postId: '3', title: 'Post 3', author: 'Testee', content: '<div>Test 3</div>', },
];

const comments = [
  { postId: '1', commentId: '1', author: 'Testee', content: 'Post 1, comment 1' },
  { postId: '1', commentId: '2', author: 'Tester', content: 'Post 1, comment 2' },
  { postId: '1', commentId: '3', author: 'Testee', content: 'Post 1, comment 3' },
  { postId: '1', commentId: '4', author: 'Tester', content: 'Post 1, comment 4' },
  { postId: '2', commentId: '5', author: 'Testee', content: 'Post 2, comment 1' },
  { postId: '2', commentId: '6', author: 'Tester', content: 'Post 2, comment 2' },
  { postId: '3', commentId: '7', author: 'Testee', content: 'Post 3, comment 1' },
];

const removeDbTestData = () => {
  sleep(1);
  spawn(`${__dirname}/../clean_table.sh`);
  sleep(1);
};

const reseedDb = () => {
  removeDbTestData();

  posts.map(input => createPost(null, { input }));
  comments.map(input => createComment(null, { input }));
};

module.exports = {
  reseedDb,
  removeDbTestData,
};