var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config()
const apiKey = process.env.API_KEY

const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
}

router.get('/:title/:year', function(req, res, next) {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${req.params.title}/&include_adult=false&language=en-US&page=1&year=${req.params.year}`, { headers })
    .then((response) => {
        res.send(response.data)
    })
    .catch((error) => {
        console.error(error)
    })
});

module.exports = router;

