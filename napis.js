window.addEventListener("DOMContentLoaded", WypiszCytat, false);
window.addEventListener("DOMContentLoaded", WcisnijKlawisz, false);

var cytat="Moje ulubione motto brzmi:\"Przyszłość zaczyna się dzisiaj, nie jutro.\"";
var dlugosc=cytat.length;
var dlugosc2=dlugosc;
var cytat2="";
var x=0;



//funkcja pokazująca napis w odstępie czasu, litera po literze
function WypiszCytat(){
	if(x<dlugosc){
		cytat2=cytat2+cytat.charAt(x);
		document.getElementById("sentence").innerHTML = cytat2;
		x++;
		setTimeout(WypiszCytat,200);
	}else{
		document.getElementById("sentence").style.border="0px";
		}
	}

//funkcja imitująca wciskanie klawisza
var abc=false;
var nr=0;
var y=0;


function WcisnijKlawisz(){
	var numer = Math.floor(Math.random()*30)+1;
	if(y<=dlugosc2/2){
		if(abc==false){
			//console.log(numer);
			document.getElementById("key"+numer).style.transform="scale(0.8)";
			document.getElementById("key"+numer).style.borderBottomColor="#777777";
			abc=true;
			nr=numer;
			setTimeout(WcisnijKlawisz,200);
		}else{
			//console.log(nr);
			document.getElementById("key"+nr).style.transform="scale(1)";
			document.getElementById("key"+nr).style.borderBottomColor="#555555";
			abc=false;
			y++;
			setTimeout(WcisnijKlawisz,200);
		}
	}
	
}
