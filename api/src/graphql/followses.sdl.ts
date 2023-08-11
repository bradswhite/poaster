export const schema = gql`
  type Follows {
    id: String!
    follower: User!
    followerId: String!
    following: User!
    followingId: String!
    createdAt: DateTime!
  }

  type Query {
    followses: [Follows!]! @requireAuth
    follows(id: String!): Follows @requireAuth
  }

  input CreateFollowsInput {
    followerId: String!
    followingId: String!
  }

  input UpdateFollowsInput {
    followerId: String
    followingId: String
  }

  type Mutation {
    createFollows(input: CreateFollowsInput!): Follows! @requireAuth
    updateFollows(id: String!, input: UpdateFollowsInput!): Follows!
      @requireAuth
    deleteFollows(id: String!): Follows! @requireAuth
  }
`
