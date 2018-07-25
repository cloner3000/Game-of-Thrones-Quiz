 angular.module('quizApp').controller("MainController", MainController);

//MainController.$inject = ['DataService'];
function MainController(DataService, quizMetrics){
    var vm = this;
    vm.heading = "Game of Thrones Quiz";
    vm.paragraph = "This quiz is based on the book and the tv series";
    vm.DataService = DataService;
    vm.quizMetrics = quizMetrics;
    vm.activateQuiz = activateQuiz;

    function activateQuiz(){
      quizMetrics.changeState("quiz",true);
    }




}
