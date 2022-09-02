import { config, list } from '@keystone-6/core';
import { checkbox, image, password, relationship, text, timestamp } from '@keystone-6/core/fields';
import { Lists } from '.keystone/types';
import { document } from '@keystone-6/fields-document';
import dotenv from 'dotenv';
import { createAuth } from '@keystone-6/auth';
import { statelessSessions } from '@keystone-6/core/session';
import { SESSION_SECRET } from './config';



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

// let sessionMaxAge = 60 * 60 * 24 * 1000; // 2 day

const isAdmin = ({ session }: { session: Session }) => session?.data.isAdmin;

type Session = {
  data: {
    id: string;
    isAdmin: boolean;
  }
};
const session = statelessSessions({
  // maxAge: sessionMaxAge,
  // The session secret is used to encrypt cookie data (should be an environment variable)
  secret: SESSION_SECRET,
});

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'name',
  secretField: 'password',
});



const User: Lists.User = list({
  access: {
    operation: {
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    email: text(),
    name: text({ isIndexed: 'unique' }),
    password: password(),
    isAdmin: checkbox(),
  },
});


const Nav: Lists.Nav = list({
  access: {
    operation: {
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
    tag: text({ validation: { isRequired: true } }),
    author: relationship({ ref: 'User' }),
    editedOn: timestamp()
  },
});


const Home: Lists.Home = list({
  access: {
    operation: {
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {

    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
    tag: text({ validation: { isRequired: true } }),
    author: relationship({ ref: 'User' }),
    editedOn: timestamp()
  },
})


const Service: Lists.Service = list({
  access: {
    operation: {
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
    tag: text({ validation: { isRequired: true } }),
    author: relationship({ ref: 'User' }),
    editedOn: timestamp()
  },
});

const Product: Lists.Product = list({
  access: {
    operation: {
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
    tag: text({ validation: { isRequired: true } }),
    author: relationship({ ref: 'User' }),
    editedOn: timestamp()

  },
});


const Solution: Lists.Solution = list({
  access: {
    operation: {
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    content: text(),
    tag: text({ validation: { isRequired: true } }),
    author: relationship({ ref: 'User' }),
    editedOn: timestamp(),


  },
});




const Team: Lists.Team = list({
  access: {
    operation: {
      create: () => true,
      update: () => true,
      delete: () => true,
    },
  },
  fields: {
    slug: text({ isIndexed: 'unique', isFilterable: true }),
    postion: text({ validation: { isRequired: true } }),
    name: text({ validation: { isRequired: true } }),
    content: text(),
    avatar: image({ storage: 'my_local_images' }),
    author: relationship({ ref: 'User' }),
    editedOn: timestamp()

  },
});


export default withAuth(
  config({
    db: { provider: 'sqlite', url: 'file:./app.db' },
    experimental: {
      generateNextGraphqlAPI: true,
      generateNodeAPI: true,
    },

    session,

    lists: { Service, Team, Product, Solution, User, Home, Nav },
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