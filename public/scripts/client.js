/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const error = $("#error");
  error.hide();
  const newTweetForm = $("#new-tweet-form");
  
  newTweetForm.on("submit", function(event) {
    event.preventDefault();
    console.log("inside tweet form");
    const MAX_TWEET_LENGTH = 140;
    const textLength = $("#tweet-text").val().length;
    if (textLength > MAX_TWEET_LENGTH) {
      console.log("max", MAX_TWEET_LENGTH);
      error.show();
    }
  })
  //console.log(newTweetForm);
  //console.log(error);
});

