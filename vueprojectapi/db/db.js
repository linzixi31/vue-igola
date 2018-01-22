var mysql = require('mysql');

var  db = mysql.createPool({
    connectionLimit: 10,
    host: "10.3.136.15",
    user: 'root',
    password: '',
    database: 'db_hotel',
    multipleStatements: true
});

module.exports = {
    select: function(_sql, _callback){
        db.query(_sql, function(error, results, fields){
            if(error){
                _callback({status: false, error: error})
            } else {
                _callback({status: true, data: {results, fields}});
            }
            
        })
    },
    delete: function(){},
    update: function(){},
    getHotelRoom:function(_data,_cb){
            //获取当前id的酒店信息
            var id = _data.hotelId;
            var sql = `SELECT a.hotelName,
                                a.stars,
                                a.address,
                                a.image1,
                                b.id,
                                b.type,
                                b.znePrice,
                                b.availablePerson,
                                b.bedScale
                                FROM hotel AS a,room AS b 
                                where a.id=b.hotelId and a.id=${id}` ;
            
            db.query(sql,function(err,results,fields){
                if(err){
                        _cb({status:false,error:err});
                }else{
                            console.log(results);
                         _cb({status:true,data:{results}});
                }
            })
    },
    getRoom:function(_data,_cb){
            //获取当前房间信息
            var id = _data.roomId;
            var hotelId = _data.hotelId;

            var sql = `select a.hotelName,a.address,b.type,b.znePrice,b.bedScale from hotel AS a,room AS b where a.id=b.hotelId and a.id=${hotelId} and b.id=${id}`;
            db.query(sql,function(err,results,fields){
                if(err){
                        _cb({status:false,error:err});
                }else{
                            // console.log(results);
                         _cb({status:true,data:{results}});
                }
            })
    },
    createOrder:function(_data,_cb){
        // 生成订单
        var sql = '';
        
    }
}