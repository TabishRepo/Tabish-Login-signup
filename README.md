# Tabish-Login-signup
Go to the project directory 
Open project directory in  terminal 
insatll all the dependencies using "npm install" ( C:\Tabish-login-singup> npm install)
To run backend Change directory to backend folder using "cd backend" and run backend using "npm start"  ( C:\Tabish-login-singup\backend> npm start)
To run frontend go to project main directory and run project using "npm start"  ( C:\Tabish-login-singup> npm start)

Tools and Libraries
The tools and libraries used in the project includes react , react-router-dom , contexApi and react-hot-toast.
React is used for building the user interface. It facilitates the creation of reusable UI components and provides a declarative approach to efficiently update and render components as the application state changes.
React Router DOM is used for handling navigation and routing within the React application. It enables the creation of distinct pages for login, signup, and the user profile, ensuring a smooth and intuitive user experience. Routes are defined to manage the flow of the application in the index file.
React Hot Toast is a toast notification library that provides visually appealing and customizable notifications. It is employed to display error messages, success notifications, and other feedback to users during the authentication and profile management processes.
The Context API facilitates the management of authentication state across components, allowing easy access to authentication-related information and actions throughout the  project.

Challanges and solution:
Implementing state management for authentication, especially when handling login/logout actions and user information is a great challenge.I use React Context API simplified state management which provides a centralized state accessible throughout the application, ensuring consistent authentication status.
Setting up routes and ensuring that certain routes are protected, accessible only by authenticated users, required a thoughtful approach.So , I use React Router for route management and creating a higher-order component for protected routes ensured secure navigation based on authentication status.








 
 
 
