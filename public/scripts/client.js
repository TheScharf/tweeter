/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {
  const error = $("#error");
  error.hide();
  const newTweetForm = $("#new-tweet-form");

  $.ajax({
    type: 'GET',
    url: '/tweets',
  })
  .then(function(data) {
    renderTweets(data);
  })
  .catch(function(error) {
    colsole.log("ERROR", error)
  })
  
  newTweetForm.on("submit", function(event) {
    event.preventDefault();
    const serializedForm = $(this).serialize();
    const MAX_TWEET_LENGTH = 140;
    const textLength = $("#tweet-text").val().length;
    if (textLength > MAX_TWEET_LENGTH) {
      return $("#error").slideDown("slow").html('Exceeded number of characters');
    }
    if (!textLength) {
      return $("#error").slideDown("slow").html('Please enter a tweet before submitting');     
    }
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: serializedForm
      })
      .then(function(data) {
        error.hide();
        loadTweets();
      });
      $("#tweet-text").val("");
      $(".counter").html("140");
      // .catch(function(error) {

      //   //console.log("ERROR", error);
      // })

 

  })



  const createTweetElement = function(tweetObj) {
    const timeSince = timeago.format(tweetObj.created_at);
    const textFromUser = tweetObj.content.text;
    const safeHTML = `<p>${escape(textFromUser)}</p>`;
    const $markup = `
    <article id="the-tweets" class="tweets-container">
            <div class="article-header">
              <span>
                <img src= ${tweetObj.user.avatars}>
                ${tweetObj.user.name}
              </span>
              <span>${tweetObj.user.handle}</span>
            </div>
            <span class="tweet_body">
             ${safeHTML}
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

  const renderTweets = function (tweets) {
    const container = $("#tweets").empty();
    for (const tweet of tweets) {
      let element = createTweetElement(tweet);
      container.prepend(element);
      
    }
    
  };

  const loadTweets = function() {
    $.ajax({
      type: 'GET',
      url: '/tweets',
    })
    .then(function(data) {
      renderTweets(data);
    })
    .catch(function(error) {
      colsole.log("ERROR", error)
    })
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  renderTweets(data);

  const $tweet = createTweetElement(data);

  console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
  //console.log(newTweetForm);
  //console.log(error);
});
