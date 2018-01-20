var db = require('../db/db')

module.exports = {
    reg: function(app){
        app.get('/register',function(req, res){
            var data=req.querry;
          console.log(data)
            var sql = `INSERT INTO user (telephone,password) VALUES (${data.telephone},${data.password})`;
            db.select(sql,function(error,result){
                if(error){
                    console.log(error)
                }else{
                    console.log(result);
                }
            })
        })
    }
}