let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Bscontact = require('../models/bscontact');

module.exports.displayBsContactList = (req, res, next) => {
    Bscontact.find((err, bsContactList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {   
            //console.log(BsContactList);

            res.render('bscontact/list', {title: 'BsContact', BsContactList: bsContactList});
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('bscontact/add', {title: 'Add BsContact'})
};

module.exports.processAddPage =  (req, res, next) => {
    let newBsContact = Bscontact({
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Bscontact.create(newBsContact, (err, Bscontact) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business contact lis
            res.redirect('/bscontact-list');
        }
    });
};

module.exports.displayEditPage =  (req, res, next) => {
    let id = req.params.id;

    Bscontact.findById(id, (err, bscontactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('bscontact/edit', {title: 'Edit BsContact', bscontact: bscontactToEdit})
        }
    });
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedBsContact = Bscontact({
        "_id": id,
        "name": req.body.name,
        "number": req.body.number,
        "email": req.body.email
    });

    Bscontact.updateOne({_id: id}, updatedBsContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business contact list
            res.redirect('/bscontact-list');
        }
    });
};

module.exports.performDeletePage =(req, res, next) => {
    let id = req.params.id;

    Bscontact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business contact list
            res.redirect('/bscontact-list');
        }
    });
};