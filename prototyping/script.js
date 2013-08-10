/*===================================================
=            Реализация прототипирования            =
===================================================*/

function Product(name) {
  this.name = name;
}
Product.prototype.name = "iPad";
Product.prototype.company = "Apple";

var tab10 = new Product("Galaxy tab 10.1");
console.log(tab10.company);