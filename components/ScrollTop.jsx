import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    if (window.scrollY > window.innerHeight) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className={`${visible ? 'visible' : 'invisible'} lg:block rounded-full fixed bottom-[13%] right-[50%]
    translate-x-1/2 lg:translate-x-0 lg:bottom-[13%] lg:right-10 flex items-center bg-white p-3 cursor-pointer
    transition duration-500 ease hover:-translate-y-2 shadow-lg`} onClick={scrollToTop}>
      <img src="/bxs-up-arrow.svg" alt="arrow-up" width={20} />
    </div>
  );
}

export default ScrollTop;
