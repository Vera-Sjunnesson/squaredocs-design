import React from 'react';
import useAuthStore from '../../stores/authStore';
import {
  HomeIcon,
  BoltIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  EnvelopeIcon
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
//Left side menubar component, the ""sublink" arrays are mapped inside of each list item object which are also mapped
const Sidebar = () => {
  const { user } = useAuthStore();
  
  return (
    <nav className="min-w-max h-full flex flex-col justify-between p-4 border-r sm:w-full sm:h-auto sm:border-r-0 sm:border-t">
      <div className="sm:grid grid-cols-2 grid-rows-2">
        {MainLinks.items.map((item) => {
          const Icon = item.icon;
          return (
            <ul
              key={item.id}
              className="group">
              <li className="flex items-center gap-x-3 text-xs text-primary-black font-semibold mb-4 cursor-pointer transition-transform duration-500 ease-in-out hover:translate-x-2">
                <Icon className="h-4 w-4 text-dark-grey cursor-auto transition ease-in-out group-hover:scale-125 group-hover:text-primary-blue"/>
                {item.title}
              </li>
              <ul className="ml-7 sm:hidden">
                {item.sublinks.map((sublink, index) => (
                  <li
                    className="text-xxs text-dark-grey font-semibold mb-4 cursor-pointer hover:text-primary-black transition-transform duration-500 ease-in-out hover:translate-x-2"
                    key={index}>
                    {sublink}
                  </li>
                ))}
              </ul>
            </ul>
          )})}
      </div>
        {user // If there is a user in the store, the user's name and email will show
          && (
            <ul>
              <li className="flex items-center gap-x-3 text-xs font-semibold text-primary-black mb-2">
                <UserCircleIcon className="h-4 w-4 text-dark-grey"/>
                {user.first_name}
              </li>
              <li className="flex items-center gap-x-3 text-xs font-semibold text-primary-black mb-2">
                <EnvelopeIcon className="h-4 w-4 text-dark-grey"/>
                {user.email}
              </li>
            </ul>
        )}
    </nav>
  );
};

export default Sidebar;

