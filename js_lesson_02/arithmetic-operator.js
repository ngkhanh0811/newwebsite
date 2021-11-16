var subtotal = (13 + 1) * 5;//tao bien tinh subtotal

var shipping = 8.5 * (13 + 1);//tao bien tinh ship

var total = subtotal + shipping; //tao bien tinh tong subtotal va ship


var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;//in ra man hinh gia tri subtotal

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;//in ra man hinh ship

var elTotal = document.getElementById('total');
elTotal.textContent = total; //in ra man hinh total