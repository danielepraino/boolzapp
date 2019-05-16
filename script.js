//richiamo la data da visualizzare nei messaggi
function timeGen() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if (hours == 0) {
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
    setTimeout(function() {
      newFriendMessage("Ok!");
    }, 1000);
  }
}

//creo una funzione che genera un nuovo messaggio amici (in bianco)
function newFriendMessage(text) {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.find(".text-message").text(text);
  templateMsg.find(".time-message").text(timeGen());
  templateMsg.find("i").hide();
  templateMsg.addClass("friendmsg");
  $(".main-chat").append(templateMsg);
}

function newAutoUserMessage(text) {
  var newTextMsg = $(".input-message").val();
    templateMsg = $(".template-message .new-message").clone();
    templateMsg.find(".text-message").text(text);
    templateMsg.find(".time-message").text(timeGen());
    templateMsg.addClass("usermsg");
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

//creo una funzione che genera al lista dei contatti amici
function friendsList(arr) {
  for (var i = 0; i < arr.length; i++) {
    friendGen(i);
  }
}

//creo una funzione che va a popolare il singolo contatto per la lista amici
//ATTENZIONE BUG: clona gli elementi e modifica il tutto allo stesso elemento
function friendGen(i) {
  var templateFriend = $(".friend-template").first().clone();
  templateFriend.addClass("list");
  $(".friend-template").attr("data-pos", i);
  $(".friend-template").attr("data-friend-name", friendsArr[i].name.toLowerCase());
  $(".friend-img img").attr("src", "img/" + friendsArr[i].img + "");
  $(".friend-text").find(".friend-name").text(friendsArr[i].name);
  $(".friend-time p").text(friendsArr[i].time);
  $(".friend-bar-status").text(friendsArr[i].status);
  var arrLength = chatArr[i].length;
  $(".friend-text").find(".friend-preview").text(chatArr[i][arrLength-2][0]);
  $(".user-friends").append(templateFriend);
}

//creo una funzione che, al click del contatto lo selezione a va a popolare
//la chat con il contenuto dell'array delle chat fake, alla posizione corrispondente
//ATTENZIONE BUG: ho provato a fare .empty() sul div della chat ma poi non
//va più a popolare il div con i dati inseriti
$(".friend-template.list").click(function(){
  $(".friend-template.list").removeClass("selected");
  $(this).addClass("selected");
  var pos = $(this).attr("data-pos");
  var name = $(this).attr("data-friend-name");
  $(".user-img").attr("src", "img/" + name + ".jpg");
  $(".friend-bar-name").text(upperCaseFirstLetter(name));
  console.log("POS: " + pos);
  for (var j = 0; j < chatArr[pos].length; j++) {
    if(chatArr[pos][j][1] == 0) {
      newFriendMessage(chatArr[pos][j][0]);
    } else {
      newAutoUserMessage(chatArr[pos][j][0]);
    }
  }
});

//creo una funzione che mi permette di "ricorstruire"
//il nome con la prima lettera maiuscola
function upperCaseFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
