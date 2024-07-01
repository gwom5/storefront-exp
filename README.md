# DVT Tech Challenge: Basic Storefront Application

## Project Overview

This project is a submission for the DVT frontend developer role challenge. The objective is to build a basic storefront application using the Fake Store API, demonstrating proficiency across several facets of frontend development.

## Key Requirements Met

- **Good commit & branching conventions**: Commits are structured and descriptive, following standard Git branching strategies for feature development and bug fixes.

- **Handling of network requests**: Network requests are managed using @tanstack/react-query, ensuring efficient fetching, caching, and error handling. I have combined react-query's data-fetching and caching capabilities with react-router-dom's ability to coordinate when to fetch data (ie via routes). More on why I chose this approach here: https://tkdodo.eu/blog/react-query-meets-react-router 

- **TypeScript**: The entire project is developed using TypeScript to ensure type safety and improved development experience.

- **Routing**: React Router v6 is used for declarative routing, enabling seamless navigation between different views such as the product listing page and individual product details.

- **State management**: Context API and @tanstack/react-query are leveraged for managing global state and asynchronous data fetching, ensuring a robust and scalable state management solution.

- **Semantic HTML**: HTML elements are used semantically to enhance accessibility and SEO performance.

- **CSS and polished end result**: Tailwind CSS is utilized for styling, providing a clean and responsive design. General design was inspired by https://www.bash.com's web app.

## Additional Features

- **Global state management**: Implemented through Context API and @tanstack/react-query, ensuring centralized data management across components. The project was carefully structured in a way that avoids unnecessary rerenders. For example, the Cart context is seperated from the main application context so that updates to the cart do not cause rerenders of components that do not directly read from or mutate it. 

- **Multiple routes and error handling**: React Router v6 enables multiple routes for navigating between different sections of the storefront, enhancing user experience and application structure. Added to that errors are caught and handled gracefully and displayed in a user-friendly manner, using a combination of error elements and an ErrorBoundary.

- **Visual enhancements**: Designed with a focus on clean UI and simple using Tailwind CSS, the application is responsive on different devices, including mobile and desktop.

## Notes

- **Dependencies**: The project uses @tanstack/react-query for data fetching and state management, React Router v6 for routing, and Tailwind CSS for styling (with Shadcn for some pre-styled components.

- **Build tools**: Vite is used as the build tool for fast development and optimized production builds.

- **@ts-ignores**: No @ts-ignores or similar are used in the project. TypeScript errors and warnings are addressed directly with type annotations and correct typings.
