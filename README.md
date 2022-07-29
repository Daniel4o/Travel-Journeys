# Travel-Journeys
This is an app using the M.E.R.N. stack for tracking travel journeys. It uses MongoDb as a database, Express.js for providing features for the app and manipulating data using the HTTP methods,React.js as a fron-end UI and Node.js for back end JavaScript runtime environment

## Directory Structure
- -server/
- /models - Define all model/table schema via Sequelize ORM which are generated when running server;
- /controllers - Store all controller files for different modules which contains REST API method;
- /routes - Store all routes for different modules;
- server.js - Base filfe that runs the Nodejs App;
- env.example - An example environment variable.

- -client/src
- App.js - Contains Layout which it self contains home page content main navigation and url's to other pages
- /components - Contains all the app's front end structure - create, read, update delete method for teams, players, results, validations, styling, main navigation which is presented in every page, home page and images 
- /pages - Contains all the (imported) content for the pages. 
## Packages Used
## SERVER
**-Express** : Flexible and minimal web app for Node.js framework.   
**- MySQL** : It's required as a support for Sequelize package for MySQL databases.    
**-Cors** :  Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.  
**-Dotenv** : Zero-dependency module that loads environment variables from a .env file into process.env. 

## CLIENT
**-React** : Front-end library for building user interfaces based on UI components.   
**-React Router** : It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.  
**-Dotenv** : Zero-dependency module that loads environment variables from a .env file into process.env.   

## Development Dependancies

 **- Nodemon** : Tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

## Instaling packages and dependancies
Because the app is running on two servers it's better to open two terminals and run the command to install packages and dependancies in server and client via:            
#
````
npm install 
````
## Environment configurations

## Server
In server's folder: create a file with the following name and location .env and copy the contents from .env.example into it. Replace the values with your specific configuration. Create a new database which you will use this project
#
```
#Database
DB_HOST=your-db-host
DB_USER=your-db-username
DB_PASS=your-db-password
DB_SCHEMA=your-db-schema-name

```

## Client
In client's folder: create a file with the following name and location .env and copy the contents from .env.example into it. Replace the values with your specific configuration.
#
```
#URL for your Backend/server 
REACT_APP_URL= your-server-name-and-port-number

```

## Running the App
You can then run server.js in node, or use nodemon to run the app locally. If nodemon doesn't start you need to install it globally via:
#
```
nodemon install -g nodemon

```

For the client's folder after installing the dependancies you can run the app via npm start.

## To your attention
In order to your app to run completely, you need both server and client running, since client uses request to backend which is server and get's the data from database.
