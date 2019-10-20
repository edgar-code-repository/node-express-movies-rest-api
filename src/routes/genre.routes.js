const express = require('express');
const router = express.Router();

const genre_controller = require('./../controllers/genre.controller');

router.get('', genre_controller.getAllGenres);
router.get('/test', genre_controller.test);
router.get('/:id/movies', genre_controller.getAllMoviesByGenre);
router.get('/:id/movies/:movie_id', genre_controller.getMovieById);
router.post('/:id/movies', genre_controller.createMovieByGenre);

module.exports = router;