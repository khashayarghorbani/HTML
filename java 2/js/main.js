function Hello(){
	alert("Hello, World")
	console.log("test")
}
function Hey(){
	alert("whats up")
	console.log('test')
	confirm('you ok?')
}
function insert() {
	var person = prompt("please enter your name","Harry potter");
	if (person != null) {


	document.getElementById("insert").innerHTML= "hello " + person + "! how are you today?";
   }
}

function sum(){
	var a = parseInt ( document.getElementById('numA').value)
	var b = parseInt ( document.getElementById('numB').value)
	var c = parseInt ( document.getElementById('numC').value)
	var sum;
	sum = a + b + c;

	document.getElementById("result").innerHTML = sum;
}
function Check(){
	if (document.getElementById("optionA").checked) {
		alert("correct");
	}
	else{alert("Wrong")}
}