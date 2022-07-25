import { config, list } from '@keystone-6/core';
import { image, text } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';
import { document } from '@keystone-6/fields-document';

const Post: Lists.Post = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
  },
});

const Service: Lists.Service = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
  

  },
});


const Staff: Lists.Staff = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    postion: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
    picture: document({
      formatting: true,
      dividers: true,
      layout: [
        [1, 1],
        [1, 1, 1],
      ],
    }),
  },
});



export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  lists: { Post, Service, Staff },
});