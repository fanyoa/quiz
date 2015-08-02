var models = require('../models/models.js');

exports.show = function(req,res){
	//models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('quizes/show',{quiz:req.quiz});
	//});

};


/*exports.show = function(req, res) {
  res.render('quizes/show', { quiz: req.quiz, errors: []});
}; */   

exports.load = function(req, res, next, quizId) {
  models.Quiz.find(quizId).then(function(quiz) {
      if (quiz) {
        req.quiz = quiz;
        next();
      } else{
			next(new Error('No existe quizId=' + quizId))
		}}
    ).catch(function(error){next(error)});
};

exports.answer = function(req,res){
	var result = "Incorrecto";
	//models.Quiz.find(req.params.quizId).then(function(quiz){

		if (req.query.respuesta == req.quiz.respuesta){
			result = "Correcto";
		}
		res.render('quizes/answer',{quiz:req.quiz,respuesta:result});
	
	//});

};

exports.index = function(req,res){
	if(req.query.search) {
		var search = '%' + (req.query.search).replace(/ /g,'%') + '%';
		models.Quiz.findAll({where:["pregunta like ?",search],order:'pregunta ASC'}).then(function(quizes){
		res.render('quizes/index', {quizes: quizes});
		}).catch(function(error) { next(error);});

	} else {

		models.Quiz.findAll().then(function(quizes){
			res.render('quizes/index', {quizes: quizes});
		}).catch(function(error) { next(error);});
		
	}

};
exports.author = function(req,res){
	res.render('author');
}
exports.new = function(req,res){
	var quiz = models.Quiz.build({pregunta:'Pregunta',respuesta:'respuesta'});
	res.render('quizes/new',{quiz:quiz});

};
exports.create = function(req,res){
	var quiz = models.Quiz.build(req.body.quiz);
	quiz.save({fields:["pregunta","respuesta"]}).then(function(){
		res.redirect('/quizes');
	});
};