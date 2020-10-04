//Calculator

//display
var displayContent = [];

//kepyad

//operationkeys
function operatorPlus ( ) {
	if (displayContent.slice(-1) != '+' && displayContent.slice(-1) != '/' && displayContent.slice(-1) != '*' && displayContent.slice(-1) != '-' && displayContent.slice(-1) != '') {
		if (displayContent.length < 13) {
		displayContent.push('+');
		let calculation = displayContent.join('');
		document.getElementById('calculator_display').innerHTML = calculation;}
	}
}
function operatorMinus ( ) {
	if (displayContent.slice(-1) != '+' && displayContent.slice(-1) != '/' && displayContent.slice(-1) != '*' && displayContent.slice(-1) != '-') {
		if (displayContent.length < 13) {
		displayContent.push('-');
		let calculation = displayContent.join('');
		document.getElementById('calculator_display').innerHTML = calculation;}
	}
}
function operatorTimes ( ) {
	if (displayContent.slice(-1) != '+' && displayContent.slice(-1) != '/' && displayContent.slice(-1) != '*' && displayContent.slice(-1) != '-' && displayContent.slice(-1) != '') {
		if (displayContent.length < 13) {
		displayContent.push('*');
		let calculation = displayContent.join('');
		document.getElementById('calculator_display').innerHTML = calculation;}
	}
}
function operatorDivide ( ) {
	if (displayContent.slice(-1) != '+' && displayContent.slice(-1) != '/' && displayContent.slice(-1) != '*' && displayContent.slice(-1) != '-' && displayContent.slice(-1) != '') {
		if (displayContent.length < 13) {
		displayContent.push('/');
		let calculation = displayContent.join('');
		document.getElementById('calculator_display').innerHTML = calculation;}
	}
}

//numpad keys
function numSeven ( ) {
	if (displayContent.length < 13) {
	displayContent.push('7');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numEight ( ) {
	if (displayContent.length < 13) {
	displayContent.push('8');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numNine ( ) {
	if (displayContent.length < 13) {
	displayContent.push('9');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numFour ( ) {
	if (displayContent.length < 13) {
	displayContent.push('4');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numFive ( ) {
	if (displayContent.length < 13) {
	displayContent.push('5');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numSix ( ) {
	if (displayContent.length < 13) {
	displayContent.push('6');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numOne ( ) {
	if (displayContent.length < 13) {
	displayContent.push('1');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numTwo ( ) {
	if (displayContent.length < 13) {
	displayContent.push('2');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numThree ( ) {
	if (displayContent.length < 13) {
	displayContent.push('3');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function numZero ( ) {
	if (displayContent.length < 13) {
	displayContent.push('0');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}
function decimalPoint ( ) {
	if (displayContent.length < 13) {
	displayContent.push('.');
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;}
}

//Special Keys
function clearAll ( ) {
	displayContent = [];
	document.getElementById('calculator_display').innerHTML = displayContent;
}
function deleteLast ( ) {
	displayContent.pop();
	let calculation = displayContent.join('');
	document.getElementById('calculator_display').innerHTML = calculation;
}
function solve ( ) {
	let calculation = displayContent.join('');
	calculation = eval (calculation);
	document.getElementById('calculator_display').innerHTML = calculation;
	displayContent = [];
	displayContent.push(calculation);
	console.log(displayContent);
}
