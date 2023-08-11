export const schema = gql`
  type PostLike {
    id: String!
    user: User!
    userId: String!
    post: Post!
    postId: String!
    createdAt: DateTime!
  }

  type Query {
    postLikes: [PostLike!]! @requireAuth
    postLike(id: String!): PostLike @requireAuth
  }

  input CreatePostLikeInput {
    userId: String!
    postId: String!
  }

  input UpdatePostLikeInput {
    userId: String
    postId: String
  }

  type Mutation {
    createPostLike(input: CreatePostLikeInput!): PostLike! @requireAuth
    updatePostLike(id: String!, input: UpdatePostLikeInput!): PostLike!
      @requireAuth
    deletePostLike(id: String!): PostLike! @requireAuth
  }
`
