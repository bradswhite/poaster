import type {
  QueryResolvers,
  MutationResolvers,
  UserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}



// Added...
export const userByUsername: QueryResolvers['user'] = ({ username }) => {
  return db.user.findUnique({
    where: { username },
  })
}



export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserRelationResolvers = {
  posts: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).posts()
  },
  likes: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).likes()
  },
  followers: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).followers()
  },
  following: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).following()
  },
}
