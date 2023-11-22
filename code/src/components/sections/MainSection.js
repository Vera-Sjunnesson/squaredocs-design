import React from 'react';
import Guides from '../lib/Guides';

const MainSection = () => {
  return (
    <section className="absolute top-20 right-0 w-3/4 flex flex-col items-center px-20">
      <Guides />
    </section>
  );
}

export default MainSection;