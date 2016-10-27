function topico3_4(){
	console.log("hello");

	var nome = "le\u01FEnardo";
	var name = new String("leo");
	var x;
	var resultado = 1/0;
	var outroNumero = new Number();

	console.log(typeof nome);
	console.log(typeof name);
	console.log(x);
	console.log(typeof resultado);
	console.log(resultado.valueOf());	
	console.log(outroNumero.valueOf());
	console.log(outroNumero);
	console.log(resultado === Infinity);

	console.log(nome);

}


function topico5(){

	var reg = new RegExp("leo");
	console.log(reg.test("leonardo"));

	reg = new RegExp("\\d");
	console.log(reg.test("leonrdo"));

	reg = new RegExp("leo\\D");
	console.log(reg.test("leonardo"));

	//CEP
	reg = new RegExp("[0-9][0-9][0-9][0-9][0-9]-[0-9][0-9][0-9]");
	console.log("CEP");
	console.log(reg.test("41830-451"));

	//Telefone
	reg = new RegExp("([0-9][0-9])[0-9]*-[0-9]*");
	console.log("telefone");
	console.log(reg.test("(71)3248-8349"));
	console.log(reg.test("(27)9932-9154"));

	//Telefone
	reg = new RegExp("\\([0-9]{2}\\)[0-9]{4,5}\\-[0-9]{4}");
	console.log("telefone");
	console.log(reg.test("xx(71)3248-8349"));
	console.log(reg.test("xx(27)99932-9154"));
	console.log(reg.test("27 99932-9154")); //false


	//Data
	reg = new RegExp("^[0-9]{1,2}[-/][0-9]{1,2}[-/][0-9]{2,4}$");
	console.log("Data");
	console.log(reg.test("10/12/2015"));
	console.log(reg.test("15-09-2016"));

	//e-mail
	reg = new RegExp("^[^0-9].+\\@.+\\..+");
	console.log("E-Mail");
	console.log(reg.test("leonardobarauna@hotmail.com"));
	console.log(reg.test("0eonardobarauna@hotmail.com"));
}

var nome = "Leonardo Baraúna";
var regular = /^(\D+)\s(\D+)$/;
var replaced = nome.replace(regular, "$2, $1");
console.log(replaced);

var pieceOfHtml = "<p>This is a <span>paragraph</span></p>";
pieceOfHtml = pieceOfHtml.replace(/</g,"&lt;");
pieceOfHtml = pieceOfHtml.replace(/>/g,"&gt;");
document.write(pieceOfHtml);