const http = require('http');
const app = require('./app');
const { default: mongoose } = require('mongoose');

require('dotenv').config({
    path: '../.env'
});

const PORT = process.env.PORT;
const mongooseURL = process.env.MONGO_URL; 
const server = http.createServer(app);


async function startServer () {

    //connnecting to databse
    mongoose.connect(mongooseURL);
    const database = mongoose.connection;


    //checking if the server is on
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`);
    });


    //checking if the mongoDB connection is working
    database.on('error', (error) => {
        console.log(error)
    })
    
    database.once('connected', () => {
        console.log('Database Connected');
    })
}

startServer();
//Xh4YUI8LkIYdYQBc