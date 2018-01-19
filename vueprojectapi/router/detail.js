
module.exports = {
	register:function(_app){
		_app.get('/getHotelRoom',function(req,res){
			console.log(req.query);

		})
	}
}