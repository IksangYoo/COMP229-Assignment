let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our bscontact Model
let Bscontact = require('../models/bscontact');

/* Get Route for the Business contact list page*/
router.get('/', (req, res, next) => {
    Bscontact.find((err, bsContactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {   
            //console.log(BsContactList);

            res.render('bscontact',{title: 'Business Contact', BsContactList: bsContactList})
        }
    });
});

module.exports = router;