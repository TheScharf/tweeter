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


  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }

  const createTweetElement = function(tweetObj) {
    const timeSince = timeago.format(tweetObj.created_at)
    const $markup = `
    <article id="the-tweets" class="tweets-container">
            <div class="article-header">
              <span>
                <i class="fa-solid fa-bug"></i>
                ${tweetObj.user.name}
              </span>
              <span>${tweetObj.user.handle}</span>
            </div>
            <span class="tweet_body">
             ${tweetObj.content.text}
            </span>
            <hr class="footer_break"/>
            <footer class="article-footer">
              <span>${timeSince}</span>
              <span class="icons">
                <i class="fa-solid fa-font-awesome"></i>
                <i class="fa-solid fa-retweet"></i>
                <i class="fa-solid fa-heart"></i>
              </span>
            </footer>
        </article>
        `;
        return $markup;
  };

  const $tweet = createTweetElement(tweetData);

  console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
  //console.log(newTweetForm);
  //console.log(error);
});
