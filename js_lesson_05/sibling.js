var startItem = document.getElementById('two');
var previousItem = startItem.previousSibling;
var nextItem = startItem.nextSibling;

previousItem.className = 'complete';
nextItem.className = 'cool';