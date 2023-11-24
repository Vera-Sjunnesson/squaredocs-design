import React from 'react';
import {
  HomeIcon,
  BoltIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

const ButtonItems = {
  items: [
    {
      id: 1,
      icon: HomeIcon,
      title: "Getting Started"
    },
    {
      id: 2,
      icon: BoltIcon,
      title: "Installation"
    },
    {
      id: 3,
      icon: CodeBracketIcon,
      title: "API Reference"
    },
    {
      id: 4,
      icon: QuestionMarkCircleIcon,
      title: "Help"
    }
  ]
};

//Guide button component in the main section - made responsive
const GuideButtons = () => {
  return (
    <section className="w-full grid grid-cols-2 grid-rows-2 gap-4 sm:grid-cols-1">
      {ButtonItems.items.map((item) => {
        const Icon = item.icon;
        return (
          <button key={item.id} className="w-full bg-light-grey col-span-1 flex items-center justify-between rounded-lg p-5 text-xs font-bold text-black group hover:bg-hover-gradient2">
            <span className="flex items-center gap-5 text-sx font-semibold text-primary-black group-hover:text-primary-white">
              <Icon className="h-4 w-4 text-dark-grey group-hover:text-white"/>
              {item.title}
            </span>
            <ChevronRightIcon className="h-2 w-2 text-dark-grey group-hover:text-white group-hover:scale-150" />
          </button>
        )})}
    </section>
  );
};

export default GuideButtons;
