var express = require('express');
var router = express.Router();
var burger = require('../models/burger');
router.get("/", function(req,res){
    burger.all(function(data){
        var burgerArray = {
            burgers:data
        }
        console.log(burgerArray);
        res.render("index",burgerArray);
    });
})
router.post('/api/burgers', function(req,res){
    burger.add(req.body.name, function(result){
        res.json({id:res.insertedId});
    });
});
router.put('/api/burgers/:id', function(req,res){
    var id = req.params.id;
    burger.devour(id, function(result){
        if (result.changedRows == 0) {
            return res.status(404).end();
          } else {
            res.status(200).end();
          };
    });
});
module.exports=router;