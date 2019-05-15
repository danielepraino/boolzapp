//richiamo la data da visualizzare nei messaggi
var now = new Date();
var time = now.getHours() + ":" + now.getMinutes();

//al click dell'icona invio il messaggio
$(".send-button").click(function(){
  newUserMessage();
});

//all'invio da tastiera mando il messaggio, altrimenti se inizio a scrivere
//cambia l'icona da mic ad aeroplano
$(".input-message").keypress(function(event) {
  if(event.which == 13) {
    newUserMessage();
  } else {
    $(".send-button i").addClass("fa-paper-plane");
  }
});

//se clicco fuori dal campo messaggi cambia l'icona da aeroplano a mic
$(".input-message").focusout(function(){
  $(".send-button i").removeClass("fa-paper-plane");
});

//creo una funzione che genera un nuovo messaggio utente (in verde)
//creo un interval che dopo 1 secondo invia un messaggio automatico
function newUserMessage() {
  var newTextMsg = $(".input-message").val();
  if (newTextMsg.length > 0) {
    templateMsg = $(".template-message .new-message").clone();
    templateMsg.children(".text-message").text(newTextMsg);
    templateMsg.children(".info-message").children(".time-message").text(time);
    templateMsg.addClass("usermsg");
    $(".main-chat").append(templateMsg);
    $(".input-message").val("");
    setTimeout(newFriendMessage, 1000);
  }
}

//creo una funzione che genera un nuovo messaggio amici (in bianco)
function newFriendMessage() {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.children(".text-message").text("Ok!");
  templateMsg.children(".info-message").children(".time-message").text(time);
  templateMsg.children(".info-message").children("i").hide();
  templateMsg.addClass("friendmsg");
  $(".main-chat").append(templateMsg);
}

var countUp = 0;

$(".chat-search").keyup(function(event) {
  var search = $(".chat-search").val().split("");
  console.log(search);
  if (search.length > 0) {
    $(".friend").each(function(){
      searchFriend = $(this).attr("data-friend-name").split("");
      if(searchFriend[countUp] == search) {
        var friendJoined = searchFriend.join("");
        console.log(friendJoined);
        $(".friend").removeClass("selected").hide();
        $(this).addClass("selected").show();
      }
    });
  }
  if (event.which == 8) {
    countUp--;
    $(".user-friends").first().addClass("selected");
    $(".friend").show();
  }
});
