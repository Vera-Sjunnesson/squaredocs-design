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

const GuideButtons = () => {
  return (
    <section className="w-full grid grid-cols-2 grid-rows-2 gap-4">
      {ButtonItems.items.map((item) => {
        const Icon = item.icon;
        return (
        <button key={item.id} className=" w-full bg-light-grey col-span-1 rounded-lg p-5 flex items-center justify-between text-xs font-bold text-black">
          <span className="flex items-center gap-5">
            <Icon className="h-4 w-4 text-dark-grey"/>
            {item.title}
            </span>
            <ChevronRightIcon className="h-2 w-2 text-dark-grey" />
        </button>
        )})}
    </section>
  );
};

export default GuideButtons;