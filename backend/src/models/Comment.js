const moment = require('moment');

const { blogTableName } = require('../utils/server');

const Comment = {
  get: ({ postId, commentId }) => {
    return {
      TableName: blogTableName(),
      IndexName: 'MetadataIndex',
      ExpressionAttributeNames: { '#p': 'Metadata', '#a': 'Id' },
      KeyConditionExpression: '#p = :v1',
      FilterExpression: '#a = :v2',
      ExpressionAttributeValues: {
        ':v1': `Comment-${commentId}`,
        ':v2': `Post-${postId}`
      }
    };
  },
  queryByPost: ({ postId }) => {
    return {
      TableName: blogTableName(),
      KeyConditionExpression: 'Id = :v1 and begins_with(Metadata, :v2)',
      ExpressionAttributeValues: { ':v1': `Post-${postId}`, ':v2': 'Comment' }
    };
  },
  put: ({ postId, commentId, author, content }) => {
    return {
      TableName: blogTableName(),
      Item: {
        Id: `Post-${postId}`,
        Metadata: `Comment-${commentId}`,
        Author: author,
        Content: content,
        CommentDate: moment(new Date()).format('YYYY-MM-DD')
      }
    };
  },
};

module.exports = Comment;