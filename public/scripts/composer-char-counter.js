$(document).ready(function() {
  // --- our code goes here ---
  //console.log('Document is ready!');
  $("#tweet-text").on("input", function() {
    let textLength = $(this).val().length;
    const counter = $(".counter");
    //console.log("textLength", textLength);
    counter.text(140 - textLength);
    if (textLength > 140) {
      //counter.css("color", "red");
      counter.addClass("negative-counter");
      
      //counter.removeClass(".black").addClass(".red").slideDown(400);
      //$("#error").removeClass("error").addClass("error-show");
    } else {
      counter.removeClass("negative-counter");
      // $(".counter").removeClass(".red").addClass(".black");
      // $("#error").removeClass("error-show");
      // $("#error").addClass("error");
    }
    //console.log("made it to the end of your code");
  });
  
});