var orm = require('../config/orm');
var burger = {
    all: function(cb){
        orm.all(function(res){
            cb(res);
        })
    },
    add:function(name,cb){
        orm.add(name,function(res){
            cb(res);
        })
    },
    devour:function(id,cb){
        orm.devour(id,function(res){
            cb(res);
        })
    }
};
module.exports=burger;