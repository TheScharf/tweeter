$(document).ready(function() {
  console.log('Document is ready!');
  $("#tweet-text").on("input", function() {
    let textLength = $(this).val().length;
    const counter = $(".counter");
    counter.text(140 - textLength);
    if (textLength > 140) {
      counter.addClass("negative-counter");
    } else {
      counter.removeClass("negative-counter");
    }
  });  
});