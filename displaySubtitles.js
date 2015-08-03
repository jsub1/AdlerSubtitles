j = 0;
timestamps = [];
function startSubtitles(startTime){
	text = document.getElementById("text")
	originalHTML = text.innerHTML
	text.innerHTML = initalMessage;
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
		var now = new Date();
		if (now.getTime()>timestamps[j]){
			text.innerHTML = subtitles[j].text;
			j++;
		}
		else if (timestamps[j] - now.getTime() < transitionDuration * msPerTimeUnit){
			text.innerHTML = transitionHTML;
		}
		if (j == timestamps.length)
		{
			clearInterval(intervalID);
		}
	}
