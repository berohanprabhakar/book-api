const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middlewares/errorHandler');
const morgan = require('morgan');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Use morgan middleware to log requests in a compact format
app.use(morgan("tiny"));

// custom logger middlware to log the request method and URL
function logger(req,res,next){
    console.log("Request Method: ", req.method);
    console.log("Request URL: ", req.url);
    next();
}

app.use(logger);

// Error Handling Middleware
app.use(errorHandler);

// Routes
app.use('/api', bookRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
