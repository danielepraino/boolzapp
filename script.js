//richiamo la data da visualizzare nei messaggi
function timeGen() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if(minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours + ":" + minutes;
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

//creo un array con i contatti, ogni contatto avrà le sue proprietà
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
  },
  {
    "name": "Hodor",
    "img": "hodor.jpg",
    "preview": "Hodor hodor!",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Tormund",
    "img": "tormund.jpg",
    "preview": "Non mi calcola proprio",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Sansa",
    "img": "sansa.jpg",
    "preview": "Promesso!",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Tyrion",
    "img": "tyrion.jpg",
    "preview": "Facile fare battute sui nani",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Samwell",
    "img": "samwell.jpg",
    "preview": "Sto incasinato col pargolo",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Brann",
    "img": "brann.jpg",
    "preview": "Ti ho visto",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Varys",
    "img": "varys.jpg",
    "preview": "Ma non puoi salire te?",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Theon",
    "img": "theon.jpg",
    "preview": "Scusa scusa scusaaa",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Stannis",
    "img": "stannis.jpg",
    "preview": "Chiama gli amici tuoi",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Cersei",
    "img": "cersei.jpg",
    "preview": "Se beccamooo",
    "time": timeGen(),
    "status": "online"
  },
  {
    "name": "Davos",
    "img": "davos.jpg",
    "preview": "Mo basta però",
    "time": timeGen(),
    "status": "online"
  }
];

//creo un array che contiene le chat fake
var chatArr = [
  [["Bravo",0], ["Bravissimo",1]],
  [["Ieri sono andato in canoa",1], ["Ma va???",0]],
  [["Ciao",0], ["Ciao",1]],
  [["Bella",1], ["Bella",0]],
  [["Bravo",0], ["Bravo",1]],
  [["Sei sveglio?",1], ["Si",0]],
  [["Ci vediamo",0], ["Si",1]],
  [["Ok",1], ["Ok",0]],
  [["No",0], ["Si",1]],
  [["Si",1], ["No",0]],
  [["Bravo",0], ["Bravissimo",1]],
  [["Ieri",1], ["Oggi",0]],
  [["Jaime mi ha detto che ci sarà pure lui",1], ["Lascia stare che sono incazzata nera",0], ["Mai che mi dia ascolto quello",0], ["Si comunque sei troppo duro con lui",1], ["Considerando pure quello che ha fatto per te",1], ["MAI CONTENTA",1], ["A John...te ce manno ora?",0], [":(",1]],
  [["Oh ma allora arrivi?",0], ["Si arrivo, stai calmo",1], ["Ma...come mai tutta sta fretta?",1], ["Fammi capire",1], ["E' che dopo devo incontrare Melisandre",0], ["E sai com'è quella, la luce, il fuoco e bla bla bla",0], ["Dai, finisco di lucidare Lungo Artiglio e arrivo",1]],
];

//richiamo la funzione per generare la lista contatti amici
friendsList(friendsArr);

//creo una funzione che genera al lista dei contatti amici andando a popolare il singolo contatto
function friendsList(arr) {
  for (var i = 0; i < arr.length; i++) {
    var templateFriend = $(".master-friend .friend-template ").clone();
    templateFriend.addClass("list");
    templateFriend.attr("data-pos", i);
    templateFriend.attr("data-friend-name", friendsArr[i].name.toLowerCase());
    templateFriend.find(".friend-img img").attr("src", "img/" + friendsArr[i].img + "");
    templateFriend.find(".friend-name").text(friendsArr[i].name);
    templateFriend.find(".friend-time p").text(friendsArr[i].time);
    $(".friend-bar-status").text(friendsArr[i].status);
    var arrLength = chatArr[i].length;
    templateFriend.find(".friend-text").find(".friend-preview").text(chatArr[i][arrLength-1][0]);
    $(".user-friends").append(templateFriend);
  }
}

var pos;

