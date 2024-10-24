# Financial Application

## Project Overview

This is a financial application built using React (frontend). This project helps users track expenses, income, and budgeting goals.

## Project Structure

### `/frontend`

This is the React-based frontend of the application.

#### `/public`

Contains static files that are served directly to the browser.

- `index.html`: The main HTML file where the React app is injected.
- `favicon.ico`: Icon displayed in the browser tab.
- `manifest.json`: Metadata for progressive web apps.
- `robots.txt`: Instructions for web crawlers.

#### `/src`

Contains all the source code for the React app.

- `index.js`: The entry point of the React application where the main component is rendered.
- `App.js`: Main component of the application, where other components are managed.
- `App.css`: Styles specific to the `App` component.
- `index.css`: Global styles for the application.
- `setupTests.js`: Configuration for running tests.

#### `.env`

Contains environment variables for the frontend. Variables prefixed with `REACT_APP_` are accessible in the React app.

### Backend (Go)

The backend API is built using Go, handling business logic and data storage with MySQL.

## React Basics

- **React**: A JavaScript library for building interactive UIs using reusable components.
- **Components**: UI building blocks that manage their own state and props.
- **State and Props**:
  - **State**: Local component data that can change over time.
  - **Props**: Data passed from parent to child components.

## Running the Application

To run the frontend, follow these steps:

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```
