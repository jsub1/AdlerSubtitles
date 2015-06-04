function startSubtitles(startTime){
	console.log(startTime);
	text = document.getElementById("text");
	originalHTML = text.innerHTML = initalMessage;
	i = 0;
	waitTime = initalDelay;
	j = 0;
	offset = new Date().getTime() - startTime;
	while (i < subtitles.length){
		if (absoluteTiming){
			waitTime = subtitles[i].time;
		}
		else{
			if (i > 0){
				waitTime += subtitles[i-1].time;
			}
		}
		setTimeout(function(){text.innerHTML = tagSubtitles[0].concat(subtitles[j].text,tagSubtitles[1]);j++;},Math.max(waitTime*msPerTimeUnit-offset,1));
		i++;
	}
}