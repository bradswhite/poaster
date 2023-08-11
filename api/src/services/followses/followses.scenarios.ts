import type { Prisma, Follows } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.FollowsCreateArgs>({
  follows: {
    one: {
      data: {
        follower: {
          create: {
            username: 'String6261318',
            email: 'String3366254',
            avatar: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        following: {
          create: {
            username: 'String2194279',
            email: 'String7406710',
            avatar: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        follower: {
          create: {
            username: 'String429424',
            email: 'String1870491',
            avatar: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        following: {
          create: {
            username: 'String99633',
            email: 'String2659399',
            avatar: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Follows, 'follows'>
