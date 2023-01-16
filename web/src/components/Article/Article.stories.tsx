// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Article> = (args) => {
//   return <Article {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Article from './Article'

export const generated = () => {
  return (
    <Article
      article={{
        id: '1',
        title: 'test title',
        body: 'test',
      }}
    />
  )
}

export default {
  title: 'Components/Article',
  component: Article,
} as ComponentMeta<typeof Article>
