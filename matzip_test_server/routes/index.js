var Board = require("../models/board")

module.exports = function(app)
{
  app.get('/api/boards', function(req,res){
		Board.find(function(err,boards){
		if(err) return res.status(500).send({error: "database failure"});
		res.json(boards);
		})				  
  });

	app.get('/api/boards/:board_id',function(req,res){
		Board.findOne({_id: req.params.board_id},function(err, board){
		if(err) return res.status(500).json({error: err});
		if(!post) return res.status(404).json({error: "board not found"});
		res.json(board);
		})
	});

	app.get('/api/boards/menu/:menu',function(req,res){
		Post.find({menu: req.param.menu}, {_id: 0, menu: 1, person: 1, time: 1, published_data: 1},function(err,boards){
			if(err) return res.status(500).json({error:err});
			if(boards.length === 0) return res.status(404).jsson({error: "board not found"});
			res.json(boards);
		})
	});

	app.post('/api/boards',function(req,res){
		var board = new Board();
		board.menu = req.body.menu;
		board.time = req.body.time;
		board.person = req.body.person;
		board.date = req.body.date;
		board.month = req.body.month;
		board.enterPerson = req.body.enterPerson;

		board.save(function(err){
			if(err){
				console.error(err);
				res.json({result: 0});
				return;
			}
		res.json({result: 1});
		});
	});

	app.put('/api/boards/:board_id',function(req,res){
		Board.update({_id: req.params.board_id}, {$set: req.body}, function(err,output){
			if(err) return res.status(500).json({error: "database failure"});
			console.log(output);

			if(!output.n) return res.status(404).json({error: "board not found"});
			
			res.json({message: "board updated"});
		})
	});

	app.delete('/api/boards/:board_id', function(req,res){
		Board.remove({_id: req.params.board_id}, function(err, output){
			if(err) return res.status(500).json({error: "database failure"});
			res.json({message: "board deleted"});

			res.status(204).end;
		})
	});
}
