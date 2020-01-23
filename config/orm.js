var connection = require('./connection');
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }
  
var orm={
    all: function(cb){
        var queryString="SELECT * FROM burgers;"
        connection.query(queryString, function(err,res){
            if(err) throw err;
            cb(res)
        })
    },
    add: function(burgerName, cb){
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryString, [burgerName], function(err,res){
            if(err) throw err;
            cb(res);
        })
    },
    devour: function(burgerId, cb){
        var queryString = "UPDATE burgers";
        queryString+=" SET ";
        queryString+=objToSql({devoured:true})
        queryString+=" WHERE ";
        queryString+=("id="+burgerId);
        connection.query(queryString, function(err,res){
            console.log(queryString)
            if(err) throw err;

            cb(res)
        })
    }
};
module.exports= orm;