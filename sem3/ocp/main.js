/*
В данном примере класс `Discount` является абстракцией, предоставляющей метод `applyDiscount`, который может быть переопределен в производных классах `FlatDiscount` и `PercentageDiscount`. Мы можем легко добавлять новые типы скидок, расширяя поведение без изменения существующего кода, что соответствует принципу OCP.
*/

class Discount {
  applyDiscount(price) {
    throw new Error("applyDiscount method not implemented");
  }
}

class FlatDiscount extends Discount {
  constructor(discountAmount) {
    super();
    this.discountAmount = discountAmount;
  }

  applyDiscount(price) {
    return price - this.discountAmount;
  }
}

class PercentageDiscount extends Discount {
  constructor(discountPercentage) {
    super();
    this.discountPercentage = discountPercentage;
  }

  applyDiscount(price) {
    return price * (1 - this.discountPercentage / 100);
  }
}

// Использование
function calculateTotalPrice(price, discount) {
  return discount.applyDiscount(price);
}

const flatDiscount = new FlatDiscount(10);
const percentageDiscount = new PercentageDiscount(20);

console.log(calculateTotalPrice(100, flatDiscount)); // Output: 90
console.log(calculateTotalPrice(100, percentageDiscount)); // Output: 80
