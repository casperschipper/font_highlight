# What is this ?

A snippet of Javascript to help find fonts in https://researchcatalogue.net expositions.

# How to use

* Open the exposition in your browser (can also be the workspace editor).
* Open the developer console (in chrome the dots in the right-top corner > More Tools > Developer Tools 
* Make sure you are in the *console* tab.
* Paste the javascript snippet
https://raw.githubusercontent.com/casperschipper/font_highlight/main/font_check.js

It will highlight all fonts which are not provided by RC itself in red and mark text a yellow background.

# How to avoid the problem?

* You can deselect a font in both text and HTML tools by selecting the text and selecting option "Font Family". This is the top option.
* When copying formatted text, use paste matching style (cmd+shift+v on MacOS or ctrl+shift+v on PC/Linux), so fonts are not copied.
* Import your word content through the word import (https://guide.researchcatalogue.net/#import-word-documents-using-simple-media-upload)
* Convert your text to plain text in basic text editor like TextEdit (MacOS), Notebook (Windows) or Gedit (Linux).
* If you are not afraid of seeing a little bit of HTML, Convert simple text tools to HTML tools, click HTML button to inspect the HTML and remove all font-family: UnwantedFontname; statements.)

