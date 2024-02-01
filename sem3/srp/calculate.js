// Этот класс следует принципу SRP, потому что он имеет только одну ответственность - выполнять математические операции. Класс не содержит логику, не связанную с математическими операциями, что упрощает его поддержку и улучшает его читаемость.

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
}
