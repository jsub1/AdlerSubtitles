<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="stylesheet" type = "text/css" href = "../style.css" />
<script type="text/javascript" src="../config.json"></script>
<title>Subtitles</title>
</head>
<body>
<div id = "main">
<?php
$fileName = "startSubtitles.txt";
date_default_timezone_set ("America/Chicago");
$action = $_POST['action'];
$formString = '<form action = "index.php" method = "post"><input type="submit" value = "Return to Start" class = "Button" /></form>';
if ($action == "signal"){
	$fil = fopen($fileName,"w");
	fwrite($fil,(string)(microtime(true)*1000));
	fclose($fil);
	echo "<p>Subtitles have been started at ".date("h:i a").".</p>";
	echo ($formString);
}
else {
	echo "<p>Subtitles have not been started yet.</p>";
	echo ($formString);
}
?>
</div>
<script>
document.body.style.color = textColor;
document.body.style.fontSize = textSize;
document.body.style.background = backgroundColor;
document.body.style.fontFamily = font;
</script> 
</body>
</html>