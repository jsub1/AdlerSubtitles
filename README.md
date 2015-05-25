This project is designed to display subtitles at predeteremined intervals for BYOD (Bring Your Own Device) captioning. There is a JSON file that is an array of subtitle that have both a text and time properties. The script of the Adler Planetarium's Cosmic Wonder is provided as an example in CosmicWonder.json. 

config.json options:

textColor: Sets the color of the body text.

textSize: Sets the size of the body text.

backgroundColor: Sets the background color.

font: Sets the font family for the web page.

initalMessage: HTML to display between the time the button is pressed and the time the first subtitle appears.
initalDelay: The time to wait before the first subtitle appears. This setting is only used if relative timing is used (see absoluteTiming).

absoluteTiming: Boolean that determines if absolute or relative timing is used. If true, the time property of each subtitle is the time between the button being pressed and the subtitle appering (absolute timing). If false, the time property of each line is the duration of the line on the screen (relative timing).

tagSubtitles: An array with two strings. Each subtitle is inserted between the first and second string before being displayed.

msPerTimeUnit: The number of milliseconds per time unit used. The default vale is 1000 because the default time unit is seconds.
