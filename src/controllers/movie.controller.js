require('dotenv').config();

console.log("[Movie Controller][DATABASE_URL: " + process.env.DATABASE_URL + "]");

const db = require('knex')({
    client: 'pg',
    connection: process.env.DATABASE_URL
});

exports.test = function (req, res) {
    res.send('This is the Movie controller!');
};

exports.getMovieById = function (req, res) {
    console.log("[Movie Controller][getMovieById][START]");
    const id = parseInt(req.params.id);
  
    db('tbl_movies')
        .select('id', 'title', 'year', 'poster', 'plot', 'genre_id')
        .where({
            id: id
        })
        .then(items => {    
            if(items.length){
                res.json({
                    dataExists: 'true',
                    items: items
                })
            } else {
                res.json({dataExists: 'false'})
            }
        })
        .catch(error => {
            console.log("[Movie Controller][getMovieById][Error: " + error + "]");
            res.status(500).json({message: error})
        })    
};