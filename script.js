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
  [["Eccolooooo!",0], ["Eccolaaaaaa!",1], ["Come stai sorellì?",1], ["Tutto bene Jon!",0], ["Oh, grazie ancora per la spada!",0], ["FIGHISSIMA!",0], ["Figurati, così puoi allenarti e non rompi più le scatole a Sansa",1], ["Ma tanto sai che quella è tutta gne gne gne",0] ,["E vabbè dai",1], ["Ci sentiamo!",0] ,["Valar Morghulis!",0], ["Speriamo di no",1]],
  [["Comunque potevi anche farti sentire",0], ["Non è che ti devo sempre scrivere io",0], ["Scusami, è che sono stato un bel po' incasinato sto periodo",1], ["Ti volevo mandare un articolo sul ghosting",0], ["Così te lo leggi bene bene",0], ["Ghosting...intendi Spettro?",1], ["Ma allora è vero quello che si dice in giro di te!",0], ["E cosa?",1] ,["Vedi? Non sai niente Jon Snow!",0]],
  [["Fai attenzione al fondo delle pulci",0], ["Di sera è pericoloso",0], ["Weee grazie Melisà, ma tanto non ci devo andare",1], ["Portati la spada, ti conviene",0], ["Falla affilare prima",0], ["Non ci vadooo!",1], ["Ci mando Davos",1], ["Fai attenzione",0] ,["Con quello che si sente sui giornali",0], ["Oooook!",1], ["Ricordati che la notte è buia",0] ,["E piena di terrori",0]],
  [["Hodor, hodor hodor hodor!",0], ["Sono contento Hodor, finalmente una buona notizia dai!",1], ["Hodor!",0], ["Bella!",1], ["Hodor hodor?",0], ["Mi sa di no, ho organizzato già con Ygritte",1], ["Sai che quella poi ci rimane male",1], ["Tanto ai quiz perdo sempre",1] ,["E poi mi dice che non so mai niente",1], ["Hodor hodor hodor, hodor! Hodor.",0] ,["Grazie, ti faccio sapere comunque!",1], ["HODOR!",0]],
  [["Ascolta, ma puoi mettermi una buona parola con tu sai chi?",0], ["Eh, vedo che posso fare dai",1], ["Non hai capito fratè",0], ["Sto in fissa paurosa ",0], ["Mangio e me la vedo lì",0], ["Bevo latte di gigante e tac, eccola lì",0], ["Uccido due o tre corvi ed eccola",0], ["Si dai, ho capito Tormund",1] ,["Ricordami come ti chiamano...",1], ["Veleno dei giganti",0], ["Ti dovevano chiamare orzata delle moffette",1], ["Tutti simpatici qui al sud vedo",0]],
  [["Guarda ti dico sta roba perché mi fido",1], ["Però tipo non lo devi dire a nessuno",1], ["Perché è un super segreto",1], ["Dai dimmi",0], ["No davvero eh, giura",1], ["Giuro",0], ["Giuri su...?",1], ["Giuro sulla testa di Lady che me possano accecamme!",0]],
  [["Mai dimenticare chi sei, perché di certo il mondo non lo dimenticherà.",0], ["Ok, grazie", 1], ["Trasforma chi sei nella tua forza, così non potrà mai essere la tua debolezza.",0], ["Sì ok grazie!",1], ["Fanne un'armatura, e non potrà mai essere usata contro di te.",0], ["Grazie",1], ["Mostra che le loro parole possono ferirti, e non sarai più libero dalla derisione.",0], ["HO CAPITO! Grazie!",1] ,["Ma...hai smesso di bere vino?",1]],
  [["Ho letto che a Vecchia Città c'è uno che vende un libro",0], ["Roba introvabile pare",0], ["Una vecchia ristampa",0], ["Dimmi che sono curioso!",1], ["Si intitola: crea da zero il tuo business ad Approdo del Re",0], ["Lo leggo e poi facciamo una cosa facile facile",0], ["Tipo?",1], ["Entriamo nel business dell'altofuoco!",0] ,["Te sei matto TOTALE",1], ["Famo i big dragoni d'oro!",0], ["Te lo dico io!",0]],
  [["Weeee fratèèèè",0], ["Com'è?",0], ["Bene dai, te?",1], ["Na favolaaaa",0], ["Ancora con sti funghetti?",1], ["E dimmi, sta volta che hai visto?",1], ["St...o!",0], ["Più cresci e più diventi simpatico oh",1], ["Ma taci che pure da seduto sono più alto di te",0]],
  [["Un uccelletto m'ha detto che ti interessa un certo articolo...",0], ["Scusa???",1], ["Dai non fare il finto tonto",0], ["Tanto già lo so",0], ["Quell'altra tenere un segreto mai eh!",1], ["Vabbè, mi serviva una daga di vetro di drago",1], ["Se me la puoi rimediare per domani",1], ["Spe che chiedo a quell'altro lì",0] ,["Ditocorto",0], ["Seee allora famo per il prossimo anno dai",1] ,["Uomo di poca fede. Te la rimedio facile",0], ["Però stai calmo",1] ,["Thanks!",1]],
  [["Ma alla fine c'è pure tua sorella?",1], ["No, non c'è, tira pacco",0], ["Perché, ti interessa?",0], ["Ma che, ho chiesto solo perché è più furba di te",1], ["Grazie...",0], ["AHAHAHAHAHA",1], ["Fattela na risata ogni tanto dai",1], ["Sai che ultimamente ho poco da ridere...",0] ,["Si vabbè però con voi solo tragedie",1], ["Come si fa ad avere amici così",1]],
  [["Ti ho raccontato di come mia figlia si è presa il morbo grigio?",0], ["Mi hai detto a scuola, no?",1], ["Si, lascia stare, mandano i bambini malati a scuola", 0], ["E poi si ammala tutta la classe", 0], ["Solo rotture di scatole ultimamente eh", 0], ["E devo pure star dietro a sta banda di disagiati", 0], ["Uhhh come ti capisco!", 1], ["Poi certi sono simpatici come Tywin Lannister, e t'ho detto tutto", 1]],
  [["Jaime mi ha detto che ci sarà pure lui",1], ["Lascia stare che sono incazzata nera",0], ["Mai che mi dia ascolto quello",0], ["Si comunque sei troppo duro con lui",1], ["Considerando pure quello che ha fatto per te",1], ["MAI CONTENTA",1], ["A John...te ce manno ora?",0], [":(",1]],
  [["Oh ma allora arrivi?",0], ["Si arrivo, stai calmo",1], ["Ma...come mai tutta sta fretta?",1], ["Fammi capire",1], ["E' che dopo devo incontrare Melisandre",0], ["E sai com'è quella, la luce, il fuoco e bla bla bla",0], ["Dai, finisco di lucidare Lungo Artiglio e arrivo",1]],
];

