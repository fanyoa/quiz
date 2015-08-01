var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');


var sequelize = new Sequelize(null,null,null,{dialect:'sqlite',storage:'quiz.sqlite'});

// Importar definicion de la tabla Quiz
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

// exportar tablas
exports.Quiz = Quiz; 

sequelize.sync().success(function() {
    Quiz.count().success(function (count){
          if(count === 0) {   // la tabla se inicializa solo si est� vac�a
            Quiz.create( {pregunta: 'Capital de Italia',   respuesta: 'Roma'}).success(function(){console.log('Base de datos inicializada')});
          };
    });
});


