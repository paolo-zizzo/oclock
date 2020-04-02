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


        if($("#nom_alarme").val() != "")
        {
            nom_alarme=$("#nom_alarme").val()
            $("#affichage_alarme").append('<div id='+i+'><p id="mon_heure'+i+'">'+$("#heure_choisie").val()+'</p></div>')
            $("#mon_heure"+i).after('<button class="supprimer_alarme" id='+i+'>Supprimer</button>')
            alarme.push($("#heure_choisie").val());
            $("#nom_alarme").val("")
            $("#heure_choisie").val("00:00")
            i++;
        }     
    });

    $("body").on("click",".supprimer_alarme",function(){

        id=$(this).attr('id')
        $("#"+id).remove()
        delete alarme[id];
        $("#message_alarme").text("")
        $(".div_message").css({"display":"none"})

    });

     $("body").on("click",".div_message",function(){

        $("#message_alarme").text("")
        $(".div_message").css({"display":"none"})
    });

     $("body").on("mouseover",".div_message",function(){

        
        $(".div_message").css({"cursor":"pointer"})
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


    if(alarme.length > 0) 
    {
        if(alarme[alarme.length-1] == reveil)
        {

            console.log("ok")
        }
        for(i=0; i< alarme.length; i++)
        {   

            if(alarme[i] != reveil && alarme[i] != undefined)
            {
                if(parseInt(reveil.substr(0,2)) > parseInt(alarme[i].substr(0,2)))
                {
                    nbrheure=parseInt(reveil.substr(0,2)) - parseInt(alarme[i].substr(0,2))
                    nbrheure=24-nbrheure

                    if(parseInt(reveil.substr(3,2)) == parseInt(alarme[i].substr(3,2)))
                    {
                        nbrminute=0
                    }
                    else if(parseInt(reveil.substr(3,2)) > parseInt(alarme[i].substr(3,2)))
                    {
                        nbr = parseInt(reveil.substr(3,2))-parseInt(alarme[i].substr(3,2))
                        nbrminute= 60 - nbr
                        nbrheure=nbrheure - 1
                    }
                    else
                    {
                        nbr = parseInt(alarme[i].substr(3,2))-parseInt(reveil.substr(3,2))
                        nbrminute= 0 + nbr
                    }
                }
                else if(parseInt(reveil.substr(0,2)) == parseInt(alarme[i].substr(0,2))
                    &&parseInt(reveil.substr(3,2)) > parseInt(alarme[i].substr(3,2)))
                {
                    nbr = parseInt(reveil.substr(3,2))-parseInt(alarme[i].substr(3,2))
                    nbrminute= 60 - nbr
                    nbrheure=23
                }
                else
                {
                    nbrheure=parseInt(alarme[i].substr(0,2)) - parseInt(reveil.substr(0,2))
                    if(parseInt(alarme[i].substr(3,2)) == parseInt(reveil.substr(3,2)))
                    {
                        nbrminute=parseInt(alarme[i].substr(3,2))
                    }
                    else if(parseInt(alarme[i].substr(3,2)) > parseInt(reveil.substr(3,2)))
                    {
                        nbrminute= parseInt(alarme[i].substr(3,2))-parseInt(reveil.substr(3,2))
                    }
                    else
                    {
                        nbr= parseInt(reveil.substr(3,2))-parseInt(alarme[i].substr(3,2))
                        nbrheure=nbrheure-1
                        nbrminute=60-nbr
                    }     
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
                $("#mon_heure"+i).after('<p id="temps_restant'+i+'">Dans : ' +nbrheure+":"+nbrminute+'</p>')
            }      
            else if(alarme[i] == reveil)
            {
                $("#message_alarme").text("")
                $("#temps_restant"+i).text("Passée !")
                $(".div_message").css({"display":"flex","align-items":"center","justify-content":"center","width":"300px",
                    "background-color":"pink","position":"absolute","margin-top":"5%","border-radius":"10px","word-break":"break-word"})
               
                $("#message_alarme").text(nom_alarme)
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

