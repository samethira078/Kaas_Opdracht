//Mag God weten wat hieronder is gebeurt, maar het werkt :).

function start(){

var vraag1 = prompt("Is de kaas geel?");
while (vraag1 !== "ja" && vraag1 !== "nee") {
	vraag1 = prompt("Vul alleen 'ja' of 'nee' in ");
}if(vraag1 === "ja"){
var vraag2 = prompt("Zitten er gaten in?");
while (vraag2 !== "ja" && vraag2 !== "nee") {
	vraag2 = prompt("Vul alleen 'ja' of 'nee' in ");
} if(vraag2 === "ja"){
	var vraag3 = prompt("Is de kaas belachelijk duur?");
while (vraag3 !== "ja" && vraag3 !== "nee") {
	vraag3 = prompt("Vul alleen 'ja' of 'nee' in ");
} if(vraag3 === "ja"){
	document.write("Emmenthaler");
} else {
		document.write("Leerdammer");}
} else if(vraag2 === "nee"){
	var vraag5 = prompt("Is de kaas hard als steen?");
while (vraag5 !== "ja" && vraag5 !== "nee") {
	vraag5 = prompt("Vul alleen 'ja' of 'nee' in ");
} if(vraag5 === "ja"){
	document.write("Parmigiano Reggiano");
} else {
	document.write("Goudse Kaas");
}}} else{
	var vraag6 = prompt("Heeft de kaas blauwe schimmels?");
	while (vraag6 !== "ja" && vraag6 !== "nee") {
	vraag6 = prompt("Vul alleen 'ja' of 'nee' in ");
}if(vraag6==="nee"){
	var vraag9 = prompt("Heeft de kaas een korst?");
	while (vraag9 !== "ja" && vraag9 !== "nee") {
	vraag9 = prompt("Vul alleen 'ja' of 'nee' in ");} if(vraag9==="nee"){
	document.write("Mozzarella");
} else {
	document.write("Camembert");} 
}if(vraag6==="ja"){
	var vraag5 = prompt("Heeft de kaas een korst?");
	while (vraag5 !== "ja" && vraag5 !== "nee") {
	vraag5 = prompt("Vul alleen 'ja' of 'nee' in ");
}if(vraag5 ==="ja"){
	document.write("Bleu de Rochbaron");}
	else {
	document.write("Fourne d'Ambert");}}}}