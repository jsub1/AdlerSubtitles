j = 0;
timestamps = [];
function startSubtitles(startTime){
	text = document.getElementById("text");
	originalHTML = text.innerHTML = initalMessage;
	i = 0;
	timestamps[0] = startTime + initalDelay*msPerTimeUnit
	while (i < subtitles.length){
		if (absoluteTiming){
			timestamps[i] = startTime+subtitles[i].time*msPerTimeUnit;
		}
		else{
			if (i > 0){
				timestamps[i] = timestamps[i-1]+subtitles[i-1].time*msPerTimeUnit;
			}
		}
		i++;
	}
	interalID = setInterval(checkTime,1);
}
function checkTime(){
	console.log(j);
		if (new Date().getTime()>timestamps[j]){
			text.innerHTML = subtitles[j].text;
			j++;
			console.log(j);
		}
		if (j == timestamps.length)
		{
			clearInterval(intervalID);
		}
	}
