import React from 'react';
import {
  HomeIcon,
  BoltIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon
} from "@heroicons/react/24/outline";

const MainLinks = {
  items: [
    {
      id: 1,
      icon: HomeIcon,
      title: "Getting Started",
      sublinks: ["Introduction", "What's new?"]
    },
    {
      id: 2,
      icon: BoltIcon,
      title: "Installation",
      sublinks: ["Editor Setup", "Start a new Project"]
    },
    {
      id: 3,
      icon: CodeBracketIcon,
      title: "API Reference",
      sublinks: ["Components", "Connectors", "Information architecture", "Internationalization"]
    },
    {
      id: 4,
      icon: QuestionMarkCircleIcon,
      title: "Help",
      sublinks: ["FAQ", "Support"]
    }
  ]
};

const Sidebar = () => {
  return (
    <nav className="p-4 w-1/4 h-full border-r">
      {MainLinks.items.map((item) => {
        const Icon = item.icon;
        return (
        <ul key={item.id}>
          <li className="text-xs font-bold text-black flex items-center gap-x-3 mb-2">
            <Icon className="h-4 w-4 text-dark-grey"/>
            {item.title}
          </li>
          <ul className="ml-7">
            {item.sublinks.map((sublink, index) => (
              <li className="text-xs text-dark-grey mb-2" key={index}>{sublink}</li>
            ))}
          </ul>
        </ul>
        )})}
    </nav>
  );
};

export default Sidebar;
