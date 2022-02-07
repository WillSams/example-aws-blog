const { gql } = require('apollo-server-express');

//note: state -'draft, published, archived', default: 'draft'

const typeDefs = gql`
schema {
  query: Query
}

type Post {
  Id: String!
  Metadata: String!
  Title: String!
  Author: String!
  PublishedDate: String!
  Content: String!
  State: String
  Image: String
  Comments: [Comment]
}

type Comment {
  Id: String!
  Metadata: String!
  CommentName: String!
  Author: String!
  Content: String!
  CommentDate: String!
}

input CreatePostInput {
  postId: String!
  title: String!
  author: String!
  content: String!
}

input CreateCommentInput {
  postId: String!
  commentId: String!
  author: String!
  content: String!
}

type Mutation {
  createPost(input: CreatePostInput!): Post
  createComment(input: CreateCommentInput!): Comment
}

type Query {
  post(postId: String!): Post
  comment(postId: String!, commentId: String!): Comment
  posts: [Post]
  comments(postId: String!): [Comment]
}
`;

module.exports = typeDefs;
