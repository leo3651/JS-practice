///////////////////////////////////
/////// PRACTICE
///////////////////////////////////
const defaultArray = [
  -908, -852, -474, -355, -102, -100, -55, -25, -18, -7, -6, -5, 0, 1, 7, 8, 99,
  101, 122, 147, 5025, 5334, 7410,
];

const getClosestNumbers = function (number, options = defaultArray) {
  let closest = [];

  options.sort((a, b) => a - b);

  for (let i = 1, n = options.length; i < n; i++) {
    if (number >= options[i] && number <= options[i + 1]) {
      if (number - options[i] > options[i + 1] - number)
        closest.push(options[i + 1]);

      if (number - options[i] < options[i + 1] - number)
        closest.push(options[i]);

      if (number - options[i] === options[i + 1] - number) {
        closest.push(options[i]);
        closest.push(options[i + 1]);
      }
    }
  }

  return closest;
};

console.log(getClosestNumbers(90));
console.log(getClosestNumbers(100));
console.log(getClosestNumbers(321, [-12, 12, -22, 33, 333, -333]));

///
arrayA = ["a", "b", "c", "dd", 234, 22, "rc"];
arrayB = ["a", "b2", "c", "dad", "rc", 24, 222];
arrayC = [222, "a", "be", "rc", "dd", 234, 22, "pp"];

const uniqueElOfFirstArr = function (arr1, arr) {
  let uniqueElements = [];
  for (let i = 0, n = arr1.length; i < n; i++) {
    for (let j = 0, k = arr.length; j < k; j++) {
      if (String(arr1[i]) === String(arr[j])) break;
      if (j === k - 1 && String(arr1[i] !== String(arr[j])))
        uniqueElements.push(arr1[i]);
    }
  }
  return uniqueElements;
};

const find = function (a1, a2, a3) {
  const a1UniqueElements = uniqueElOfFirstArr(a1, [...a2, ...a3]);
  const a2UniqueElements = uniqueElOfFirstArr(a2, [...a1, ...a3]);
  const a3UniqueElements = uniqueElOfFirstArr(a3, [...a1, ...a2]);

  let commonElements = a1;
  for (let argument = 1, n = arguments.length; argument < n; argument++) {
    for (let i = 0, n = commonElements.length; i < n; i++) {
      for (let j = 0, m = arguments[argument].length; j < m; j++) {
        if (String(commonElements[i]) === String(arguments[argument][j])) break;
        if (
          j === m - 1 &&
          String(commonElements[i]) !== String(arguments[argument][j])
        ) {
          commonElements[i] = "ForDelete";
        }
      }
    }
  }
  commonElements = commonElements.filter((element) => element !== "ForDelete");

  console.log("In common: ", commonElements);
  console.log("arrayA unique: ", a1UniqueElements);
  console.log("arrayB unique: ", a2UniqueElements);
  console.log("arrayC unique: ", a3UniqueElements);
};

find(arrayA, arrayB, arrayC);
