# wudpecker-task

## The task

This project is a recreation of a specific, chosen design using Tailwind CSS, focusing on state management with Zustand and creating login functionalities.

## The process

1. I chose Zustand over Redux because I want to to learn about its advantages and syntax. I started off by researching it.
2. Set up React App and planned a basic structure, thinking of what functionality and styling each component should have
3. Focused on building and styling the fundamental parts and played around with different features in Tailwind CSS to decide on suitable themes
4. Utilized nested maps within the Sidebar component to display the hierarchical menu lists to more easily style them
5. Then moved on to the main section, breaking it down to 3 components and concentrated on individually styling each part
6. Once the styling was in a good place, I created an "authStore", making a POST request to the provided API
7. Found Zustand's syntax straightforward while implementing actions in the created popup component
8. Created another store for managing the popup window state
9.  Used state functionality for toggling between the "log in" and "log out" button states
10. Retrieved user data such as "name" and "email" to be presented in the sidebar
11. Detected bugs, redesigned the logo in Figma and made hover states for buttons and links
12. Installed React Hook Form to validate the user email input in the popup form 
13. Worked with validation in the email input login form (based on required and type) and created error messages
14. Explored media queries within Tailwind CSS


## Technologies, dependencies and tools used

- React
- Zustand
- Tailwind CSS
- React Hook Form
- Postman
- Figma

## View it live

https://wudpecker-task-vera.netlify.app