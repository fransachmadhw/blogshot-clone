import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="rounded-lg p-8 pb-12 mb-5">
      <h3 className="text-xl mb-8 font-semibold border-b uppercase pb-4 text-black dark:text-white">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none hover:cursor-pointer">
            <Link href={`/post/${post.slug}`} className="text-md" key={index}>
              <Image
                loader={graphCMSImageLoader}
                alt={post.title}
                height="60px"
                width="60px"
                layout="responsive"
                unoptimized
                objectFit="cover"
                className="align-middle rounded-full"
                src={post.featuredImage.url}
              />
            </Link>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-black text-sm font-xs dark:text-white">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
            <Link href={`/post/${post.slug}`} className="text-md text-black dark:text-white" key={index}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
