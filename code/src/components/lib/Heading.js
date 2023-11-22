import React from 'react';

const Heading = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="rounded-4xl bg-light-grey pl-1 pr-4 py-1 inline-block">
        <p className="text-xs text-primary-black">
          <span className="rounded-4xl px-2 py-0.5 bg-gradient-to-t from-bright-purple to-primary-blue text-primary-white mr-2">
            New
          </span>
          Announcing our next round of founding
        </p>
      </span>
      <h1 className="text-l font-bold">
        Meet SquareDocs
      </h1>
      <p className="text-s text-dark-grey">
        Premium, editable template for Framer. Craft your documentation effortlessly.
      </p>
    </div>
  );
}

export default Heading;