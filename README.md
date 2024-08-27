# Book API

A simple RESTful API for managing books using Node.js, Express, and MongoDB.

## Table of Contents

1. [Features](#features)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)
6. [API Endpoints](#api-endpoints)
   - [Books](#books)
     - [Create a Book](#create-a-book)
     - [Get All Books](#get-all-books)
     - [Get a Book by ID](#get-a-book-by-id)
     - [Update a Book by ID](#update-a-book-by-id)
     - [Delete a Book by ID](#delete-a-book-by-id)
     - [Get Books by Title](#get-books-by-title)
   - [Query Parameters](#query-parameters)
7. [Logging](#logging)
8. [Testing](#testing)
9. [Project Structure](#project-structure)
10. [Contributing](#contributing)
11. [License](#license)

## Features

- CRUD operations for books (Create, Read, Update, Delete)
- Filtering, sorting, and pagination for book lists
- Error handling and validation
- Logging of requests using morgan

## Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas or a local MongoDB instance

## Installation

Clone the repository:

```bash
git clone https://github.com/berohanprabhakar/book-api.git
cd book-api
```

Install the dependencies:


```bash 
npm install
```

Environment Variables
---------------------

Create a `.env` file in the root of your project and add the following environment variables:

```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

Running the Application
-----------------------

To start the application in development mode with automatic restarts, run:


```bash
npm run dev
```

To start the application in production mode, run:

```bash
npm start
```

API Endpoints
-------------

### Books

-   **Create a Book**

    -   **Method**: POST

    -   **URL**: `/api/books`

    -   **Body**:

        ```bash
        {
          "title": "Book Title",
          "author": "Author Name",
          "isbn": "1234567890",
          "publishedDate": "2023-01-01"
        }
        ```

-   **Get All Books**

    -   **Method**: GET
    -   **URL**: `/api/books`
    -   **Query Parameters**:
        -   `sort`: Sort the results by fields, e.g., `publishedDate,-title`
        -   `page`: The page number for pagination, e.g., `page=2`
        -   `limit`: Number of results per page, e.g., `limit=10`
        -   `title`: Filter books by title, e.g., `title=Harry`
        -   `author`: Filter books by author, e.g., `author=Rowling`
-   **Get a Book by ID**

    -   **Method**: GET
    -   **URL**: `/api/books/:id`
-   **Update a Book by ID**

    -   **Method**: PATCH

    -   **URL**: `/api/books/:id`

    -   **Body**:


      ```bash
      {
          "title": "Updated Title",
          "author": "Updated Author",
          "isbn": "Updated ISBN",
          "publishedDate": "Updated Date"
        }
      ```

-   **Delete a Book by ID**

    -   **Method**: DELETE
    -   **URL**: `/api/books/:id`
-   **Get Books by Title**

    -   **Method**: GET
    -   **URL**: `/api/books/search`
    -   **Query Parameters**:
        -   `title`: Filter books by title, e.g., `title=Harry`

Query Parameters
----------------

For Sorting, Pagination, and Filtering:

-   `sort`: Sort the results by fields, e.g., `publishedDate,-title`
-   `page`: The page number for pagination, e.g., `page=2`
-   `limit`: Number of results per page, e.g., `limit=10`
-   `title`: Filter books by title, e.g., `title=Harry`
-   `author`: Filter books by author, e.g., `author=Rowling`

**Example Query:**

```bash
GET /api/books?sort=publishedDate,-title&page=2&limit=10&title=Harry
```

Logging
-------

The application uses morgan for logging HTTP requests in the "tiny" format.

Testing
-------

You can add tests for your API using a testing framework like Jest or Mocha. To run tests, use:

```bash 
npm test

```


Project Structure
-----------------
```lua
book-api/
├── config/
│   └── db.js
├── controllers/
│   └── bookController.js
├── middlewares/
│   ├── asyncHandler.js
│   └── errorHandler.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── utils/
│   └── apiFeatures.js
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```
