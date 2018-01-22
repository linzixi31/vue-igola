var db = require('../db/db')

module.exports = {
    register: function(app){
        app.get('/login', function(req, res){
        	console.log(res)
            var sql = `SELECT * FROM user`;
            db.select(sql, function(data){
            	   console.log(data)
            	   res.send(data);
            	
                
                
            })
        })
    }
}