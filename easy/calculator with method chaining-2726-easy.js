class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(value) {
        this.value += value;
        return this;
    }

    subtract(value) {
        this.value -= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }

    divide(value) {
        if (value === 0) this.value = "Division by zero is not allowed" ;
        else this.value /= value;
        return this;
    }

    power(value) {
        this.value **= value;
        return this;
    }

    getResult() {
        return this.value;
    }
}

const result = new Calculator(20).divide(0).getResult();
const results = new Calculator(26).divide(2).getResult();

console.log("Result:", result); // "Division by zero is not allowed"
console.log("Results:", results); // 13
