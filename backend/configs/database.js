const mongoose = require('mongoose');
// Connecting with mongo db

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/usersDB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(() => {
    console.log('Database sucessfully connected')
 },
 error => {
    console.log('Database could not connected: ' + error)
 }
)