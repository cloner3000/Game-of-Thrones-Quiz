angular.module("quizApp")
.factory("DataService",DataService);


function DataService(){
  var dataObj = {
    quizQuestions: quizQuestions,
    correctAnswers:correctAnswers

  };

  return dataObj;

}

var correctAnswers = [0, 1, 2, 3, 1, 3, 0, 2, 1, 0];

  var quizQuestions  = [
         {
             type: "text",
             text: "How many victories does Robb win before offering peace to the Lannisters in exchange for Sansa’s return?",
             possibilities: [
                 {
                     answer: "Three"
                 },
                 {
                     answer: "Four"
                 },
                 {
                     answer: "Two"
                 },
                 {
                     answer: "One"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "what is the surname given to bastards born in Dorne?",
             possibilities: [
                 {
                     answer: "Rivers"
                 },
                 {
                     answer: "Sand"
                 },
                 {
                     answer: "Waters"
                 },
                 {
                     answer: "Snow"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "In the first episode of season 1, who accidentally discovers Queen Cersei's secret?",
             possibilities: [
                 {
                     answer: "Arya Stark"
                 },
                 {
                     answer: "Jon Snow"
                 },
                 {
                     answer: "Bran Stark"
                 },
                 {
                     answer: "Joffrey Baratheon"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "Who is the first character to say the phrase 'Game of Thrones'?",
             possibilities: [
                 {
                     answer: "Tywin Lannister"
                 },
                 {
                     answer: "Tyrion Lannister"
                 },
                 {
                     answer: "Jamie Lannister"
                 },
                 {
                     answer: "Cersei Lannister"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "Who is NOT on Arya Stark's list?",
             possibilities: [
                 {
                     answer: "Ilyn Payne"
                 },
                 {
                     answer: "Varys"
                 },
                 {
                     answer: "Cersei Lannister"
                 },
                 {
                     answer: "Joffrey Baratheon"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "Who says, 'You are no son of mine'?",
             possibilities: [
                 {
                     answer: "Ned Stark"
                 },
                 {
                     answer: "Balon Greyjoy"
                 },
                 {
                     answer: "Robert Baratheon"
                 },
                 {
                     answer: "Tywin Lannister"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "What's the name of the explosive that gave the Lannisters the edge in the Battle of Blackwater?",
             possibilities: [
                 {
                     answer: "Wildfire"
                 },
                 {
                     answer: "Godsfire"
                 },
                 {
                     answer: "Ragefire"
                 },
                 {
                     answer: "Dragonfire"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "Which of the following is NOT a family in Game of Thrones?",
             possibilities: [
                 {
                     answer: "Arryn"
                 },
                 {
                     answer: "Tyrell"
                 },
                 {
                     answer: "Mortensen"
                 },
                 {
                     answer: "Greyjoy"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "Who is known as the kingslayer?",
             possibilities: [
                 {
                     answer: "Sandor Cleagan"
                 },
                 {
                     answer: "Jamie Lannister"
                 },
                 {
                     answer: "Joffrey Baratheon"
                 },
                 {
                     answer: "Eddard Stark"
                 }
             ],
             selected: null,
             correct: null
         },
         {
             type: "text",
             text: "What does Tyrion murder his father with?",
             possibilities: [
                 {
                     answer: "Crossbow"
                 },
                 {
                     answer: "Sword"
                 },
                 {
                     answer: "Mace"
                 },
                 {
                     answer: "Poison"
                 }
             ],
             selected: null,
             correct: null
         }
     ];
