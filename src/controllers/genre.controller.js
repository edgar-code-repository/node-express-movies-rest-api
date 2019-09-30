require('dotenv').config();

console.log("[Genre Controller][DATABASE_URL: " + process.env.DATABASE_URL + "]");

const db = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
});

exports.test = function (req, res) {
    res.send('This is the Genre controller!');
};

exports.getAllGenres = function (req, res) {
    console.log("[Genre Controller][getAllGenres][START]");

    db.from('tbl_genres').select('id', 'name')
        .then(items => {
            if(items.length){
                res.json(items)
            } else {
                res.json({dataExists: 'false'})
            }
        })
        .catch(err => {
            console.log("[Genre Controller][getAllGenres][Error: " + err + "]");
            res.status(400).json({dbError: err})
        })    

};

exports.getAllMoviesByGenre = function (req, res) {
    console.log("[Genre Controller][getAllMoviesByGenre][START]");
    const id = parseInt(req.params.id);
  
    db.from('tbl_movies').select('id', 'title', 'genre_id').where('genre_id', '=', id)
        .then(items => {
            if(items.length){
                res.json(items)
            } else {
                res.json({dataExists: 'false'})
            }
        })
        .catch(err => {
            console.log("[Genre Controller][getAllMoviesByGenre][Error: " + err + "]");
            res.status(400).json({dbError: err})
        })    
  
  };