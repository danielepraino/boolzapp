
var now = new Date();
var time = now.getHours() + ":" + now.getMinutes();

$(".send-button").click(function(){
  var newTextMsg = $(".input-message").val();
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.children(".text-message").text(newTextMsg);
  templateMsg.children(".info-message").children(".time-message").text(time);
  templateMsg.addClass("usermsg");
  $(".main-chat").append(templateMsg);
  $(".input-message").val("");
  autoRespond = setInterval(newFriendMessage, 1000);
});

function newFriendMessage() {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.children(".text-message").text("Ok!");
  templateMsg.children(".info-message").children(".time-message").text(time);
  templateMsg.children(".info-message").children("i").hide();
  templateMsg.addClass("friendmsg");
  $(".main-chat").append(templateMsg);
  stopAutoRespond();
}

function stopAutoRespond(){
  clearInterval(autoRespond);
}
