// ------------------------MINUTEUR-----------------------------

var h1=0;
var m1=0;
var s1=0;

function maxLengthCheck(object)
{
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)

  	if (object.value > 59 )
  		object.value=59
}

function fermeture(){
	
	$("#minuteur_terminee").remove();
}

f = function(n) {

	var boutton=$("#lancer_minuteur").text();
	if(boutton == "Stopper")
	{

    if (n != 0) 
    {	
    	console.log(n)
    	if(n-1 < 10)
    	{
      		$('#seconde').text("0"+(n-1));
      		$('#seconde').val("0"+(n-1));
      	}
      	else
      	{
      		$('#seconde').text(n-1);
      		$('#seconde').val(n-1);
      	}
       setTimeout(function(){f(n-1);}, 1000);
    }
    else if(n == 0)
    {
    	if(minute > 0)
    	{
    		if(minute-1 < 10)
    		{
    			$('#minute').text("0"+(minute-1));
    			$('#minute').val("0"+(minute-1));
    		}
    		else
    		{
    			$('#minute').text(minute-1);	
    			$('#minute').val(minute-1);
    		}
    		$('#seconde').text(59);
    		$('#seconde').val(59);
    		minute = minute-1;
    		f(60);
    	} 		
    	else
    	{
    		if(heure > 0)
    		{
    			if(heure-1 < 10)
    			{
    				$('#heure').text("0"+(heure-1));
    				$('#heure').val("0"+(heure-1));
    			}
    			else
    			{
    				$('#heure').text(heure-1);
    				$('#heure').val(heure-1);
    			}	
    			$('#minute').text(59);
    			$('#minute').val(59);
    			minute=60;
    			heure=heure-1;
    			f(0);
    		}
    		else
    		{	
    			$("#minuteur_terminee").remove();
    			$("#lancer_minuteur").text("Lancer");
    			$(".minuteur").append("<div id='minuteur_terminee'></div")
    			$("#minuteur_terminee").append("<div></div").hide().fadeIn(500);
    			$("#minuteur_terminee").append("<div id='message'></div>").hide().fadeIn(500);
    			$("#message").append("<p>Temps écoulé !</p>").hide().fadeIn(500);

    			$("#minuteur_terminee").append("<div id='boutton_fermeture'></div>").hide().fadeIn(500);
    			$("#boutton_fermeture").append("<button onclick='fermeture()' class='fermeture'></button>").hide().fadeIn(500)
    			h1=0; m1=0; s1=0;
    		}
    	}
    }
}
}

