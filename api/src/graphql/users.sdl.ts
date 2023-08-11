export const schema = gql`
  type User {
    id: String!
    username: String!
    email: String!
    name: String
    avatar: String!
    banner: String
    bio: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    posts: [Post]!
    likes: [PostLike]!
    followers: [Follows]!
    following: [Follows]!
    createdAt: DateTime!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: String!): User @requireAuth

    userByUsername(username: String!): User @requireAuth
  }

  input CreateUserInput {
    username: String!
    email: String!
    name: String
    avatar: String!
    banner: String
    bio: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    username: String
    email: String
    name: String
    avatar: String
    banner: String
    bio: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: String!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: String!): User! @requireAuth
  }
`
