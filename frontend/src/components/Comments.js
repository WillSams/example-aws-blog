import React from 'react';

const mocks = [
  {
    postId: 1,
    commentId: 1,
    author: 'Anja',
    commentDate: 'Sep 29, 2015, 9:12 PM',
    imageUrl: '/img/bandmember.jpg',
    content: 'Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, \
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    postId: 1,
    commentId: 2,
    author: 'John Row',
    commentDate: 'Sep 25, 2015, 8:25 PM',
    imageUrl: '/img/bird.jpg',
    content: 'I am so happy for you man! Finally. I am looking forward to read about your trendy life. \
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
];

const Comments = postId => {
  return (
    <>
      <h4>Leave a Comment:</h4>
      <form role="form">
        <div className="form-group">
          <textarea className="form-control" rows="3" required></textarea>
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
      <br /><br />

      <p>Comments:</p><br />

      <div className="row">
        {mocks.map(mock => {
          return (
            <>
              <div className="col-sm-2 text-center">
                <img src={mock.imageUrl} className="img-circle" height="65" width="65" alt="Avatar" />
              </div>
              <div className="col-sm-10">
                <h4>{mock.author}<small>{mock.commentDate}</small></h4>
                <p>{mock.content}</p>
                <br />
              </div>
            </>
          )
        })
        }
      </div>
    </>
  );
};

export default Comments;

