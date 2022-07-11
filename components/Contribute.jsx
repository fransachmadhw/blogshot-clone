import React from 'react';

const Contribute = () =>
{
  return (
    <div className="text-center fixed bottom-10 right-10 hidden lg:block">
      <a href="https://github.com/fransachmadhw/blogshot-clone" target="_blank" className="transition duration-500 ease transform hover:-translate-y-2 flex items-center bg-white text-sm shadow-lg font-medium rounded-full text-black px-6 py-2 cursor-pointer">
        <span className="mr-1">Contribute on</span>
        <img src="/bxl-github.svg" alt="github-logo" width={20} className="github-logo" />
      </a>
    </div>
  );
}

export default Contribute;
