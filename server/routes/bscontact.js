let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let bscontactController = require('../controllers/bscontact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');    
    }
    next();
}

/* Get Route for the Business contact list page - READ Operation */
router.get('/', bscontactController.displayBsContactList);

/* GET Route for displaying Add page - CREATE Opreation */
router.get('/add', requireAuth, bscontactController.displayAddPage);

/* POST Route for processing Add page - CREATE Opreation */
router.post('/add', requireAuth, bscontactController.processAddPage);

/* GET Route for displaying Edit page - UPDATE Opreation */
router.get('/edit/:id', requireAuth, bscontactController.displayEditPage);

/* POST Route for processing Edit page - UPDATE Opreation */
router.post('/edit/:id', requireAuth, bscontactController.processEditPage);

/* GET to perform Deletion - DELETE Opreation */
router.get('/delete/:id', requireAuth, bscontactController.performDeletePage);

module.exports = router;