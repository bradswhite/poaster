import type { Prisma, PostLike } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostLikeCreateArgs>({
  postLike: {
    one: {
      data: {
        user: {
          create: {
            username: 'String6059329',
            email: 'String6166214',
            avatar: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        post: {
          create: {
            body: 'String',
            author: {
              create: {
                username: 'String9334889',
                email: 'String9409363',
                avatar: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            username: 'String4722633',
            email: 'String6415207',
            avatar: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        post: {
          create: {
            body: 'String',
            author: {
              create: {
                username: 'String6212611',
                email: 'String499720',
                avatar: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PostLike, 'postLike'>
