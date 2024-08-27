Books API Documentation
Overview
The Books API provides a set of RESTful endpoints to manage a collection of books. You can perform CRUD (Create, Read, Update, Delete) operations on books and apply various filters and sorting options to query the data.

Table of Contents
Getting Started
API Endpoints
Create a Book
Get All Books
Get a Book by ID
Update a Book
Delete a Book
Search Books
Query Parameters
Error Handling
Testing with Postman
Deployment
Getting Started
Prerequisites
Node.js installed on your machine
MongoDB Atlas or a local MongoDB instance
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/book-api.git
cd book-api
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root directory of the project and add your MongoDB connection string:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=3000
Start the server:

bash
Copy code
npm start
API Endpoints
Create a Book
Method: POST

URL: /api/books

Request Body:

json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "isbn": "1234567890",
  "publishedDate": "2023-08-27T00:00:00Z"
}
Response:

json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "isbn": "1234567890",
  "publishedDate": "2023-08-27T00:00:00Z",
  "_id": "unique_book_id",
  "__v": 0
}
Get All Books
Method: GET

URL: /api/books

Query Parameters:

sort (optional): Sort the results (e.g., publishedDate,-title)
page (optional): Page number for pagination
limit (optional): Number of results per page
title (optional): Filter by book title
author (optional): Filter by author
Response:

json
Copy code
{
  "success": true,
  "count": 10,
  "data": [
    {
      "title": "Book Title",
      "author": "Author Name",
      "isbn": "1234567890",
      "publishedDate": "2023-08-27T00:00:00Z",
      "_id": "unique_book_id",
      "__v": 0
    }
  ]
}
Get a Book by ID
Method: GET

URL: /api/books/:id

URL Parameters:

id: The unique identifier of the book
Response:

json
Copy code
{
  "title": "Book Title",
  "author": "Author Name",
  "isbn": "1234567890",
  "publishedDate": "2023-08-27T00:00:00Z",
  "_id": "unique_book_id",
  "__v": 0
}
Update a Book
Method: PUT

URL: /api/books/:id

Request Body:

json
Copy code
{
  "title": "Updated Book Title",
  "author": "Updated Author Name"
}
Response:

json
Copy code
{
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "isbn": "1234567890",
  "publishedDate": "2023-08-27T00:00:00Z",
  "_id": "unique_book_id",
  "__v": 0
}
Delete a Book
Method: DELETE

URL: /api/books/:id

URL Parameters:

id: The unique identifier of the book
Response:

json
Copy code
{
  "message": "Book deleted successfully"
}
Search Books by Title
Method: GET

URL: /api/books/search

Query Parameters:

title: Filter books by title
Response:

json
Copy code
{
  "success": true,
  "count": 5,
  "data": [
    {
      "title": "Book Title",
      "author": "Author Name",
      "isbn": "1234567890",
      "publishedDate": "2023-08-27T00:00:00Z",
      "_id": "unique_book_id",
      "__v": 0
    }
  ]
}
Query Parameters
sort: Defines the sorting order of results. Example: publishedDate,-title sorts by publishedDate ascending and title descending.
page: Specifies the page number for pagination. Example: 2 for page 2.
limit: Defines the number of results per page. Example: 10 to limit results to 10 per page.
title: Filters results by the book title. Example: Harry to find books with "Harry" in the title.
author: Filters results by the author's name. Example: Potter to find books with "Potter" in the author's name.
Error Handling
400 Bad Request: The request is invalid or missing required fields.
404 Not Found: The requested resource could not be found.
500 Internal Server Error: An error occurred on the server.
Testing with Postman
Import Collection:

Download and import the Postman collection file if provided.
Test Endpoints:

Create a Book: Use POST with /api/books and provide the request body.
Get All Books: Use GET with /api/books and add query parameters as needed.
Get a Book by ID: Use GET with /api/books/:id.
Update a Book: Use PUT with /api/books/:id and provide the request body.
Delete a Book: Use DELETE with /api/books/:id.
Search Books: Use GET with /api/books/search and add the title query parameter.