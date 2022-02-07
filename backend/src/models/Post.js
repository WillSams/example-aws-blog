const { blogTableName } = require('../utils/server');

const Post = {
  get: ({ postId }) => {
    return {
      TableName: blogTableName(),
      Key: {
        Id: `Post-${postId}`,
        Metadata: 'Post',
      }
    };
  },
  put: ({
    postId,
    title,
    author,
    content,
    details = { State: 'published', Image: '', Comments: {} }
  }) => {
    return {
      TableName: blogTableName(),
      Item: {
        Id: `Post-${postId}`,
        Metadata: 'Post',
        Title: title,
        Author: author,
        Content: content,
        ...details,
      },
    };
  },
  queryAll: {
    TableName: blogTableName(),
    IndexName: 'MetadataIndex',
    ProjectionExpression: 'Id, Metadata, Title, Author, Content',
    ExpressionAttributeNames: { '#p': 'Metadata' },
    KeyConditionExpression: '#p = :v1',
    ExpressionAttributeValues: { ':v1': 'Post' }
  },
};

module.exports = Post;