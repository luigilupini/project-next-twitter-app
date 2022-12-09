import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
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
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference the tweet the comment is associated with:',
      type: 'reference',
      to: {
        type: 'tweet',
      },
    },
  ],
})
