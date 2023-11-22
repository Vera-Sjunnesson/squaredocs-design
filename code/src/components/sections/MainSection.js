import React from 'react';
import GuideButtons from '../lib/GuideButtons';
import Heading from '../lib/Heading';
import InfoBlock from '../lib/InfoBlock';

const MainSection = () => {
  return (
    <section className="absolute top-20 right-0 w-3/4 flex flex-col items-center justify-center pt-10 px-20 gap-20">
      <Heading />
      <GuideButtons />
      <InfoBlock />
    </section>
  );
}

export default MainSection;