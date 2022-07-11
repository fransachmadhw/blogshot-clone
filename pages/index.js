import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget, Contribute, ScrollTop } from '../components';
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-3 lg:px-7">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative lg:top-[100px]">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      <ScrollTop />
      <Contribute />
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 10,
  };
}
