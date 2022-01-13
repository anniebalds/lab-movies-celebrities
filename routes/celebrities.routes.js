// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");


// all your routes here

//list
router.get('/celebrities', async (req, res, next) => {
    try {const celebrities = await Celebrity.find()
    res.render('celebrities/celebrities', //.hbs
    {celebrities}
    )} catch (err) {
        next(err)
    }
})

//list more details
router.get('/celebrities/:id', async (req, res, next) => {
    try {
    const celebrity = await Celebrity.findById(req.params.id);
    res.render('celebrities/celebrity-details',{
        celebrity
    });
} catch (err) {
    next(err)
  } 
});

//create
router.get('/celebrities/create', async (req, res, next) => {
    res.render('celebrities/new-celebrity') //.hbs
});

router.post('/celebrities/create', async (req, res, next) => {
    try {
        await Celebrity.create(req.body);
        res.redirect('/celebrities')
    } catch (err){
        res.render('celebrities/new-celebrity')
    }
})

//delete
router.post('/celebrities/:id/delete', async (req, res, next) => {
    try {
        await Celebrity.findByIdAndDelete(req.params.id);
        res.redirect('/celebrities')
    } catch (err) {
        next(err)
    }
})


module.exports = router;