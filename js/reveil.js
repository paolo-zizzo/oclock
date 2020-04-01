var TableauMois = new Array (
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septembre',
    'octobre',
    'novembre',
    'decembre',
);


var tableauJours= new Array(
    'dimanche',
    'lundi',
    'mardi',
    'mercredi',
    'jeudi',
    'vendredi',
    'samedi',
    );






function afficherdateheure(){
    var dateGlobale = new Date();



    var annee = dateGlobale.getFullYear();


    var mois = dateGlobale.getMonth();

    var jour=  dateGlobale.getDay();

    var numerojour = dateGlobale.getDate();

    var heure= dateGlobale.getHours();

    var minutes = dateGlobale.getMinutes();

    var secondes = dateGlobale.getSeconds();

    if (heure< 10){
        heure ="0"+heure.toString();
    }
    if (minutes < 10){
        minutes ="0"+minutes.toString();
    }
    if (secondes < 10){
        secondes ="0"+secondes.toString();
    }


    mois= TableauMois[mois];

    jour= tableauJours[jour];


    var dateHeure = document.getElementById("date_heure");

    dateHeure.innerHTML= "Nous sommes le " + jour  + " "+ numerojour + " " + mois + " " + annee  +" et il est " + heure + ":"  + minutes + ":" + secondes;


    var reveil = heure + ":" + minutes ;

    // console.log(reveil);

    
    
}


function Affichersecondes(){

    afficherdateheure();

    var delai= 1000;
    setInterval('afficherdateheure()',delai);
}


$(document).ready(function(){

$("#button").click(function(){ console.log($("#reveil").val()
);
});});

