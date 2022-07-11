import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { graphCMSImageLoader } from '../util';

const PostCard = ({ post }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5 rounded-lg p-5 lg:p-8 pb-0 mb-0">
      <div className="grid col-span-2 order-last lg:order-first">
        <div className="block text-center lg:text-left lg:flex items-center mb-3 w-full">
          <div className="flex justify-center items-center mb-3 lg:mb-0 w-full lg:w-auto mr-8">
            <Image
              unoptimized
              loader={graphCMSImageLoader}
              alt={post.author.name}
              height="30px"
              width="30px"
              objectFit="cover"
              className="align-middle rounded-full"
              src={post.author.photo.url ? post.author.photo.url : ''}
            />
            <p className="inline align-middle text-gray-700 dark:text-white ml-2 font-medium text-lg">{post.author.name}</p>
          </div>
          <div className="font-medium text-gray-700 dark:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
          </div>
        </div>
        <h1 className="text-center lg:text-left px-0 mb-7 lg:mb-0 cursor-pointer text-2xl text-black dark:text-white font-black">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <p className="hidden lg:block text-base text-gray-700 dark:text-white font-normal leading-tight px-4 lg:px-0 mb-0">
          <Link href={`/post/${post.slug}`}>{post.excerpt}</Link>
        </p>
        {/* <div className="">
          <Link href={`/post/${post.slug}`}>
            <span className="transition duration-500 ease transform hover:-translate-y-2 inline-block bg-black text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
          </Link>
        </div> */}
      </div>
      <div className="relative overflow-visible pb-[100%] mb-5 lg:mb-0 col-span-1 hover:cursor-pointer">
        <Link href={`/post/${post.slug}`}>
          <img src={post.featuredImage.url} alt="" className="absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" />
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
