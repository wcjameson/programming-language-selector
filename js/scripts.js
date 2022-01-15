$(document).ready(function() {
  $("button#submit-form").click(function(event) {
    event.preventDefault();
    let userSelection1 = $("input:radio[name=answer1Radio]:checked").val();
    let userSelection2 = $("input:radio[name=answer2Radio]:checked").val();
    let userSelection3 = $("input:radio[name=answer3Radio]:checked").val();
    let userSelection4 = $("input:radio[name=answer4Radio]:checked").val();
    let userSelection5 = $("input:radio[name=answer5Radio]:checked").val();
      
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
    $("#retry-button").click(function() {
      location.reload(true);
  });
});