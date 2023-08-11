import type {
  QueryResolvers,
  MutationResolvers,
  PostLikeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const postLikes: QueryResolvers['postLikes'] = () => {
  return db.postLike.findMany()
}

export const postLike: QueryResolvers['postLike'] = ({ id }) => {
  return db.postLike.findUnique({
    where: { id },
  })
}




export const createPostLike: MutationResolvers['createPostLike'] = ({
  input,
}) => {
  return db.postLike.create({
    data: input,
  })
}

export const updatePostLike: MutationResolvers['updatePostLike'] = ({
  id,
  input,
}) => {
  return db.postLike.update({
    data: input,
    where: { id },
  })
}

export const deletePostLike: MutationResolvers['deletePostLike'] = ({ id }) => {
  return db.postLike.delete({
    where: { id },
  })
}

export const PostLike: PostLikeRelationResolvers = {
  user: (_obj, { root }) => {
    return db.postLike.findUnique({ where: { id: root?.id } }).user()
  },
  post: (_obj, { root }) => {
    return db.postLike.findUnique({ where: { id: root?.id } }).post()
  },
}
