/* global module */

const addBigNumbers = (number1, number2) => {
    const addLastDigit = (number1, number2, carry) => {
        const number1LSD = number1
                ? +(number1.substr(number1.length - 1, 1))
                : 0,
            number2LSD = number2
                ? +(number2.substr(number2.length - 1, 1))
                : 0,
            result = getSum(number1LSD, number2LSD, carry),
            newCarry = getCarry(number1LSD, number2LSD, carry);

        return !number1 && !number2
            ? (carry || '')
            : addLastDigit(
                number1.substr(0, number1.length - 1),
                number2.substr(0, number2.length - 1),
                newCarry
            ) + result;
    };

    const getSum = (a, b, c) => {
        const d = (a + b + c).toString();

        return (d.length > 1)
            ? d[1]
            : d;
    };

    const getCarry = (a, b, c) => {
        const d = (a + b + c).toString();

        return (d.length > 1)
            ? +(d[0])
            : 0;
    };

    return addLastDigit(number1, number2, 0);
};

const scaleBigNumber = (number, scale) => {
    if (!scale) {
        return '0';
    }

    let scaledNumber = '0';

    for (let i = 0; i < scale; i++) {
        scaledNumber = addBigNumbers(scaledNumber, number);
    }

    return scaledNumber;
};

const multiplyBigNumbers = (number1, number2) => {
    let finalResult = '0',
        zeroPaddingLength,
        currentScale,
        currentDigit;

    const getZeroPaddings = count => {
        let padding = '';

        for (let i = 0; i < count; i++) {
            padding = padding + '0';
        }

        return padding;
    };

    for (let i = number2.length - 1; i >= 0; i--) {
        currentDigit = +(number2.substr(i, 1));
        zeroPaddingLength = (number2.length - 1) - i;
        currentScale = scaleBigNumber(number1, currentDigit);
        finalResult = addBigNumbers(
            finalResult,
            currentScale + getZeroPaddings(zeroPaddingLength)
        );
    }

    return finalResult;
};

const raiseBigNumber = (number, power) => {
    if (!power) {
        return '1';
    }

    let raisedNumber = '1';

    for (let i = 0; i < power; i++) {
        raisedNumber = multiplyBigNumbers(raisedNumber, number);
    }

    return raisedNumber;
};

const fibonacci = term => {
    return (term === 1 || term === 2)
        ? 1
        : fibonacci(term - 1) + fibonacci(term - 2);
};

const fibonacciMemoizable = function (term) {
    const func = (typeof(this) === 'function')
        ? this
        : fibonacciMemoizable;

    return (term === 1 || term === 2)
        ? 1
        : func.call(this, term - 1) + func.call(this, term - 2);
};

const fibonacciMemoizableBig = function (term) {
    const func = (typeof(this) === 'function')
        ? this
        : fibonacciMemoizableBig;

    return (term === 1 || term === 2)
        ? '1'
        : addBigNumbers(func.call(this, term - 1), func.call(this, term - 2));
};

const factorial = term => {
    return (term < 2)
        ? 1
        : term * factorial(term - 1);
};

const factorialMemoizable = term => {
    const func = (typeof(this) === 'function')
        ? this
        : factorialMemoizable;

    return (term < 1)
        ? 1
        : term * func.call(this, term - 1);
};

const Memoizer = function (func) {
    const lookUp = [];

    const getValue = input => {
        if (lookUp[input]) {
            return lookUp[input];
        }

        const value = func.call(getValue, input);
        lookUp[input] = value;

        return value;
    };

    return {
        getValue: getValue
    };
};

const MemoizerMultiInputs = function (func) {
    const lookUp = {},
          getValue = inputs => {
              const inputsInString = inputs.join('-');

              if (lookUp[inputsInString]) {
                  return lookUp[inputsInString];
              }

              const value = func.apply(getValue, inputs);
              lookUp[inputsInString] = value;

              return value;
          };

    return {
        getValue: getValue
    };
};

const getPrimesBelowNumber = limit => {
    const numbers = [];

    for (let i = 0; i < limit; i++) {
        numbers.push(i);
    }

    numbers[1] = 0;

    for (let i = 2; i < limit; i++) {
        for (let j = i * i; j < limit; j = j + i) {
            if (j % i === 0) {
                numbers[j] = 0;
            }
        }
    }

    return numbers;
};

module.exports = {
    addBigNumbers,
    scaleBigNumber,
    multiplyBigNumbers,
    raiseBigNumber,
    factorial,
    factorialMemoizable,
    fibonacci,
    fibonacciMemoizable,
    fibonacciMemoizableBig,
    Memoizer,
    MemoizerMultiInputs,
    getPrimesBelowNumber,
};
