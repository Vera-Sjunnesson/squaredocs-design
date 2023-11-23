import React from 'react';
import GuideButtons from '../lib/GuideButtons';
import Heading from '../lib/Heading';
import InfoBlock from '../lib/InfoBlock';

const MainSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-start gap-20 py-10 px-20">
      <Heading />
      <GuideButtons />
      <InfoBlock />
    </section>
  );
}

export default MainSection;