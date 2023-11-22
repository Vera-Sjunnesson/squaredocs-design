import React from 'react';
import Guides from '../lib/Guides';
import Heading from '../lib/Heading';

const MainSection = () => {
  return (
    <section className="absolute top-20 right-0 w-3/4 flex flex-col items-center px-20">
      <Heading />
      <Guides />
    </section>
  );
}

export default MainSection;