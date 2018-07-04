javascript:
try{
	document.getElementsByTagName('video')[0].webkitSetPresentationMode('picture-in-picture');
} catch(e) {
	document.getElementsByTagName('iframe')[0].contentDocument.getElementsByTagName('video')[0].webkitSetPresentationMode('picture-in-picture');
}