let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to our bscontact Model
let Bscontact = require('../models/bscontact');

let bscontactController = require('../controllers/bscontact');

/* Get Route for the Business contact list page - READ Operation */
router.get('/', bscontactController.displayBsContactList);


/* GET Route for displaying Add page - CREATE Opreation */
router.get('/add', bscontactController.displayAddPage);

/* POST Route for processing Add page - CREATE Opreation */
router.post('/add', bscontactController.processAddPage);

/* GET Route for displaying Edit page - UPDATE Opreation */
router.get('/edit/:id', bscontactController.displayEditPage);

/* POST Route for processing Edit page - UPDATE Opreation */
router.post('/edit/:id', bscontactController.processEditPage);


/* GET to perform Deletion - DELETE Opreation */
router.get('/delete/:id', bscontactController.performDeletePage);

module.exports = router;