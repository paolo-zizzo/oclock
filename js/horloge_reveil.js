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


var i=0
var alarme=[]
var nom_alarme=0
var nbrheure=0
var nbrminute=0
var nbr=0

$(document).ready(function(){
    $("#alarme").click(function(){

       $("#erreur").remove()

        if($("#nom_alarme").val() != "")
        {
            nom_alarme=$("#nom_alarme").val()
            $("#affichage_alarme").append('<div id='+i+'><p id="mon_heure'+i+'">'+$("#heure_choisie").val()+'</p></div>')
            $("#"+i).append('<p id="finis">'+nom_alarme+'</p>')
            alarme.push($("#heure_choisie").val());
            i++;
        }     
    });
});



function afficherdateheure(){
    

    var dateGlobale = new Date();

    var annee = dateGlobale.getFullYear();

    var mois = dateGlobale.getMonth();

    var jour=  dateGlobale.getDay();

    var numerojour = dateGlobale.getDate();

    var heure= dateGlobale.getHours();

    var minutes = dateGlobale.getMinutes();

    var secondes = dateGlobale.getSeconds();

    if (numerojour < 10){
        numerojour ="0"+numerojour.toString();
    }
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


    var reveil = heure + ":" + minutes


    if(alarme.length != 0)
    {
        for(i=0; i< alarme.length; i++)
        {   
            if(alarme[i] < reveil)
            {
                $("#alarme").after('<p id="erreur">Heure inccorect !</p>')
                delete alarme[i];
            }
            else
            {
                nbrheure=parseInt(alarme[i].substr(0,2)) - parseInt(reveil.substr(0,2))
                if(parseInt(alarme[i].substr(3,2)) >= parseInt(reveil.substr(3,2)))
                {
                    nbrminute= parseInt(alarme[i].substr(3,2))-parseInt(reveil.substr(3,2))
                }
                else
                {
                    nbr= parseInt(reveil.substr(3,2))-parseInt(alarme[i].substr(3,2))
                    nbrheure=nbrheure-1
                    nbrminute=60-nbr
                }

                if(nbrheure < 10)
                {
                    nbrheure="0"+nbrheure
                }
                 if(nbrminute < 10)
                {
                    nbrminute="0"+nbrminute
                }

                $("#temps_restant"+i).remove()
                $("#mon_heure"+i).after('<p id="temps_restant'+i+'">'+nbrheure+":"+nbrminute+'</p>')
            }
            
            if(alarme[i] == reveil)
            {
               $("#temps_restant").text("Passé !")
               delete alarme[i];
            }
        }
    }
  
}


function Affichersecondes(){

    afficherdateheure();

    var delai= 1000;
    setInterval('afficherdateheure()',delai);
}

