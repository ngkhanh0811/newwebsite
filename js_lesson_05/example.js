var list = document.getElementsByTagName('ul')[0];

var newItemlast = document.createElement('li');
var newTextLast = document.createTextNode('cream');
newItemlast.appendChild(newTextLast);
list.appendChild(newItemlast);

var newItemFirst = document.createElement('li');
var newTextFirst = document.createTextNode('Kale');
newItemFirst.appendChild(newTextFirst);
list.appendChild(newItemFirst);

var listItems = document.querySelectorAll('li');
var i;
for (i = 0; i< listItems.length; i++){
    listItems[i].className = 'cool';
}

var heading = document.querySelector('h2');
var headingText = heading.firstChild.nodeValue;
var totalItems = listItems.length;
var newHeading = headingText + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;