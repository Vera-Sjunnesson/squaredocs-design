import React from 'react';

const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="inline-block bg-primary-white mb-2 py-1 pl-1 pr-3 rounded-4xl shadow-3xl text-xxs font-semibold text-primary-black">
        <span className="bg-tagline-gradient px-1.5 py-0.5 mr-2 rounded-4xl text-primary-white sm:max-w-max">
          New
        </span>
        Announcing our next round of funding
      </p>
      <h1 className="text-l text-primary-black font-bold tracking-tight">
        Meet SquareDocs
      </h1>
      <p className="text-xs text-dark-grey font-medium">
        Premium, editable template for Framer. Craft your documentation effortlessly.
      </p>
    </div>
  );
}

export default Heading;