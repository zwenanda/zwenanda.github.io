var text = "Happy Anniversary Thel <3";

	var textArray = text.split('');

	var loopTime;

	function looper(){

		if (textArray.length > 0){

			document.getElementById("typetext").innerHTML += textArray.shift();

		}else{

			clearTimeout(loopTime);

		}

		loopTime = setTimeout(looper,150);

	}

looper();