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
        .catch(error => {
            console.log("[Genre Controller][getAllGenres][Error: " + error + "]");
            res.status(500).json({message: error})
        })    

};

exports.getAllMoviesByGenre = function (req, res) {
    console.log("[Genre Controller][getAllMoviesByGenre][START]");
    const id = parseInt(req.params.id);
    let page = parseInt(req.query.page);
    let totalPages = 0;
    const itemsPerPage = 10;

    if (!page) {
        page = 1;
    }
    console.log("[Genre Controller][getAllMoviesByGenre][page: " + page + "]");
  
    db.from('tbl_movies')
        .select('id', 'title', 'year', 'poster', 'plot', 'genre_id')
        .where('genre_id', '=', id)
        .orderBy('year')
        .then(items => {
            if(items.length) {
                totalPages = Math.floor(items.length / itemsPerPage);
                if (items.length % itemsPerPage) {
                    totalPages++;
                }
                items = items.slice(page * itemsPerPage - itemsPerPage, page * 10);
                res.json({
                    dataExists: true,
                    page: page,
                    itemsPerPage: itemsPerPage,
                    totalPages: totalPages,
                    items: items
                });
            } else {
                res.json({dataExists: 'false'});
            }
        })
        .catch(error => {
            console.log("[Genre Controller][getAllMoviesByGenre][Error: " + error + "]");
            res.status(500).json({message: error})
        })    
  
};

exports.createMovieByGenre = function (req, res) {
    console.log("[Genre Controller][createMovieByGenre][START]");
    const { title, year, poster, plot, genre_id } = req.body
    const new_movie = {
        "title": title,
        "year": year,
        "poster": poster,
        "plot": plot,
        "genre_id": genre_id
    }

    console.log("[Genre Controller][createMovieByGenre][title: " + title + "]");
    console.log("[Genre Controller][createMovieByGenre][year: " + year + "]");
    console.log("[Genre Controller][createMovieByGenre][poster: " + poster + "]");
    console.log("[Genre Controller][createMovieByGenre][plot: " + plot + "]");
    console.log("[Genre Controller][createMovieByGenre][genre_id: " + genre_id + "]");

    db('tbl_movies').insert(new_movie).returning('id').
      then((id) => {
        console.log("[Genre Controller][createMovieByGenre][Movie Created Successfully withd id: " + id[0] + "]");
        new_movie['id'] = id[0];
        res.send(new_movie)
      })
      .catch(error => { 
        console.log("[Genre Controller][createMovieByGenre][Error: " + error.message + "]");
        res.status(500).json({message: error.message})
      })

};
