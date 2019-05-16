//richiamo la data da visualizzare nei messaggi
function timeGen() {
  var now = new Date();
  var time = now.getHours() + ":" + now.getMinutes();
  return time;
}

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
    templateMsg.find(".text-message").text(newTextMsg);
    templateMsg.find(".time-message").text(timeGen());
    templateMsg.addClass("usermsg");
    $(".main-chat").append(templateMsg);
    $(".input-message").val("");
    setTimeout(newFriendMessage, 1000);
  }
}

//creo una funzione che genera un nuovo messaggio amici (in bianco)
function newFriendMessage() {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.find(".text-message").text("Ok!");
  templateMsg.find(".time-message").text(timeGen());
  templateMsg.find("i").hide();
  templateMsg.addClass("friendmsg");
  $(".main-chat").append(templateMsg);
}

//ogni volta che viene digitata una lettera da tastiera nella barra search dei contatti
//per ogni elemento friend vado a leggere il suo attributo e verifico che nel valore
//dell'attributo ci sia uno dei caratteri digitati; se cancello delle lettere mi
//mostra nuovamente la lista contatti
$(".chat-search").keyup(function(event) {
  var search = $(".chat-search").val().toLowerCase();
  $(".friend").hide();
  if (search.length > 0) {
    $(".friend").each(function(){
      searchFriend = $(this).attr("data-friend-name");
      if(searchFriend.includes(search)) {
        $(this).show();
      }
    });
  }
  if (event.which == 8) {
    $(".user-friends").first().addClass("selected");
    $(".friend").show();
  }
});


var friendsArr = [
  {
    "name": "Arya",
    "img": "arya.jpg",
    "preview": "Ciao fratellì!",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Daenerys",
    "img": "daenerys.jpg",
    "preview": "Ci vediamo stasera",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Melisandre",
    "img": "melisandre.jpg",
    "preview": "Perchè la notte è buia e piena di terrori",
    "time": timeGen(),
    "status": "online"
  }
];

friendsList(friendsArr);

function friendsList(arr) {
  for (var i = 0; i < arr.length; i++) {
    friendGen(i);
  }
}

function friendGen(i) {
  templateFriend = $(".friend-template .list").clone();
  templateFriend.addClass("list");
  $(".friend-template").attr("data-friend-name", friendsArr[i].name.toLowerCase());
  $(".friend-img img").attr("src", "img/" + friendsArr[i].img + "");
  $(".friend-text").find(".friend-name").text(friendsArr[i].name);
  $(".friend-text").find(".friend-preview").text(friendsArr[i].preview);
  $(".friend-time p").text(friendsArr[i].time);
  $(".friend-bar-status").text(friendsArr[i].status);
  $(".user-friends").appendTo(templateFriend);
}
