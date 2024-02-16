import React from 'react';
import {
  PencilIcon,
  CircleStackIcon,
  PuzzlePieceIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

const InfoItems = {
  items: [
    {
      id: 1,
      icon: PencilIcon,
      title: "Easily editable",
      text: "Thanks to premade assets, you can modify all colors and text, such as Action Color"
    },
    {
      id: 2,
      icon: CircleStackIcon,
      title: "CMS",
      text: "Edit and manage all pages exclusively within CMS mode"
    },
    {
      id: 3,
      icon: PuzzlePieceIcon,
      title: "Components",
      text: "Finely crafted components with multiple states and Variables"
    },
    {
      id: 4,
      icon: ArrowPathIcon,
      title: "Automatically generated",
      text: "All pages and navigation will be generated automatically from the CMS"
    }
  ]
};

const InfoBlock = () => {
  return (
    <section className="flex flex-col">
      <h2 className="text-m text-primary-black font-bold mb-5">
        Why SquareDocs?
      </h2>
      <div className="w-full grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-1">
        {InfoItems.items.map((item) => {
          const Icon = item.icon;
          return (
          <div
            key={item.id}
            className="w-full col-span-1 flex flex-col text-xs text-primary-black">
            <span className="flex items-center gap-x-4 font-semibold leading-relaxed ">
              <Icon className="h-4 w-4 text-primary-blue"/>
              {item.title}
            </span>
            <p className="text-dark-grey leading-relaxed ml-8">
              {item.text}
            </p>
          </div>
          )})}
      </div>
    </section>
  );
};

export default InfoBlock;
