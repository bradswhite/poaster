import type { PostLike } from '@prisma/client'

import {
  postLikes,
  postLike,
  createPostLike,
  updatePostLike,
  deletePostLike,
} from './postLikes'
import type { StandardScenario } from './postLikes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('postLikes', () => {
  scenario('returns all postLikes', async (scenario: StandardScenario) => {
    const result = await postLikes()

    expect(result.length).toEqual(Object.keys(scenario.postLike).length)
  })

  scenario('returns a single postLike', async (scenario: StandardScenario) => {
    const result = await postLike({ id: scenario.postLike.one.id })

    expect(result).toEqual(scenario.postLike.one)
  })

  scenario('creates a postLike', async (scenario: StandardScenario) => {
    const result = await createPostLike({
      input: {
        userId: scenario.postLike.two.userId,
        postId: scenario.postLike.two.postId,
      },
    })

    expect(result.userId).toEqual(scenario.postLike.two.userId)
    expect(result.postId).toEqual(scenario.postLike.two.postId)
  })

  scenario('updates a postLike', async (scenario: StandardScenario) => {
    const original = (await postLike({
      id: scenario.postLike.one.id,
    })) as PostLike
    const result = await updatePostLike({
      id: original.id,
      input: { userId: scenario.postLike.two.userId },
    })

    expect(result.userId).toEqual(scenario.postLike.two.userId)
  })

  scenario('deletes a postLike', async (scenario: StandardScenario) => {
    const original = (await deletePostLike({
      id: scenario.postLike.one.id,
    })) as PostLike
    const result = await postLike({ id: original.id })

    expect(result).toEqual(null)
  })
})
