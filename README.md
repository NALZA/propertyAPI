# Property API

API based on Expressjs, generated with express-generator.

## Features

- Get all properties
- Get properties by suburb
- Add a proprttyy
-100% test coverage

## API response

Response comes in form of JSON object

## Further conciderations
Can validate the input further by checking things like post code are at the correct length
Adding a database moving from an in memeory storage to a database would include:
  - A database connection and testing
  - Change to how the routes add data to the application
  - Test to see data in the database
  - Change to filter to now filter through database insted of requesting all properties. Would filter at database or graphql query.
  
  
## Installation

#### Requirements

- npm
- node >= 8

```
git clone https://github.com/NALZA/propertyAPI/
cd propertyapi
npm install
```

Run application

```
npm start
```
