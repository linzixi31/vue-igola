var db = require('../db/db');

module.exports = {
    select:function(app){
        app.get('/listPage',function(request,response){
            db.select('select * from hotel',function(data){
                if(data.status){
                    response.send(data);
                }else{
                    response.send(data);
                }
            })
        }),
        app.get('/upDataList',function(request,response){
        	var condition = request.query;
        	console.log(request.query);
        	var stars = request.query.stars;
        	var price = request.query.price;
        	var sql;
        	if(stars == 'all' || !stars){
        		sql = `select * from hotel where minPrice>${price}`;
        	}else{
        		sql = `select * from hotel where stars = ${stars} and minPrice>${price}`;
        	}
        	db.select(sql,function(data){
        		console.log(data);
        		if(data.status){
                    response.send(data);
                }else{
                    response.send(data);
                }
        	})
        }),
        app.get('/sort',function(request,response){
        	var value = request.query.order;
        	var sql = '';
        	if(value == 'priceUp'){
        		sql = `select * from hotel order by minPrice asc`;
        	}else if(value == 'priceDown'){
        		sql = `select * from hotel order by minPrice desc`;
        	}else if(value == 'score'){
        		sql = `select * from hotel order by score asc`;
        	}else if(value == 'starDown'){
        		sql = `select * from hotel order by stars desc`;
        	}else{
        		sql = `select * from hotel order by stars asc`;
        	}
        	
        	db.select(sql,function(data){
        		console.log(data);
        		if(data.status){
                    response.send(data);
                }else{
                    response.send(data);
                }
        	})
        }),
        app.get('/shaixuan',function(request,response){
        	var sql = '';
        	var score = request.query.score;
        	var equ = request.query.equipment;
        	if(!score){
        		score = 'all';
        	};
        	if(!equ){
        		equ == 'all';
        	};
        	if((score == 'all') && (equ == 'all')){
        		sql = `select * from hotel`
        	}else if(score == 'all' && (equ != 'all')){
        		sql = `select * from hotel where ${equ} = 1`
        	}else if(score != 'all' && (equ == 'all')){
        		sql = `select * from hotel where score > ${score}`
        	}else{
        		sql = `select * from hotel where score > ${score} and ${equ} = 1`
        	}
        	console.log(sql);
        	db.select(sql,function(data){
        		console.log(data);
        		if(data.status){
                    response.send(data);
                }else{
                    response.send(data);
                }
        	})
        }),
        app.get('/publicSearch',function(request,response){
        	var data = request.query.data;
        	console.log(data);
        	var sql = `select * from hotel where hotelName like '%${data}%'`
        	db.select(sql,function(res){
        		console.log(res);
        		if(res.status){
        			response.send(res);
        		}else{
        			response.send(res);
        		}
        	})
        })
    }
}