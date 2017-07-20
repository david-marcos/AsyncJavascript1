var time = 0;
var timeStart = false;
var timeInterval;

function updateTime(){
	time++;
	document.getElementById("time").innerHTML = time/100;
}

function stopTimer(){
	clearInterval(timeInterval);
	timeStart = false;
}

function clearContent(){
	document.getElementById("time").innerHTML = "0";
	document.getElementById("pastTimes").innerHTML = "";
}

document.getElementById("startStop").addEventListener("click", function(){
	if (!timeStart){
		timeStart = true;
		timeInterval = setInterval(updateTime, 10);
	}
	else{
		stopTimer();
	}
});

document.getElementById("reset").addEventListener("click", function(){
	stopTimer();
	clearContent();
});

document.getElementById("record").addEventListener("click", function(){
	document.getElementById("pastTimes").innerHTML = document.getElementById("pastTimes").innerHTML + time/100 + "<br />";
});