$(document).ready(function(){



	$("button").click(function(){
		 
		var h=h1;
		var m=m1;
		var s=s1;
		var entree1=0;	
		var entree2=0;	
		var entree3=0;	
				
  			$("button").keydown(function(){

  			var boutton=$("#lancer_minuteur").text();
 			var tab=['48','49','50','51','52','53','54','55','56','57'];
 			var tab2=['0','1','2','3','4','5','6','7','8','9'];
 			var x = event.which || event.keyCode;
 			var name=$(this).attr('id');
 			
 			// HEURE

    		if(name == "heure" && boutton == "Lancer")
    		{	
    			if(entree1 == 0)
    			{
	    			for(i=0; i< tab.length; i++)
	    			{
	    				if(x == tab[i])
	    				{	   				
	    					$('#heure').text("0"+tab2[i]);
	    					h=$('#heure').text();
	    					entree1=tab2[i];
	    				}
	    			}	
    			}
    			else if(entree1 != 0)
    			{
	    			for(j=0; j< tab.length; j++)
	    			{
	    				if(x == tab[j])
	    				{	
	    					$('#heure').text(entree1+tab2[j]);
	    					entree11=tab2[j];
	    					h=$('#heure').text();
	    				}
	    			}
	    				entree1=0;
    			}
    			if(x == 38)
    			{
    				if(h != 99)
    				{
    					h++;
    				}

    				if(h < 10)
	    			{
	    				$('#heure').text("0"+h);
	    			}
	    			else 
	    			{
	    				$('#heure').text(h);
	    			}
    			}
    			else if(x == 40)
    			{
    				if(h != 0)
    				{
    					h--;
    				}
    				if(h < 10)
	    			{
	    				$('#heure').text("0"+h);
	    			}
	    			else 
	    			{
	    				$('#heure').text(h);
	    			}
    			}
    		}

    		// MINUTE
 			
    		if(name == "minute" && boutton == "Lancer")
    		{
    			if(entree2 == 0)
    			{
	    			for(i=0; i< tab.length; i++)
	    			{
	    				if(x == tab[i])
	    				{
	    					if(tab2[i] < 6)
	    					{
	    						$('#minute').text("0"+tab2[i]);
	    						entree2=tab2[i];
	    						m=$('#minute').text();
	    					}
	    				}
	    			}	
    			}
    			else if(entree2 != 0)
    			{
	    			for(j=0; j< tab.length; j++)
	    			{
	    				if(x == tab[j])
	    				{	
	    					$('#minute').text(entree2+tab2[j]);
	    					m=$('#minute').text();
	    				}
	    			}
	    				entree2=0;
    			}
    			if(x == 38)
    			{
    				if(m != 59)
    				{
    					m++;
    				}
    				if(m < 10)
	    			{
	    				$('#minute').text("0"+m);
	    			}
	    			else 
	    			{
	    				$('#minute').text(m);
	    			}
    			}
    			else if(x == 40)
    			{
    				if(m != 0)
    				{
    					m--;
    				}
    				if(m < 10)
	    			{
	    				$('#minute').text("0"+m);
	    			}
	    			else 
	    			{
	    				$('#minute').text(m);
	    			}
    			}
    		}

    		// SECONDE

    		if(name == "seconde" && boutton == "Lancer")
    		{
    			if(entree3 == 0)
    			{
	    			for(i=0; i< tab.length; i++)
	    			{
	    				if(x == tab[i])
	    				{
	    					if(tab2[i] < 6)
	    					{
	    						$('#seconde').text("0"+tab2[i]);
	    						entree3=tab2[i];
	    						s=$('#seconde').text();
	    					}
	    				}
	    			}	
    			}
    			else if(entree3 != 0)
    			{
	    			for(j=0; j< tab.length; j++)
	    			{
	    				if(x == tab[j])
	    				{	
	    					$('#seconde').text(entree3+tab2[j]);
	    					s=$('#seconde').text();
	    				}
	    			}
	    				entree3=0;
    			}
    			if(x == 38)
    			{
    				if(s != 59)
    				{
    					s++;
    				}
    				if(s < 10)
	    			{
	    				$('#seconde').text("0"+s);
	    			}
	    			else 
	    			{
	    				$('#seconde').text(s);
	    			}
    			}
    			else if(x == 40)
    			{
    				if(s != 0)
    				{
    					s--;
    				}
	   				if(s < 10)
	    			{
	    				$('#seconde').text("0"+s);
	    			}
	    			else 
	    			{
	    				$('#seconde').text(s);
	    			}
    			}
    		}  		
    		h1=h;
    		m1=m;
    		s1=s;
		});
	});

	$("#lancer_minuteur").click(function(){

		var boutton=$("#lancer_minuteur").text();
		var responsive=$("#responsive").text();

		
		if(boutton != "Stopper")
		{	
			$("#minuteur_terminee").remove();

			if(responsive=="J'ai un téléphone")
			{
				heure=$('#heure').text()
				minute=$('#minute').text()
				seconde=$('#seconde').text()
			}
			else
			{
				heure=$('#heure').val()
				minute=$('#minute').val()
				seconde=$('#seconde').val()

				document.getElementById("heure").disabled = true;
				document.getElementById("minute").disabled = true;
				document.getElementById("seconde").disabled = true;

				if(heure < 10 && heure != "00")
				{
					heure="0"+(heure)
				}
				if(minute < 10 && minute != "00")
				{
					minute="0"+(minute)
				}
				if(seconde < 10 && seconde != "00")
				{
					seconde="0"+(seconde)
				}
			}

			if(heure != "00" || minute != "00" || seconde != "00")
			{
				$("#lancer_minuteur").text("Stopper");
				f(seconde);
			} 
		}
		else
		{
			$("#lancer_minuteur").text("Lancer");
		}
	});	

	$("#reset_minuteur").click(function(){

		heure=$('#heure').text("00");
		minute=$('#minute').text("00");
		seconde=$('#seconde').text("00");

		heure=$('#heure').val("00");
		minute=$('#minute').val("00");
		seconde=$('#seconde').val("00");
		h1=0; m1=0; s1=0;
		f(0);
	});

	$("#responsive").click(function(){


		var responsive=$("#responsive").text();

		if(responsive =="J'ai un téléphone")
		{
			$("#heure").remove()
			$("#minute").remove()
			$("#seconde").remove()

			$("#affichage_telephone").append("<input id='heure'  oninput='maxLengthCheck(this)'maxlength='2' min='00' max='99' type='number' value='00'>")
			$("#affichage_telephone").css({"width" : "250px", "display" : "flex", "justify-content" : "space-between"})
			$("#heure").after("<input id='minute' type='number' oninput='maxLengthCheck(this)'maxlength='2' min='00' max='59' value='00'>")
			$("#minute").after("<input id='seconde' type='number' oninput='maxLengthCheck(this)'maxlength='2' min='00' max='59' value='00'>")

			$("#responsive").text("J'ai un ordinateur")
		}
		else
		{	
			$("#heure").remove()
			$("#minute").remove()
			$("#seconde").remove()

			$("#affichage_telephone").append("<button id='heure'>00</button>")
				$("#heure").after("<button id='minute'>00</button>")
			$("#minute").after("<button id='seconde'>00</button>")
			$("#responsive").text("J'ai un téléphone")
		}


	});
	
});



