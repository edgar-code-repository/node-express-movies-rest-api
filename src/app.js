const express = require('express');
const app = express();

const body_parser = require('body-parser');
const cors = require('cors');

const genre_routes = require('./routes/genre.routes');
const movie_routes = require('./routes/movie.routes')

app.use(cors())
app.use(body_parser.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome! This is the movies Rest API"
    })
});

app.use('/api/genres', genre_routes);
app.use('/api/movies', movie_routes);

app.get((req, res) => {
    res.status(404).json({
        message: "URL Not Found!"
    })    
});


module.exports = app;