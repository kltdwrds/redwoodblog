import { Prisma, Comment } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        name: 'String',
        body: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
    two: {
      data: {
        name: 'String',
        body: 'String',
        post: { create: { title: 'String', body: 'String' } },
      },
    },
  },
})

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      data: {
        title: 'bark',
        body: 'test',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
export type PostOnlyScenario = typeof postOnly
