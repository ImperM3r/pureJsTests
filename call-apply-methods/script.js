/*==========================================================================================
=            Изменение значения контекста this, при помощи методов call и apply            =
==========================================================================================*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function() {
    return this.firstName + " " + this.lastName;
  }
}

var personCreatedWithConstructor = new Person("Sergey", "Laptev");
console.log(personCreatedWithConstructor.getFullName());

var personModifiedWithCallMethod, personModifiedWithApplyMethod = {
  age: 21,
  height: 184
}
Person.call(personModifiedWithCallMethod, "Ivan", "Ivanov");
console.log(personModifiedWithCallMethod.getFullName());