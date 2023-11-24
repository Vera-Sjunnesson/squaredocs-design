# wudpecker-task

## The task

This project is a recreation of a specific, chosen design using Tailwind CSS, focusing on state management with Zustand and creating login functionalities.

## The process

- I wanted to work with Zustand because I've read/heard it has advantages over Redux when it comes to performances and simplicity. I started off by researching how to use it and install it.

- I chose Zustand over Redux because I want to to learn about its advantages. I started off by researching how to use it effectively.
- Set up React App and planned a basic structure, thinking of what functionality and styling each component should contain
- Focused on building and styling the fundamental parts and played around with different features in Tailwind CSS to decide on suitable themes
- Utilized nested maps within the Sidebar component to display the hierarchical menu lists to more easily style them
- Then moved on to the main section, breaking it down to 3 components and concentrated on individually styling each part
- Once the styling was in a good place, I created an "authStore", making a POST request to the provided API
- Found Zustand's syntax straightforward while implementing actions in the created popup component.
- Created another store for managing the popup window state
- Used state functionality for toggling between the "log in" and "log out" button states
- Retrieved user data such as "name" and "email" to be presented in the sidebar
- Addressed bugs, redesigned the logo in Figma and made hover states for buttons and links.
- Installed React Hook Form to validate the user email input in the popup form 
- Disabled submissions without a valid input (based on required and type) and created error messages
- Explored media queries within Tailwind CSS


## Technologies, dependencies and tools used

- React
- Zustand
- Tailwind CSS
- React Hook Form
- Postman
- Figma

## View it live

https://wudpecker-task-vera.netlify.app