const { v4: uuidv4 } = require('uuid');

const { createComment, createPost } = require('./resolvers/mutations');

const posts = [
  {
    postId: uuidv4(),
    title: 'Welcome to My Blog!',
    author: 'Jane Doe',
    content: '<p>Hello, I&rsquo;m Jane Doe and I&rsquo;m blogging. Do you want some lorem ipsuem?  You got it!</p><p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat, donec cras iaculis mauris feugiat netus justo ultricies, sed porttitor hendrerit quam viverra metus tempor rutrum. Turpis leo tempus fames tempor non diam viverra lectus ultrices per condimentum ridiculus accumsan, netus cursus ultricies egestas ante eleifend erat pharetra sed nam dictumst. Est facilisis sociis fames turpis libero vel in convallis tincidunt, magna aenean mollis tellus luctus natoque duis ullamcorper euismod morbi, volutpat netus phasellus massa diam suscipit nulla primis.</p>',
  },
  {
    postId: uuidv4(),
    title: 'We Need to Talk About Amazon',
    author: 'Jane Doe',
    content: '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat, donec cras iaculis mauris feugiat netus justo ultricies, sed porttitor hendrerit quam viverra metus tempor rutrum. Turpis leo tempus fames tempor non diam viverra lectus ultrices per condimentum ridiculus accumsan, netus cursus ultricies egestas ante eleifend erat pharetra sed nam dictumst. Est facilisis sociis fames turpis libero vel in convallis tincidunt, magna aenean mollis tellus luctus natoque duis ullamcorper euismod morbi, volutpat netus phasellus massa diam suscipit nulla primis.</p>',
  },
  {
    postId: uuidv4(),
    title: 'Is Meta Done?',
    author: 'Jane Doe',
    content: '<p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat, donec cras iaculis mauris feugiat netus justo ultricies, sed porttitor hendrerit quam viverra metus tempor rutrum. Turpis leo tempus fames tempor non diam viverra lectus ultrices per condimentum ridiculus accumsan, netus cursus ultricies egestas ante eleifend erat pharetra sed nam dictumst. Est facilisis sociis fames turpis libero vel in convallis tincidunt, magna aenean mollis tellus luctus natoque duis ullamcorper euismod morbi, volutpat netus phasellus massa diam suscipit nulla primis.</p>',
  },
];

const comments = [
  {
    postId: posts[0].postId,
    commentId: uuidv4(),
    author: 'John Doe',
    content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat'
  },
  {
    postId: posts[0].postId,
    commentId: uuidv4(),
    author: 'Jane Doe',
    content: 'Consequat? Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat'
  },
  {
    postId: posts[0].postId,
    commentId: uuidv4(),
    author: 'John Smith',
    content: 'Leo, consequant.  Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat'
  },
  {
    postId: posts[0].postId,
    commentId: uuidv4(),
    author: 'Jane Doe',
    content: 'Consequant.'
  },
  {
    postId: posts[1].postId,
    commentId: uuidv4(),
    author: 'Jane Smith',
    content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat'
  },
  {
    postId: posts[1].postId,
    commentId: uuidv4(),
    author: 'Jane Smith',
    content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat'
  },
  {
    postId: posts[2].postId,
    commentId: uuidv4(),
    author: 'Johhn Doe',
    content: 'Lorem ipsum dolor sit amet consectetur adipiscing elit leo consequat'
  },
];

const seedDatabase = () => {
  try {
    console.log('Begin seeding of database...');

    posts.map(input => createPost(null, { input }));
    comments.map(input => createComment(null, { input }));

    console.log('End of seeding of database.');

  } catch (ex) {
    console.error('DynamoDB Seeding Failed! - ', ex.message);
  }
};

seedDatabase();