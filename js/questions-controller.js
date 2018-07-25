angular.module('quizApp').controller("QuestionsController",QuestionsController);



function QuestionsController(DataService, quizMetrics){
    var vm = this;
    vm.dataService = DataService;
    vm.quizMetrics = quizMetrics;
    vm.activeQuestion = 0;
    vm.setQuestion = setQuestion;
    var numQuestionAnswered = 0;
    vm.questionAnswered = questionAnswered;
    vm.selectAnswer = selectAnswer;
    vm.check = false;
    vm.finalise = false;
    vm.finaliseAnswer = finaliseAnswer;

    function finaliseAnswer(){
      vm.activeQuestion = 0;
      numQuestionAnswered = 0;
      vm.finalise = false;
      quizMetrics.markQuiz();
      quizMetrics.changeState("quiz", false);
      quizMetrics.changeState("results", true);
    }

    function setQuestion(index){
      if(index === undefined){
      var breakOut = false;
      var quizlength = DataService.quizQuestions.length - 1;

      while(!breakOut){
      vm.activeQuestion = vm.activeQuestion < quizlength ? ++vm.activeQuestion : 0;

      if(vm.activeQuestion === 0){
        vm.check = true;
      }

      if(DataService.quizQuestions[vm.activeQuestion].selected === null){
        breakOut = true;
      }
    }
  }
    else{
      vm.activeQuestion = index;
    }


    }



    function questionAnswered(){
       var quizLength = DataService.quizQuestions.length;
      if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
        numQuestionAnswered++;

        if(numQuestionAnswered >= quizLength){
            //Finalise the quiz
            for(var i = 0 ; i < quizLength; i ++){
              if(DataService.quizQuestions[i].selected === null){
                setQuestion(i);
                return;
              }
            }
            vm.finalise = true;
            vm.error = false;
            return;
        }

      }

      vm.setQuestion();
    }

    function selectAnswer(index){
      DataService.quizQuestions[vm.activeQuestion].selected = index;
    }



};
