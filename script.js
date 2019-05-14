$(".send-button").click(function(){
  var newMessage = $(".input-message").val();
  $(".main-chat").append("<p class='new-message usermsg'>" + newMessage + "</p>");
  $(".main-chat").append("<p class='new-message friendmsg'>Messaggio di prova!</p>");
});
