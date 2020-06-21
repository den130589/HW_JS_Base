var y1 = +prompt('enter y1', '');
var y2 = +prompt('enter y2', '');
var x1 = +prompt('enter x1', '');
var x2 = +prompt('enter x2', '');

var k = (y1 - y2) / (x1 - x2);
var b = y2 - k * x2;

document.write('<div>' + 'y = ' + k + 'x' + b + '</div>');