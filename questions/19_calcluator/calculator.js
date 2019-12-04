class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {

    this.value = this.value + num;
    return this.value;
  }
  subtract(num ) {
    this.value=  this.value - num;
    return this.value;
  }q
  divide(num) {
    this.value=  this.value / num;
    return this.value;
  }
  multiply(num) {
    this.value=  this.value * num;
    return this.value;
  }
  clear() {
      this.value = 0
      return this.value;
  }
}

module.exports = { Calculator };
