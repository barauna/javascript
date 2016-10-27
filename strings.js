function joining(){
/*	var nome = "Leonardo";
	var sobrenome = "Baraúna";
	var ultimoNome = "do Couto";
	var nomeCompleto = nome + " " + sobrenome;
	nomeCompleto += " ";
	nomeCompleto += ultimoNome;
	console.log(nomeCompleto);
*/
	console.time("concatenação de string");
	var stringGrande = "It is almost unavoidable that, " +
					  "in the course of working on these exercises, " +
					  "you will get confused and frustrated by some " + 
					  "regular expression’s inexplicable behavior. " + 
					  "Sometimes it helps to enter your expression into an " + 
					  "online tool like debuggex.com to see whether its visualization " + 
					  "corresponds to what you intended and to experiment with the way " + 
					  "it responds to various input strings.";
	console.log(stringGrande);					  
	console.timeEnd("concatenação de string");
}

function performance() {
	var stringGrande = new Array();
	console.time("concatenação de string com array");
	stringGrande.push("It is almost unavoidable that, ");
	stringGrande.push("in the course of working on these exercises, ");
	stringGrande.push("you will get confused and frustrated by some "); 
	stringGrande.push("regular expression’s inexplicable behavior. "); 
	stringGrande.push("Sometimes it helps to enter your expression into an "); 
	stringGrande.push("online tool like debuggex.com to see whether its visualization "); 
	stringGrande.push("corresponds to what you intended and to experiment with the way "); 
	stringGrande.push("it responds to various input strings.");
	console.log(stringGrande.join(""));
	stringGrande = null;
	console.timeEnd("concatenação de string com array");			  
}

function sub() {
	var nome = "leonardo baraúna";
	var sobrenome = nome.substring(9,20);
	console.log(sobrenome);
	
	sobrenome = nome.slice(9, 20);
	console.log(sobrenome);
	
	sobrenome = nome.substr(9, 10);
	console.log(sobrenome);

	sobrenome = nome.substring(0,3);
	console.log(sobrenome);

	sobrenome = nome.slice(0,-3);
	console.log(sobrenome);
}

function stringCase(){
	var nome = "Leonardo Baraúna do Couto";
	console.log(nome.toLowerCase());
	console.log(nome.toUpperCase());
}

stringCase();