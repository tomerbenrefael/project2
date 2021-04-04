// Require needed modules and initialize Express app
let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
    dbConfig = require('./configs/database');



// Setting up port with express js
const app = express();
app.use(cors());
app.use(express.json({limit: '1gb'}));
app.use(express.urlencoded({ extended: false, limit: '1gb' }));

const userController = require('./controllers/userController');
app.use('/api/users', userController);


// Create port
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/api/users`));



// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
 });
 
 // error handler
 app.use(function (err, req, res, next) {
   console.error(err.message); // Log error message in our server's console
   if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
   res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
 });