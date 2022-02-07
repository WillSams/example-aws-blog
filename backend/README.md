# Example - Blog - Backend

Serverless Example API using a Express JS, Apollo Server, and AWS (API Gateway + DynamoDb + Lambda).

_TODO_:

- Write more tests, especially early to identify change points.
- Add delete mutations
- Utilize different types other than strings

## Test Invocations

### Offline

```bash
# Getting API details
curl -X GET \
-H "Content-Type: application/json" \
http://localhost:4040/api/about

# The result should resemble:
# {"name":"example-blog-backend","version":"1.0.0","description":"Example API using Express JS, GraphQL and AWS DynamoDB SDK.","environment":"development"}

# You can also review http://localhost:4040/api/about in a web browser, the result will be the above.

# Creating a blog post
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"mutation CreatePost($input: CreatePostInput!) { createPost(input: $input) { Id Metadata Title Author Content  } }",
    "variables": {"input":{"postId":"test-post-1","title":"Test Post","author":"John Doe","content":"<h1>Hello, World</h1>"}}
  }' \
http://localhost:4040/api/graphql

# The result should be:
# {"data":{"createPost":{"Id":"Post-test-post-1","Metadata":"Post","Title":"Test Post","Author":"John Doe","Content":"<h1>Hello, World</h1>"}}}

# Retrieving a blog post
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"query { post(postId: \"test-post-1\") { Id Metadata Title Author Content  } }"
  }' \
http://localhost:4040/api/graphql

# The result should be:
# {"data":{"post":{"Id":"Post-test-post-1","Metadata":"Post","Title":"Test Post","Author":"John Doe","Content":"<h1>Hello, World</h1>"}}}
```

### Deployed

```bash
# Getting API details
curl -X GET \
-H "Content-Type: application/json" \
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/api/about

# The result should resemble:
# {"name":"example-blog-backend","version":"1.0.0","description":"Example API using Express JS, GraphQL and AWS DynamoDB SDK.","environment":"development"}

# Creating a post
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"mutation CreatePost($input: CreatePostInput!) { createPost(input: $input) { Id Metadata Title Author Content  } }",
    "variables": {"input":{"postId":"test-post-1","title":"Test Post","author":"John Doe","content":"<h1>Hello, World</h1>"}}
  }' \
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/api/graphql

# The result should be:
# {"data":{"createPost":{"Id":"Post-test-post-1","Metadata":"Post","Title":"Test Post","Author":"John Doe","Content":"<h1>Hello, World</h1>"}}}

# Retrieving a post
curl -X POST \
-H "Content-Type: application/json" \
-H "Authorization: Bearer $TOKEN_SECRET" \
-d '{
    "query":"query { post(postId: \"test-post-1\") { Id Metadata Title Author Content  } }"
  }' \
https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/api/graphql

# The result should be:
# {"data":{"post":{"Id":"Post-test-post-1","Metadata":"Post","Title":"Test Post","Author":"John Doe","Content":"<h1>Hello, World</h1>"}}}
```
