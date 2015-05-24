function startSubtitles(){
	text = document.getElementById("text");
	originalHTML = text.innerHTML;
	text.innerHTML = subtitles[0].text;
	i = 0;
	waitTime = 0;
	j = 0;
	while (i < subtitles.length){
		setTimeout(function(){text.innerHTML = "<p>".concat(subtitles[j].text,"</p>");j++;},subtitles[i].time*1000);
		i++;
	}
}