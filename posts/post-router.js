const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {
   
});

router.post('/', (req, res) => {
    // insert into () values ()
    const postData = req.body;

    knex('posts')
        .insert(postData, "id")
        .then(ids => {
            const id = ids [0]

            res.status(200).json(id)
        })
    
        .catch(error => {
            console.log(error)
            res.status(500).json({
                errorMessage: "error getting the post"
            })
        })
});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;