

## Project Overview
The objective is to build a basic storefront application using the Fake Store API, demonstrating proficiency across several facets of frontend development.

- **Handling of network requests**: Network requests are managed using @tanstack/react-query, ensuring efficient fetching, caching, and error handling. I have combined react-query's caching capabilities with react-router-dom's ability to coordinate when to fetch data (ie via routes). More on why I chose this approach here: https://tkdodo.eu/blog/react-query-meets-react-router 

- **TypeScript**: The entire project is developed using TypeScript to ensure type safety and improved development experience.

- **Routing**: React Router v6 is used for declarative routing, enabling seamless navigation between different views such as the product listing page and individual product details.

- **State management**: Context API and @tanstack/react-query are leveraged for managing global state and caching, ensuring a robust and scalable state management solution.

- **Semantic HTML**: HTML elements are used semantically to enhance accessibility and SEO performance.

- **CSS and polished end result**: Tailwind CSS is utilized for styling, providing a clean and responsive design. General design was inspired by the https://www.bash.com web app.

## Notes

- **Dependencies**: The project uses @tanstack/react-query for data fetching and state management, React Router v6 for routing, and Tailwind CSS for styling (with Shadcn for some pre-styled components.

- **Build tools**: Vite is used as the build tool for fast development and optimized production builds.

## Running instructions
- Run ```yarn``` to install dependencies
- ```yarn run dev``` to run app
- visit ```http://localhost:5173/``` to view
