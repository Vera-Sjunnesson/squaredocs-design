import React from 'react';
import GuideButtons from './GuideButtons';
import Heading from './Heading'
import InfoBlock from './InfoBlock';

// Component for the main middle section
const MainSection = () => {
  return (
    <section className="w-5/6 flex flex-col items-center justify-start gap-20 pt-16 pb-20 px-20 lg:px-10 sm:px-0">
      <Heading />
      <GuideButtons />
      <InfoBlock />
    </section>
  );
}

export default MainSection;