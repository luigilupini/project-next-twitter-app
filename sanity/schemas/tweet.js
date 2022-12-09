import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'blockTweet',
      title: 'Block Tweet',
      type: 'boolean',
      description: 'Admin controls: Toggle if tweet is deemed inappropriate',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    }),
  ],
})
