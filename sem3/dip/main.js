/*
В этом примере класс `MathOperation` зависит от абстракции `AdditionOperation`, представляющей операцию сложения, тогда как конкретная реализация операции сложения (`SimpleAddition`) находится нижнем уровне и не зависит от класса `MathOperation`. Таким образом, мы следуем принципу DIP, разделяя абстракции и конкретные реализации и управляя зависимостями между ними.
*/


// Абстракция, представляющая операцию сложения
class AdditionOperation {
  operate(a, b) {
    return a + b;
  }
}

// Абстракция, использующая операцию сложения для выполнения математических вычислений
class MathOperation {
  constructor(operation) {
    this.operation = operation;
  }

  performOperation(a, b) {
    return this.operation.operate(a, b);
  }
}

// Класс, представляющий конкретную операцию сложения
class SimpleAddition {
  operate(a, b) {
    return a + b;
  }
}

// Использование
const simpleAddition = new SimpleAddition();
const mathOperation = new MathOperation(simpleAddition);
console.log(mathOperation.performOperation(5, 3)); // Output: 8
