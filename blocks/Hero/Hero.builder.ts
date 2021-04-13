import dynamic from 'next/dynamic'
import { Builder } from '@builder.io/react'

const LazyHero = dynamic(async () => {
  return (await import('./Hero')).default
})

Builder.registerComponent(LazyHero, {
  name: 'Hero',
  inputs: [
    {
      name: 'headline',
      type: 'string',
      defaultValue: 'This is the Hero',
    },
    {
      name: 'description',
      type: 'string',
      defaultValue:
        'This is the description of the hero',
    },
    {
      name: 'ctaLink',
      type: 'string',
      defaultValue: '/shop',
    },
    {
      name: 'ctaText',
      type: 'string',
      defaultValue: 'read more',
    },
  ],
})
