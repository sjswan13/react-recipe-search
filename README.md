Recipe Search App

deployed link: https://delightful-chebakia-01dc89.netlify.app

This is a React-based web application that allows users to search for recipes by name or keyword and view detailed information about each recipe. Users can also get a random recipe suggestion.

Table of Contents:

-Features
-Technologies Used
-Getting Started
-Prerequisites
-Installation
-Running the App
-Usage
-Search for Recipes
-Get a Random Recipe
-File Structure
-Contributing
-License
-Contact

Features:

-Recipe Search: Users can search for recipes by entering keywords or ingredients.
-Random Recipe: A random recipe can be fetched by clicking the shuffle button.
-Detailed View: Users can view detailed information about each recipe, including ingredients and instructions.
-Responsive Design: The app is responsive and functions well on desktop.

Technologies Used:

-React: A JavaScript library for building user interfaces.
-Vite: A build tool that provides a fast development environment.
-Material-UI (MUI): A popular React UI framework for building modern web applications.
-React Router: A standard library for routing in React.

Getting Started:

Prerequisites:
Make sure you have the following installed:

-Node.js (version 14.x or higher)
-npm (Node Package Manager) or yarn

Installation:

Clone the repository:
git clone https://github.com/your-username/recipe-search-app.git
cd recipe-search-app

Install dependencies:

-Using npm:
npm install

Or using yarn:
yarn install

Running the App:

Start the development server:

Using npm:
npm run dev

Or using yarn:
yarn dev

Open the app in your browser:
Visit http://localhost:3000 in your web browser to see the app in action.

Usage:

-Search for Recipes
-Enter a keyword or ingredient in the search bar.
-Press 'Enter' or click the search button.
-The app will display a list of recipes matching the search term.
-Get a Random Recipe
-Click the shuffle button (with the shuffle icon) to get a random recipe.
-The app will display a random recipe, with details including ingredients and instructions.

File Structure:

recipe-search-app/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable components
│   │   ├── SearchForm.jsx  # Search bar and buttons
│   │   ├── MealList.jsx    # Displays the list of recipes
│   │   └── SingleMeal.jsx  # Detailed view of a single recipe
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point for React
│   └── index.css           # Global styles
├── .gitignore              # Files and directories to be ignored by Git
├── package.json            # Project metadata and dependencies
├── README.md               # This file
└── vite.config.js          # Vite configuration file

Contact
For any questions or feedback, please reach out:

Email: sjswan13@gmail.com
GitHub: sjswan13
