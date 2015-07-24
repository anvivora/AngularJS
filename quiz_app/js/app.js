var module = angular.module('quizApp', []);
 
module.directive('quiz', function(quizFactory) {
  return {
    restrict: 'AE', //matches attribute & element name
    scope: {},
    templateUrl: 'template.html',
    link: function(scope, elem, attrs) {
      scope.start = function() {
        //start data
        scope.id = 0;
        scope.quizOver = false;
        scope.inProgress = true;
        scope.getQuestion();
        scope.score = 0;
      };

      scope.reset = function() {
        scope.inProgress = false;
        scope.score = 0;
      };

      scope.getQuestion = function() {
        //load question to scope form Factory
        var q = quizFactory.getQuestion(scope.id);
        if(q) {
          scope.question = q.question;
          scope.options = q.options;
          scope.answer = q.answer;
          scope.pic = q.pic;
          scope.answerMode = true;
        } else {
          scope.quizOver = true;
        }
        return 0;
      };
 
      scope.checkAnswer = function() {
        //match question and answer is correct or not
        if(!$('input[name=answer]:checked').length) return;
 
        var ans = $('input[name=answer]:checked').val();
        if(ans == scope.options[scope.answer]) {
          scope.score++;
          scope.correctAns = true; //check answer - return true
        } else {
          scope.correctAns = false; //check answer - return false
        }
 
        scope.answerMode = false;
      };
      
      scope.showScore = function() {
        if(scope.score == 0) {
          return 0;
        } else {
          return scope.score;  
        }
      }
      //add - change question
      scope.nextQuestion = function() {
        scope.id++;
        scope.getQuestion();
      }
 
      scope.reset();
    }
  }
});

//get data from JSON file
module.factory('quizFactory',function($http) {

  var getMainData = $http.get('http://localhost.frontend/tu/quiz_app/data/quiz.json').success(function(response) {
    return response.data;
  });

  var questions = {}; // define question object

  questions.getMainData = function() { // define method on factory object
    return getMainData; // returning data that was pulled in $http call
  };
  

  // var questions = [
  //   {
  //     question: "What does HTML stand for?",
  //     pic: ["img/html5.png","120","120","HTML5"],
  //     options: ["H1","H2","H3","Hypertext Markup Language"],
  //     answer: 3
  //   },
  //   {
  //     question: "Who is president of USA now?",
  //     pic: ["img/usa.jpg","120","120","USA"],
  //     options: ["Barrack Obama","Geogre Bush","Putin","Bill Clinton"],
  //     answer: 0
  //   },
  //   {
  //     question: "What name of Manchester United's stadium",
  //     pic: ["img/manu.jpg","120","120","HTML5"],
  //     options: ["Old Trafford","Wembley","White Hart Lane","Stamford Bridge"],
  //     answer: 0
  //   }
  // ];
  return {
    getQuestion: function(id) {
      //return questions;
      console.log(questions);
      return questions;
      // if(id < questions.length) {
      //   return questions[id];
      // } else {
      //   return false;
      // }
    }
  }
  

});

// module.factory('quizFactory',function() {
//   var questions = [
//     {
//       question: "What does HTML stand for?",
//       pic: ["img/html5.png","120","120","HTML5"],
//       options: ["H1","H2","H3","Hypertext Markup Language"],
//       answer: 3
//     },
//     {
//       question: "Who is president of USA now?",
//       pic: ["img/usa.jpg","120","120","USA"],
//       options: ["Barrack Obama","Geogre Bush","Putin","Bill Clinton"],
//       answer: 0
//     },
//     {
//       question: "What name of Manchester United's stadium",
//       pic: ["img/manu.jpg","120","120","HTML5"],
//       options: ["Old Trafford","Wembley","White Hart Lane","Stamford Bridge"],
//       answer: 0
//     }
//   ];

//   return {
//     getQuestion: function(id) {
//       if(id < questions.length) {
//         return questions[id];
//       } else {
//         return false;
//       }
//     }
//   }
// });

