/*
В этом примере класс `Square` является подтипом класса `Rectangle`, и мы можем использовать объекты `Square` везде, где ожидается объект `Rectangle`, не изменяя ожидаемого поведения программы. Это соответствует принципу LSP, так как подтип можно использовать вместо базового типа, не нарушая функциональности программы.
*/

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function printArea(rectangle) {
  console.log(rectangle.getArea());
}

const rectangle = new Rectangle(3, 4);
const square = new Square(5, 5);

printArea(rectangle); // Output: 12
printArea(square); // Output: 25
