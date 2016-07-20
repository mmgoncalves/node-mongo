var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');

// find all
router.get('/', function(req, res){
    Person.find({}, function(err, people){
        if(err){
            return;
        }

        res.send(people);
    });
});

//findOne
router.get('/:id', function(req, res){
    Person.findOne({
        _id: req.params.id
    }, function(err, person){
        if(err)
            return;

        res.send(person);
    })
});

router.post('/', function(req, res){
    var arr = [{
        name: {
            firstname: "Alvim 1",
            lastname: "Brand 1"
        },
        age: 24
    }, {
        name: {
            firstname: "Alvim 2",
            lastname: "Brand 2"
        },
        age: 25
    }, {
        name: {
            firstname: "Alvim 3",
            lastname: "Brand 3"
        },
        age: 26
    }];
    
    Person.insertMany(arr, function (err, person) {
        if(err){
            return;
        }

        res.send(person);
    });

    /*
    var  person = new Person({
        name: {
            firstname: "Alvim",
            lastname: "Brand"
        },
        age: 24
    });

    person.save(person, function(err, person){
        if(err){
            return;
        }

        res.send(person);
    });
    */


    /*
    Person.create({
        name: {
            firstname: 'Mateus',
            lastname: 'Goncalves'
        },
        age: 23
    }, function(err, person){
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

router.put('/:id', function(req, res){
    Person.findOneAndUpdate({
        _id: req.params.id
    }, {
        name: {
            firstname: 'Mateus 3',
            lastname: 'Goncalves 3'
        }
    }, function(err, person){
        if(err){
            return;
        }

        res.send(person);
    });

    /*
    Person.update({
         _id: req.params.id
    }, {
        name: {
            firstname: 'Mateus 1',
            lastname: 'Goncalves 2'
        }
    }, function(err, person){
        if(err){
            return;
        }

        res.send(person);
    });
    */

});
module.exports = router;