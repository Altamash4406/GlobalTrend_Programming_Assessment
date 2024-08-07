// Q1
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 5 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// Q2
function evaluateExpression(expression) {
  let currentNumber = 0;
  let result = 0;
  let sign = 1;
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char)) {
      currentNumber = currentNumber * 10 + parseInt(char, 10);
    } else if (char === "+") {
      result += sign * currentNumber;
      currentNumber = 0;
      sign = 1;
    } else if (char === "-") {
      result += sign * currentNumber;
      currentNumber = 0;
      sign = -1;
    }
  }

  result += sign * currentNumber;

  return result;
}

console.log(evaluateExpression("12+34-5+6"));
console.log(evaluateExpression("1+2-3+4"));
console.log(evaluateExpression("10-2+3-4+5"));

// Q3
function flattenArray(nestedArray) {
  const flattenedArray = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      element.forEach(flatten);
    } else {
      flattenedArray.push(element);
    }
  }

  nestedArray.forEach(flatten);
  return flattenedArray;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));
console.log(flattenArray([[1, 2, [3]], 4]));
console.log(flattenArray([[[1], 2], 3, [4, [5]]]));

// Q4
function areAnagrams(str1, str2) {
  const sortString = (str) => str.split("").sort().join("");
  return sortString(str1) === sortString(str2);
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("evil", "vile"));
console.log(areAnagrams("fluster", "restful"));
console.log(areAnagrams("example", "samples"));

// Q5
function removeDuplicates(array) {
  return array.filter((value, index) => array.indexOf(value) === index);
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(removeDuplicates(["a", "b", "a", "c", "b"]));
console.log(removeDuplicates([1, 1, 1, 1, 1]));
console.log(removeDuplicates([]));
console.log(removeDuplicates([1, 2, 3, 4, 5]));

// Q6
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is awesome"));
console.log(capitalizeWords("capitalize every word"));
console.log(capitalizeWords("one"));

// Q7
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log(fibonacci(10));
console.log(fibonacci(5));

// Q8
class HashMap {
  constructor() {
    this.map = {};
  }

  put(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  remove(key) {
    if (this.map.hasOwnProperty(key)) {
      delete this.map[key];
    }
  }
}

const map = new HashMap();
map.put("a", 1);
map.put("b", 2);
map.put("c", 3);

console.log(map.get("a"));
console.log(map.get("b"));
console.log(map.get("c"));

map.remove("b");
console.log(map.get("b"));

// Q9
function filterOutEvenNumbers(array) {
  return array.filter((num) => num % 2 !== 0);
}

console.log(filterOutEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(filterOutEvenNumbers([2, 4, 6, 8, 10]));
console.log(filterOutEvenNumbers([1, 3, 5, 7, 9]));

// Q10
//Same as Question number 6.
function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log(capitalizeWords("hello world"));
console.log(capitalizeWords("javascript is awesome"));
console.log(capitalizeWords("capitalize every word"));
console.log(capitalizeWords("one"));
