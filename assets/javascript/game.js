		
		var wordsUsed = [];
		var	computerGuess;
		var remainingGuess = 10;
		var userInput = [];
		var	wins = 0;
		var loss = 0;
		var guess = [];

	var selection = [

			"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
		];


		function randomSelection(){
			computerGuess = selection[Math.floor(Math.random()*26)+1];
			console.log(computerGuess);
			
		}

randomSelection();

		document.onkeyup = function(event){
			userInput = event.key;
			console.log (userInput);


			if (userInput === computerGuess){
				wins === wins++;
				remainingGuess = 10;
				wordsUsed =[];
				randomSelection();
				console.log(wins) 
			}
			else{
				remainingGuess == remainingGuess--;
				wordsUsed = wordsUsed + userInput + ","
			}



			if (remainingGuess === 0){
				loss === loss++;
				remainingGuess = 10;
				wordsUsed = [];
				randomSelection();
			}

			document.querySelector("#w").innerHTML = "Wins =" + wins;
		
			document.querySelector("#l").innerHTML = "Loss =" + loss;
			
			document.querySelector("#r").innerHTML = "Remaining Guess =" + remainingGuess;
			
			document.querySelector("#g").innerHTML = "Guess =" + wordsUsed;

		}
