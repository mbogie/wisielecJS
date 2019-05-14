window.onload = () => {
	start();
}

var passwords = [];
passwords[0] = "Bez pracy nie ma kołaczy";
passwords[1] = "Cztery wesela i pogrzeb";
passwords[2] = "Królewna Śnieżka i siedmiu krasnoludków";
passwords[3] = "Ali baba i czterdziestu rozbójników";
passwords[4] = "Gość w dom Bóg w dom";
passwords[5] = "Gdyby kózka nie skakała";
passwords[6] = "Stół z powyłamywanymi nogami";
passwords[7] = "Co mi zrobisz jak mnie złapiesz";
passwords[8] = "Teletubisie";
passwords[9] = "Przemineło z wiatrem";
passwords[10] = "Avengers Endgame";

var pass = passwords[Math.floor(Math.random()*passwords.length)];

	
pass = pass.toUpperCase();
var passLength = pass.length;
var step = 0;
var letters = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ";
var size = letters.length;
var hidePass = "";
var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

for(var i = 0; i<passLength; i++){
	if(pass.charAt(i)==" ") hidePass = hidePass + " ";
	else hidePass = hidePass + "-";
}

function writeText(){
	document.getElementById("pass").innerHTML = hidePass;
}

function start(){
	
	var divInside = "";
	for(i=0; i<size; i++){
		var letId = "lit"+i;
		divInside = divInside + '<div class="letter" onclick="check('+i+')"id="'+ letId +'">'+letters.charAt(i)+'</div>';
		if((i+1)%7==0) divInside = divInside + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("letters").innerHTML = divInside;
	
	writeText();
}

String.prototype.setSign = function(place, sign){
	if(place > this.length-1) return this.toString;
	else return this.substr(0, place) + sign + this.substr(place+1);
}

function check(nr){
	var hit = false;
	var lett = letters.charAt(nr);
	for(i=0; i<size; i++){
		if(pass[i] == lett) {
			hit = true;
			hidePass = hidePass.setSign(i,lett);
		}
	}
	
		var letId = "lit"+nr;
		var element = document.getElementById(letId);
	if(hit == true){
		yes.play();
		writeText();
		element.style.background = "#003300";
		element.style.color = "#00C000";
		element.style.border = "3px solid #00C000";
		element.style.cursor = "default";
		
		if(pass == hidePass)
		document.getElementById("letters").innerHTML = "Wygrana! Podano prawidłowe hasło: "+pass+'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

	}else {
		no.play();
		element.style.background = "#330000";
		element.style.color = "#C00000";
		element.style.border = "3px solid #C00000";
		element.style.cursor = "default";
		element.setAttribute("onclick",";");
	
		
		step++;
		document.getElementById("picture").innerHTML = '<img src="images/s'+step+'.jpg" />';
		
		if(step==9)
			document.getElementById("letters").innerHTML = "PRZEGRANA! Szukane hasło to: "+pass+'</br></br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

	}
	
}