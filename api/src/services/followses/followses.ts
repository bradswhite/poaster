import type {
  QueryResolvers,
  MutationResolvers,
  FollowsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const followses: QueryResolvers['followses'] = () => {
  return db.follows.findMany()
}

export const follows: QueryResolvers['follows'] = ({ id }) => {
  return db.follows.findUnique({
    where: { id },
  })
}

export const createFollows: MutationResolvers['createFollows'] = ({
  input,
}) => {
  return db.follows.create({
    data: input,
  })
}

export const updateFollows: MutationResolvers['updateFollows'] = ({
  id,
  input,
}) => {
  return db.follows.update({
    data: input,
    where: { id },
  })
}

export const deleteFollows: MutationResolvers['deleteFollows'] = ({ id }) => {
  return db.follows.delete({
    where: { id },
  })
}

export const Follows: FollowsRelationResolvers = {
  follower: (_obj, { root }) => {
    return db.follows.findUnique({ where: { id: root?.id } }).follower()
  },
  following: (_obj, { root }) => {
    return db.follows.findUnique({ where: { id: root?.id } }).following()
  },
}
