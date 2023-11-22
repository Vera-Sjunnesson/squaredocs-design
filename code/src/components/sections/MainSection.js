import React from 'react';
import GuideButtons from '../lib/GuideButtons';
import Heading from '../lib/Heading';
import InfoBlock from '../lib/InfoBlock';

const MainSection = () => {
  return (
    <section className="bg-gradient-to-bl from-pink from-20% via-primary-white via-40% to-primary-white to-90% w-3/4 h-full flex flex-col items-center justify-start gap-20 pt-10 px-20 rounded-1xl">
      <Heading />
      <GuideButtons />
      <InfoBlock />
    </section>
  );
}

export default MainSection;