var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});

var data = [{item:'gym'},{item:'class'},{item:'code'}];

module.exports = function(app){

  app.get('/todo',function(req,res){
      res.render('todo',{todos:data});
  });

  app.post('/todo',urlencodedParser,function(req,res){
      var task = {item:req.body.item};
      data.push(task);
      res.json(data);
  });

  app.delete('/todo/:item',function(req,res){

  });

}
