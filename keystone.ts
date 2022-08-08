import { config, list } from '@keystone-6/core';
import { checkbox, image, password, text } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';
import { document } from '@keystone-6/fields-document';
import dotenv from 'dotenv';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';

// const Post: Lists.Post = list({
//   fields: {
//     title: text({ validation: { isRequired: true } }),
//     slug: text({ isIndexed: 'unique', isFilterable: true }),
//     content: text(),
//     avatar1: image({ storage: 'my_local_images' }),
//     avatar2: image({ storage: 'my_local_images' }),
//     avatar3: image({ storage: 'my_local_images' }),
//     avatar4: image({ storage: 'my_local_images' }),

//   },
// });


const User = list({
  fields: {
    email: text(),
    name: text({ isIndexed: 'unique' }),
    password: password(),
    isAdmin: checkbox(),
  },
});

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'name',
  secretField: 'password',
});

const session = statelessSessions({
  secret: '-- EXAMPLE COOKIE SECRET; CHANGE ME --',
});


const Service: Lists.Service = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),

  },
});

const Product: Lists.Product = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),

  },
});


const Solution: Lists.Solution = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),

  },
});




const Team: Lists.Team = list({
  fields: {
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    postion: text({ validation: { isRequired: true } }),
    name: text({ validation: { isRequired: true } }),
    content: text(),
    avatar: image({ storage: 'my_local_images' }),

  },
});










export default  withAuth(
  config({
    db: { provider: 'sqlite', url: 'file:./app.db' },
    experimental: {
      generateNextGraphqlAPI: true,
      generateNodeAPI: true,
    },
  
   session,
  
    lists: {Service, Team, Product, Solution, User },
    storage: {
      my_local_images: {
        // Images that use this store will be stored on the local machine
        kind: 'local',
        // This store is used for the image field type
        type: 'image',
        // The URL that is returned in the Keystone GraphQL API
        generateUrl: path => `/images${path}`,
  
        // The route that will be created in Keystone's backend to serve the images
        serverRoute: {
          path: '/images',
        },
        // Set serverRoute to null if you don't want a route to be created in Keystone
        // serverRoute: null
        storagePath: 'public/images',
      },
      /** more storage */
    }
  
  })
);