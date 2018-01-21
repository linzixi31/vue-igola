var db = require('../db/db')

module.exports = {
    register: function(app){
        app.get('/order', function(req, res){
            //查询语句坑人 表名要加 ``
            
            var sql ='select * from `order`,`hotel` where order.hotelId = hotel.Id';
            //连表查询order 和 hotel
            db.select(sql, function(data){
                console.log(data)
                res.send(data);
            })
        })
    }
}