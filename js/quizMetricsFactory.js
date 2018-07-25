angular.module("quizApp").factory("quizMetrics", quizMetrics);

function quizMetrics(DataService){
  var quizObj = {
    quizActive : false,
    resultsActive: false,
    changeState : changeState,
    markQuiz: markQuiz,
    correctAnswers:[],
    numCorrect:0
  };

  return quizObj;

  function changeState(metrics, state){
    if(metrics === "quiz"){
    quizObj.quizActive = state;
  }
  else if(metrics === "results"){
    quizObj.resultsActive = state;
  }
  else{
    return false;
  }
  }

  function markQuiz(){
    quizObj.correctAnswers = DataService.correctAnswers;

    for(var i = 0; i < DataService.quizQuestions.length; i++){
      if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
        quizObj.numCorrect++;
        DataService.quizQuestions[i].correct = true;
      }
      else{
        DataService.quizQuestions[i].correct = false;
      }
    }

  };
}
