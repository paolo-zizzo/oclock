// -----------------CHRONOMETRE----------------------

 function reset(){

        minute_chrono=$('#minute_chrono').text("00");
        seconde_chrono=$('#seconde_chrono').text("00");
        milliseconde_chrono=$('#milliseconde_chrono').text("00");
        $("#titre_temps").remove();
        $(".lestemps").remove();
        nbrclique=0;
        
}

h = function(n) {

	var boutton_chrono=$("#lancer_chrono").text();

	if(boutton_chrono == "Stopper")
	{
    if (n != 99) 
    {
        
    	if(n+1 < 10)
    	{
      		$('#milliseconde_chrono').text("0"+(n+1));
      	}
      	else
      	{
      		$('#milliseconde_chrono').text(n+1);
      	}      	
      	// Normalement il faudrai mettre 10 mais j'ai aperçu un décalage, sûrement le code qui ralentit
      	// Reste quand même un décalage de quelque millisecondes...
       
       setTimeout(function(){h(n+1);}, 8);   
    }
    else if(n == 99)
    {
    	if(seconde_chrono < 59)
    	{
    		
    		if(seconde_chrono+1 < 10)
    		{
    			$('#seconde_chrono').text("0"+(seconde_chrono+1));
    		}
    		else
    		{
    			$('#seconde_chrono').text(seconde_chrono+1);	
    		}
    		$('#milliseconde_chrono').text(0);
    		seconde_chrono = seconde_chrono+1;
    		h(0)
    	} 		


    	else
    	{
    		if(minute_chrono < 59)
    		{
    			if(minute_chrono+1 < 10)
    			{
    				$('#minute_chrono').text("0"+(minute_chrono+1));
    			}
    			else
    			{
    				$('#minute_chrono').text(minute_chrono+1);
    			}	
    			$('#minute_chrono').text(59);
    			seconde_chrono=60;
    			minute_chrono=minute_chrono+1;
    			h(0);
    		}
    		else
    		{	

    			
    		}
    	}
    }
    }
}

var nbrclique=0;
$(document).ready(function(){


	$("#lancer_chrono").click(function(){

        $("#reset_chrono").remove();
		var boutton_chrono=$("#lancer_chrono").text();

		if(boutton_chrono == "Lancer")
		{
			$("#lancer_chrono").text("Stopper")
            minute_chrono=parseInt($("#minute_chrono").text())
			seconde_chrono=parseInt($("#seconde_chrono").text())
			milliseconde_chrono=parseInt($("#milliseconde_chrono").text())
			h(milliseconde_chrono)
		}
		else
		{
            $("#lancer_chrono").after("<button onclick='reset()' id='reset_chrono'>Remettre à 0</button>")
			$("#lancer_chrono").text("Lancer")
		}

	});

    $("#tour_chrono").click(function(){

        
        var boutton_chrono=$("#lancer_chrono").text();
        if(boutton_chrono == "Stopper")
        {   
            nbrclique++;
            if(parseInt($("#minute_chrono").text()) < 10)
            {
                min_chrono ="0"+ (parseInt($("#minute_chrono").text()))
            }
            else
            {
                 min_chrono = parseInt($("#minute_chrono").text())
            }
            if(parseInt($("#seconde_chrono").text()) < 10)
            {
                sec_chrono ="0"+ (parseInt($("#seconde_chrono").text()))
            }
            else
            {
                sec_chrono = parseInt($("#seconde_chrono").text())
            }
            if(parseInt($("#milliseconde_chrono").text()) < 10)
            {
                mill_chrono ="0"+ (parseInt($("#milliseconde_chrono").text()))
            }
            else
            {
                mill_chrono = parseInt($("#milliseconde_chrono").text())
            }


            $("#titre_temps").remove();
            $(".controle_chonometre").after("<h1 id='titre_temps'>Temps</h1>");

            if(nbrclique <=5)
            {
                $("#temps_div1").append("<p class='lestemps'>Temps "+nbrclique+": "+ min_chrono +":"+sec_chrono+":"+mill_chrono+"</p>")
            }
            else if(nbrclique <=10)
            {
                 $("#temps_div2").append("<p class='lestemps'>Temps "+nbrclique+": "+ min_chrono +":"+sec_chrono+":"+mill_chrono+"</p>")
            }

            if(nbrclique > 10)
            {
                 $("#lancer_chrono").text("Lancer");
                 reset();
            }
        }
    });
});