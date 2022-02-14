import React from 'react';

import Comments from './Comments';

const mocks = [
  {
    postId: 2,
    author: 'Jane Dane',
    title: 'I love Food',
    publishedDate: 'Sep 27, 2015',
    tags: ['food'],
    content: 'Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit \
    anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
    nisi ut aliquip ex ea commodo consequat.',
    state: 'published'
  },
  {
    postId: 1,
    author: 'John Doe',
    title: 'Officially Blogging',
    publishedDate: 'Sep 24, 2015',
    tags: ['Lorem'],
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit \
    anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore \
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
    nisi ut aliquip ex ea commodo consequat.',
    state: 'published'
  },
];

const Posts = () => {
  return (
    <>
      {mocks.map(mock => {
        if (mock.state === 'published') {
          return (
            <>
              <h2>{mock.title}</h2>
              <h5><span className="glyphicon glyphicon-time"></span> Post by {mock.author}, {mock.publishedDate}.</h5>
              <h5><span className="label label-success">{mock.tags.join(',')}</span></h5><br />
              <p>{mock.content}</p>
              <hr />
              <Comments postId={mock.postId}></Comments>
            </>
          )
        }
      })
      }
    </>
  );
};

export default Posts;

