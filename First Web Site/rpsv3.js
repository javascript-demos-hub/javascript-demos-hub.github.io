function intro (){
	alert("Welcome! This  version of the classic fist-waving Rock, Paper, Scissors schoolyard game needs no further introduction, so jump right in!")
	alert("You will be playing against the computer. Enjoy :D")}

function userDecision (){
	var userChoice = prompt("Enter rock, paper or scissors.");
	return userChoice;
}

function checkUserDecision (userChoice){
	if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors"){
			return userChoice;
		}else if (userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors" || userChoice !== null){
				alert ("Invalid input. Make sure to spell your choice correctly. :)");
				return "invalid syntax";
		}else if (userChoice === null){
				return userChoice;}
}

function computerDecision (){
	var computerChoice = Math.random();
		if (computerChoice <= 0.34) {
	    	computerChoice = "rock";
		} else if (computerChoice <= 0.67){
		    computerChoice = "paper";
		} else {computerChoice = "scissors"}
	return computerChoice;
}

function compare (userChoice,computerChoice){
	if (userChoice === computerChoice) {
		return ("It's a tie!");
	} else if (userChoice === "rock" && computerChoice === "paper") {
	    return ("Computer chose paper. You lose!");
	} else if (userChoice === "rock" && computerChoice === "scissors") {
	    return ("Computer chose scissors. You win!")
	} else if (userChoice === "paper" && computerChoice === "rock") {
	    return ("Computer chose rock. You win!");
	} else if (userChoice === "paper" && computerChoice === "scissors") {
	    return ("Computer chose scissors. You lose!");
	} else if (userChoice === "scissors" && computerChoice === "rock") {
	    return ("Computer chose rock. You lose!");
	} else if (userChoice === "scissors" && computerChoice === "paper") {
		return ("Computer chose paper. You win!")
   	} else {return ("No matches found")}
 }

function outro (){
	alert("Exiting game. Thank you for your time.")
}

function playGame (){
	intro();
	while(true){
		userChoice = userDecision();
		if (userChoice===null) {break};
		computerChoice = computerDecision();
		if (checkUserDecision(userChoice)==="invalid syntax") {continue}
		compare (userChoice,computerChoice);
		var result = compare(userChoice,computerChoice);
		alert(result)
	}
	outro();
}