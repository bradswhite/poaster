import type {
  QueryResolvers,
  MutationResolvers,
  PostRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post: PostRelationResolvers = {
  comments: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).comments()
  },
  parentPost: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).parentPost()
  },
  author: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).author()
  },
  likes: (_obj, { root }) => {
    return db.post.findUnique({ where: { id: root?.id } }).likes()
  },
}
