export const schema = gql`
  type Post {
    id: String!
    body: String!
    comments: [Post]!
    parentPost: Post
    parentPostId: String
    author: User!
    authorId: String!
    createdAt: DateTime!
    updatedAt: DateTime!
    likes: [PostLike]!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: String!): Post @requireAuth
  }

  input CreatePostInput {
    body: String!
    parentPostId: String
    authorId: String!
    likeCount: Int
  }

  input UpdatePostInput {
    body: String
    parentPostId: String
    authorId: String
    likeCount: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: String!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: String!): Post! @requireAuth
  }
`
