const { blogTableName } = require('../utils/server');

exports.get = ({ postId }) => {
  return {
    TableName: blogTableName(),
    Key: {
      Id: `Post-${postId}`,
      Metadata: 'Post',
    }
  };
};

exports.put = ({
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
};

exports.queryAll = {
  TableName: blogTableName(),
  IndexName: 'MetadataIndex',
  ProjectionExpression: 'Id, Metadata, Title, Author, Content',
  ExpressionAttributeNames: { '#p': 'Metadata' },
  KeyConditionExpression: '#p = :v1',
  ExpressionAttributeValues: { ':v1': 'Post' }
};