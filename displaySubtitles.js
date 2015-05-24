function startSubtitles(){
	text = document.getElementById("text");
	originalHTML = text.innerHTML;
	text.innerHTML = subtitles[0].text;
	i = 0;
	waitTime = 0;
	j = 0;
	while (i < subtitles.length){
		if (absoluteTiming){
			waitTime = subtitles[i].time;
		}
		else{
			if (i > 0){
				waitTime += subtitles[i-1].time;
			}
		}
		setTimeout(function(){text.innerHTML = tagSubtitles[0].concat(subtitles[j].text,tagSubtitles[1]);j++;},waitTime*msPerTimeUnit);
		i++;
	}
}