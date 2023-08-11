import type { Follows } from '@prisma/client'

import {
  followses,
  follows,
  createFollows,
  updateFollows,
  deleteFollows,
} from './followses'
import type { StandardScenario } from './followses.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('followses', () => {
  scenario('returns all followses', async (scenario: StandardScenario) => {
    const result = await followses()

    expect(result.length).toEqual(Object.keys(scenario.follows).length)
  })

  scenario('returns a single follows', async (scenario: StandardScenario) => {
    const result = await follows({ id: scenario.follows.one.id })

    expect(result).toEqual(scenario.follows.one)
  })

  scenario('creates a follows', async (scenario: StandardScenario) => {
    const result = await createFollows({
      input: {
        followerId: scenario.follows.two.followerId,
        followingId: scenario.follows.two.followingId,
      },
    })

    expect(result.followerId).toEqual(scenario.follows.two.followerId)
    expect(result.followingId).toEqual(scenario.follows.two.followingId)
  })

  scenario('updates a follows', async (scenario: StandardScenario) => {
    const original = (await follows({ id: scenario.follows.one.id })) as Follows
    const result = await updateFollows({
      id: original.id,
      input: { followerId: scenario.follows.two.followerId },
    })

    expect(result.followerId).toEqual(scenario.follows.two.followerId)
  })

  scenario('deletes a follows', async (scenario: StandardScenario) => {
    const original = (await deleteFollows({
      id: scenario.follows.one.id,
    })) as Follows
    const result = await follows({ id: original.id })

    expect(result).toEqual(null)
  })
})
