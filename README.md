# MOVIE HUB 

In this project I have started in the Backend world, learning to create my own API and set up the server.
To do this, I have created an API in which we have three data models, those of User, those of movies and those of movie genre. So that the Front project can work with this data.


## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies and Concepts](#technologies-and-concepts)
- [Conclusion](#conclusion)
- [Preview](#preview)

## Introduction

For this project I had to learn how to create and build a server. And generate an API with all your endpoints. For these endpoints I also had to create the models, routes and models for each type of data.


## Features
- Search and view movie data
- Searching and filtering Books.
- Moves management
- Login management

## Requirements
To run the project, you need to have the following requirements installed:
- Node.js
- npm
- mongoDB & mongoose
- prisma
- express

## Installation
Follow these steps to install the project:
1. Clone the repository:
```sh
$ git clone https://github.com/ebroto7/MovieHub_Front.git
```

2. Navigate to the project directory:
```sh
cd MovieHub_front
```

3. Install the dependencies:
```sh
$ pnpm install
```

## Usage

To run the project, follow these steps and commands:

1. Create a `.env` file in the root of your project with the following content:
```sh
PORT=<PORT>
MONGO_DB_URI=<url>
POSTREGRES_DATABASE_URL=<url>
DATA_SOURCE=postgres
```
Additionally, you can find an example of the .env file in the config folder named env.example. This file serves as a template for your configuration.

2. Run server
    - view : https://github.com/ebroto7/MovieHub.git
 ```sh
npm run dev
```

3. Run the development Front project:
    - view https://github.com/ebroto7/MovieHub_Front.git

Access the project through your browser at http://localhost:5173/home.

## Technologies and Concepts
- Express.js, TypeScript, and Node.js for backend development.

- MongoDB and Mongoose for the initial database setup.
- Prisma for ORM and database migration.
- PostgreSQL for data model migration.
- Auth0 for user authentication.
- MVC (Model-View-Controller) design pattern.


## Conclusion

I think I can say that in this project I have had to give my best to achieve a good result. Basically I have had to learn on the fly all those concepts that I needed to implement to make a robust API.
I can be proud of the result, since it is not easy to carry out a project without being able to organize it well from the beginning because we do not know exactly the desired result or what tools we can use to carry it out.