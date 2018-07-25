angular.module("quizApp").controller("ResultsController",ResultsController);

function ResultsController(DataService,quizMetrics){
  var vm = this;
  vm.quizMetrics = quizMetrics;
  vm.dataService = DataService;
  vm.activeQuestion = 0;
  vm.getAnswerClass = getAnswerClass;
  vm.setActiveQuestion = setActiveQuestion;
  vm.calculatePercentage = calculatePercentage;
  vm.reset = reset;

  function reset(){
  	quizMetrics.changeState("results", false);
  	quizMetrics.numCorrect = 0;

  	for(var i = 0;i < DataService.quizQuestions.length ; i ++){
  		var data = DataService.quizQuestions[i];

  		data.selected = null;
  		data.correct = null;
  	}
  }

  function calculatePercentage(){

  	return (quizMetrics.numCorrect)/(DataService.quizQuestions.length) * 100
  }

  function setActiveQuestion(index){
  	vm.activeQuestion = index;
  }


  function getAnswerClass(index){
  	if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
  		return "bg-success";
  	}
  	else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
  		return "bg-danger";
  	}
  }
};
