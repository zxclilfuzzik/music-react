'use strict'

const response = require('../response');
const db = require('../settings/db');

exports.users = (req, res) => {

    db.query('SELECT * FROM `users` WHERE 1', (err, result, fields) => {
        if(error) {
            console.log(err);
        } else {
            response.status(result, fields);
        }
    })

    response.status(users, res);
}