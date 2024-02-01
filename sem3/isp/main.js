/*
В этом примере класс `Calculator` зависит только от интерфейса `Addition`, представляющего операцию сложения, и не зависит от методов операции умножения. Это соответствует принципу ISP, поскольку клиент (в данном случае `Calculator`) использует только те методы, которые ему необходимы, а не зависит от ненужных методов других интерфейсов.
*/

// Интерфейс, представляющий операцию сложения
class Addition {
  add(a, b) {
    throw new Error("add method not implemented");
  }
}

// Интерфейс, представляющий операцию умножения
class Multiplication {
  multiply(a, b) {
    throw new Error("multiply method not implemented");
  }
}

// Класс, реализующий операцию сложения
class SimpleAddition {
  add(a, b) {
    return a + b;
  }
}

// Класс, реализующий операцию умножения
class SimpleMultiplication {
  multiply(a, b) {
    return a * b;
  }
}

// Класс, использующий операцию сложения
class Calculator {
  constructor(addition) {
    this.addition = addition;
  }

  calculate(a, b) {
    return this.addition.add(a, b);
  }
}

// Использование
const simpleAddition = new SimpleAddition();
const calculator = new Calculator(simpleAddition);
console.log(calculator.calculate(5, 3)); // Output: 8
