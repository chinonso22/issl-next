
import { InferGetStaticPropsType } from 'next';
import Link from 'next/link';

// Import the generated Lists API and types from Keystone
import { query } from '.keystone/api';
import { Lists } from '.keystone/types';


//layouts 
import DefaultLayout from "../components/layouts/DefaultLayout";
import Header from '../components/layouts/Header';
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";

type Post = {
  id: string;
  title: string;
  slug: string;
};

export default function Homes({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout>
      <>
        <Header
          title='THIS IS THE HOME PAGE'
          desc='THIS IS THE DESCRIPTION FOR THE HOME PAGE' />
        <div>
          this is a list of the pages
          {posts.map(post => (
            <div key={post.id}>
              <Link href={`/post/${post.slug}`}>
                <a> {post.title} </a>
              </Link>

            </div>
          )

          )

          }
        </div>

      </>
    </DefaultLayout>
  )
}

// Home receives a `posts` prop from `getStaticProps` below
// export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <div>
//       <main style={{ margin: '3rem' }}>
//         <h1>THIS IS THE HOME PAGE</h1>
//         <ul>
//           {/* Render each post with a link to the content page */}
//           {posts.map(post => (
//             <li key={post.id}>
//               <Link href={`/post/${post.slug}`}>
//                 <a>{post.title}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </main>
//     </div>
//   );
// }

// Here we use the Lists API to load all the posts we want to display
// The return of this function is provided to the `Home` component
export async function getStaticProps() {
  const posts = await query.Post.findMany({ query: 'id title slug' }) as Post[];
  return {
    props: {
      posts
    }
  };
}