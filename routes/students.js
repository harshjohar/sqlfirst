const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/all', (req, res)=> {
    db.connection.query('SELECT * FROM STUDENTS', function(error, results, fields) {
        if(error) {
            throw error;
        }
        console.log(results) 
        res.send(results)
    })
})

module.exports = router;