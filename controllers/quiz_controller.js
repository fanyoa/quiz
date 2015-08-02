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
	models.Quiz.findAll().then(function(quizes){
		res.render('quizes/index.ejs',{quizes:quizes});
	}).catch(function(error){next(error);})
};
exports.author = function(req,res){
	res.render('author');
}