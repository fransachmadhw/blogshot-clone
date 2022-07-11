import React from 'react';
import Image from 'next/image';
import moment from 'moment';

const Author = ({ author }) => (
  <div className="rounded-lg p-8 pb-12 mb-5">
    <div className="">
      <Image
        alt={author.name}
        unoptimized
        height="90px"
        width="90px"
        objectFit="cover"
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-black dark:text-white my-3 text-base font-semibold">{author.name}</h3>
    <h4 className="align-middle my-3 text-sm text-black dark:text-white">Joined at {moment(author.createdAt).format('MMM DD, YYYY')}</h4>
    <p className="text-gray-700 dark:text-white text-sm font-normal">{author.bio}</p>
  </div>
);

export default Author;