//creo una funzione che, al click del contatto lo selezione a va a popolare
//la chat con il contenuto dell'array delle chat fake, alla posizione corrispondente
$(".friend-template.list").click(function(){
  $(".friend-template.list").removeClass("selected");
  $(".main-chat").empty();
  $(this).addClass("selected");
  pos = $(this).attr("data-pos");
  name = $(this).attr("data-friend-name");
  $(".user-img").attr("src", "img/" + name + ".jpg");
  $(".friend-bar-name").text(upperCaseFirstLetter(name));
  $(".message-menu").css({ "opacity": "0" });
  for (var j = 0; j < chatArr[pos].length; j++) {
    if(chatArr[pos][j][1] == 0) {
      newFriendMessage(chatArr[pos][j][0]);
    } else {
      newAutoUserMessage(chatArr[pos][j][0]);
    }
  }
});

//creo una funzione che genera un nuovo messaggio utente (in verde) scritto dall'utente
//creo un interval che dopo 1 secondo invia un messaggio automatico
function newUserMessage() {
  var newTextMsg = $(".input-message").val();
  if (newTextMsg.length > 0) {
    chatArr[pos].push([newTextMsg, 1]);
    templateMsg = $(".template-message .new-message").clone();
    templateMsg.find(".text-message").text(newTextMsg);
    templateMsg.find(".time-message").text(timeGen());
    templateMsg.addClass("usermsg");
    $(".main-chat").append(templateMsg);
    $(".input-message").val("");
    setTimeout(function() {
      var autoText = "Ok!";
      chatArr[pos].push([autoText, 0]);
      newFriendMessage(autoText);
    }, 1000);
  }
}

//creo una funzione che genera un nuovo messaggio amici (in bianco)
function newFriendMessage(text) {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.find(".text-message").text(text);
  templateMsg.find(".time-message").text(timeGen());
  templateMsg.addClass("friendmsg");
  $(".main-chat").append(templateMsg);
}

//creo una funzione che genera un nuovo messaggio utente (in verde) dall' array conversazioni
function newAutoUserMessage(text) {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.find(".text-message").text(text);
  templateMsg.find(".time-message").text(timeGen());
  templateMsg.addClass("usermsg");
  $(".main-chat").append(templateMsg);
}

//creo una funzione che mi permette di "ricorstruire"
//il nome con la prima lettera maiuscola
function upperCaseFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

//ogni volta che viene digitata una lettera da tastiera nella barra search dei contatti
//per ogni elemento friend vado a leggere il suo attributo e verifico che nel valore
//dell'attributo ci sia uno dei caratteri digitati; se cancello delle lettere mi
//mostra nuovamente la lista contatti
$(".chat-search").keyup(function(event) {
  var search = $(".chat-search").val().toLowerCase();
  $(".friend-template.list").hide();
  if (search.length > 0) {
    $(".friend-template.list").each(function(){
      searchFriend = $(this).attr("data-friend-name");
      if(searchFriend.includes(search)) {
        $(this).show();
      }
    });
  } else if (search.length == 0) {
    $(".friend-template.list").show();
  }
});

//al mouseenter e mouseleave di ogni messaggio fa comparire la freccia per le opzioni messsaggio
$(document).on("mouseenter", ".new-message", function(){
  $(this).find(".arrow-option").animate({ "left": "0px", "opacity": "1" }, "fast" );
});

$(document).on("mouseleave", ".new-message", function(){
  $(this).find(".arrow-option").animate({ "left": "10px", "opacity": "0" }, "fast" );
});

//al click della freccia compare la tendina con le opzioni messaggio
$(document).on("click", ".arrow-option", function(){
  var arrowPos = $(this).position();
  $(".message-menu").removeClass("dropdown").css({ "opacity": "0" });
  $(this).next().addClass("dropdown").css({ "top": arrowPos.top, "left": arrowPos.left-100 }).animate({"opacity": "1" });
});

//al click su "elimina messaggio" rimuove il messaggio dal DOM
$(document).on("click", ".deletemsg", function(){
  $(this).parents(".new-message").remove();
});

//se clicco in qualsiasi punto della chat fa sparire il menù
$(".main-chat").click(function(){
  $(".message-menu").removeClass("dropdown").css({ "opacity": "0" });
});
