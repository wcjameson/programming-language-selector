$(document).ready(function() {
  $("button#submit-form").click(function(event) {
    event.preventDefault();
    let userSelection1 = $("input:radio[name=answer1Radio]:checked").val();
    console.log(userSelection1);
    let userSelection2 = $("input:radio[name=answer2Radio]:checked").val();
    console.log(userSelection2);
    let userSelection3 = $("input:radio[name=answer3Radio]:checked").val();
    console.log(userSelection3);
    let userSelection4 = $("input:radio[name=answer4Radio]:checked").val();
    console.log(userSelection4);
    let userSelection5 = $("input:radio[name=answer5Radio]:checked").val();
    console.log(userSelection5);
      
    if(userSelection1 === "option1" && userSelection2 === "option2" && userSelection3 != "option2") {
      $(".answer").hide();
      $("#answer-python").show();
    } else if(userSelection3 === "option2" && userSelection4 === "option2" && userSelection5 != "option1") {
      $(".answer").hide();
      $("#answer-go").show();
    } else {
      $(".answer").hide();
      $("#answer-javascript").show();
    }
     
  });
});