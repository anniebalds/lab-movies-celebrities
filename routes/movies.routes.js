// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const mongoose = require('mongoose');
const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");


// all your routes here

//list
router.get('/movies', async (req, res, next) => {
    try {const movies = await Movie.find()
    res.render('movies/movies',
    {movies}
    )} catch (err) {
        next(err)
    }
})


//create
router.get('/movies/create', async (req, res, next) => {
    try {
        const celebrities = await Celebrity.find();
        res.render('movies/new-movie', {
            celebrities,
        });
    } catch (err) {
        next(err);
      }
});

router.post('/movies/create', async (req, res, next) => {
    try {
        await Movie.create(req.body);
        res.redirect('/movies')
    } catch (err){
        res.render('movies/new-movie') //.hbs
    }
})


//list movie details
router.get('/movies/:id', async (req, res, next) => {
    try {
    const movie = await Movie.findById(req.params.id).populate('cast');
    res.render('movies/movie-details',{
        movie
    });
} catch (err) {
    next(err)
  } 
});


// //edit movie
router.get('/movies/:id/edit', async (req, res, next) => {
    try {
        const movieToEdit = await Movie.findById(req.params.id);
        const celebrities = await Celebrity.find();
        res.render('movies/edit-movie',{
            movieToEdit, celebrities,
        });
    } catch(err) {
        next(err)
    }
    });

router.post('/movies/:id/edit', async (req, res, next) => {
    try {
        await Movie.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/movies')
    } catch (err) {
        next(err)
    }
});


//delete movie
router.post('/movies/:id/delete', async (req, res, next) => {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.redirect('/movies')
} catch (err) {
    next(err)
  } 
})

module.exports = router;