var autoAnswerArr = ["Valar Morghulis", "Valar Dohaeris", "Un Lannister paga sempre i propri debiti", "L'inverno sta arrivando", "Fuoco e sangue", "Nostra è la furia", "Udite il mio ruggito", "Noi non seminiamo", "Crescere forti", "Mai inchinati, mai piegati, mai spezzati", "Famiglia, dovere, onore"];

//richiamo la funzione per generare la lista contatti amici
friendsList(friendsArr);

//creo una funzione che genera al lista dei contatti amici andando a popolare il singolo contatto
//inserisco la preview dell'ultimo messaggio, se è troppo lungo lo "taglio" aggiungendo i tre puntini
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
    if (chatArr[i][arrLength-1][0].length < 35) {
      templateFriend.find(".friend-text").find(".friend-preview").text(chatArr[i][arrLength-1][0]);
    } else {
      var cutPreview = chatArr[i][arrLength-1][0].substring(0,35) + "...";
      templateFriend.find(".friend-text").find(".friend-preview").text(cutPreview);
    }
    $(".user-friends").append(templateFriend);
  }
}

var pos;

//creo una funzione che, al click del contatto lo selezione a va a popolare
//la chat con il contenuto dell'array delle chat fake, alla posizione corrispondente
$(".friend-template.list").click(function(){
  $(".welcome-container").addClass("invisible");
  $(".messages").addClass("visible");
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
      newFriendMessage(chatArr[pos][j][0], pos, j);
    } else {
      newAutoUserMessage(chatArr[pos][j][0], pos, j);
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
    templateMsg.attr("data-friendpos", pos);
    templateMsg.attr("data-msgpos", chatArr[pos].length-1);
    templateMsg.find(".text-message").text(newTextMsg);
    templateMsg.find(".time-message").text(timeGen());
    templateMsg.addClass("usermsg");
    $(".main-chat").append(templateMsg);
    $(".input-message").val("");
    setTimeout(function() {
      var random = Math.floor(Math.random() * autoAnswerArr.length);
      console.log("random: " +random);
      var autoText = autoAnswerArr[random];
      console.log("autoText: " +autoText);
      chatArr[pos].push([autoText, 0]);
      newFriendMessage(autoText, pos, chatArr[pos].length-1);
    }, 1000);
  }
}

//creo una funzione che genera un nuovo messaggio amici (in bianco)
function newFriendMessage(text, arrPos, arrMsg) {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.attr("data-friendpos", arrPos);
  templateMsg.attr("data-msgpos", arrMsg);
  templateMsg.find(".text-message").text(text);
  templateMsg.find(".time-message").text(timeGen());
  templateMsg.addClass("friendmsg");
  $(".main-chat").append(templateMsg);
}

//creo una funzione che genera un nuovo messaggio utente (in verde) dall' array conversazioni
function newAutoUserMessage(text, arrPos, arrMsg) {
  templateMsg = $(".template-message .new-message").clone();
  templateMsg.attr("data-friendpos", arrPos);
  templateMsg.attr("data-msgpos", arrMsg);
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
  $(this).next().addClass("dropdown").css({ "top": arrowPos.top-5, "left": arrowPos.left-50 }).animate({"opacity": "1" });
});

//al click su "elimina messaggio" rimuove il messaggio dal DOM e dall'array corrispondente
$(document).on("click", ".deletemsg", function(){
  var friendPos = $(this).parents(".new-message").attr("data-friendpos");
  var msgPos = $(this).parents(".new-message").attr("data-msgpos");
  chatArr[friendPos].splice(msgPos, 1);
  $(this).parents(".new-message").remove();
});

//se clicco in qualsiasi punto della chat fa sparire il menù
$(".main-chat").click(function(){
  $(".message-menu").removeClass("dropdown").css({ "opacity": "0" });
});

//vado a posizionarmi dinamicamente user-card per poi andare ad animarlo in entrata e uscita
var userWidth = $(".user").width();
var userHeight = $(".user").height();
var userPos = $(".user").position();
$(".user-card").css({ "width": userWidth, "height": userHeight, "left": userPos.left-userWidth });

$(".profile-img").click(function(){
  $(".user-card").animate({ "left": userPos.left }, "fast");
});

$(".arrow-card").click(function(){
  $(".user-card").animate({ "left": -userWidth }, "fast");
});

//ricarico la finestra al resize per il responsive
$(window).on("resize", function(){
  location.reload();
});
