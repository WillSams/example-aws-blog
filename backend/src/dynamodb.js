const AWS = require('aws-sdk');

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  const config = {
    endpoint: `http://localhost:${process.env.DYNAMODB_PORT}`
  };
  AWS.config.update(config);
};

const ddbClient = new AWS.DynamoDB.DocumentClient();

module.exports = ddbClient;