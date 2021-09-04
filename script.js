//------------------------------------------------------------------------
//  RENDER JAVASCRIPT CODE
//
//------------------------------------------------------------------------
const showCode = (container) => {
  var show = function (elem) {
    elem.style.display = "block";
  };

  var hide = function (elem) {
    elem.style.display = "none";
  };

  var toggle = function (elem) {
    // If the element is visible, hide it
    if (window.getComputedStyle(elem).display === "block") {
      hide(elem);
      return;
    }
    // Otherwise, show it
    show(elem);
  };

  // Listen for click events
  document.addEventListener(
    "click",
    function (event) {
      // Make sure clicked element is our toggle
      if (!event.target.classList.contains(container)) return;

      // Prevent default link behavior
      event.preventDefault();

      // Get the content
      var content = document.querySelector(event.target.hash);
      if (!content) return;

      // Toggle the content
      toggle(content);
    },
    false
  );
};

//------------------------------------------------------------------------
//  1. NUMBERS | Divide number 1 to number 2. If one of the two inputs are not numbers show an error message. Also If number 2 is 0
// show an error message.Else show the result.
//------------------------------------------------------------------------
function divide(number1, number2) {
  if (isNaN(number2) || isNaN(number1)) {
    return "It's not a number.";
  } else if (number2 === 0) {
    return "The second number cannot be 0.";
  } else {
    return number1 / number2;
  }
}

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", () => {
  const number = Number(document.getElementById("number-1").value);
  const divideTo = Number(document.getElementById("number-2").value);

  const resultCalculate = document.getElementById("result-calculate");

  resultCalculate.innerHTML = divide(number, divideTo);
});

showCode("toggle-n1");

//------------------------------------------------------------------------
//  2. NUMBERS | You need to generate a random number between 1 and 10 when this page is loaded. In the following
// input the user should guess the random number.When the number is guessed you should show the tries number.
// If the number is not guessed you need to show the message "Try again".If in the input is not introduced a
// number you need to inform the user.
//------------------------------------------------------------------------
let userNumber = Math.floor(Math.random() * 11);
let tries = 0;

function guessTheNumber(number) {
  if (Number(userNumber) === Number(number)) {
    return `You have guessed the number in ${tries} tries`;
  } else {
    tries++;
    return `Try again!`;
  }
}

const verifyGeneratedNumber = document.getElementById(
  "verify-generated-number"
);
verifyGeneratedNumber.addEventListener("click", () => {
  const userNumber = document.getElementById("user-number").value;
  const resultVerifyNumber = document.getElementById("result-verify-number");
  resultVerifyNumber.innerHTML = guessTheNumber(userNumber);
});

showCode("toggle-n2");

//------------------------
/// 3. NUMBERS | Recursivity Sum of all numbers from zero to n, where n is given from keyboard.
//------------------------
function sumFor(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumWhile(n) {
  let i = 1;
  let sum = 0;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

function sumR1(n) {
  if (n === 0) {
    return 0;
  } else {
    return n + sumR1(n - 1);
  }
}

function sumR2(n) {
  if (n === 0) {
    return;
  } else {
    sumR2(n - 1);
    return sumR2("*".repeat(n));
  }
}

const buttonSumFor = document.getElementById("sum-for-button");
buttonSumFor.addEventListener("click", () => {
  const sum1 = Number(document.getElementById("sum-input").value);
  const sum1Container = document.getElementById("sum-all-container");
  sum1Container.innerHTML = sumFor(sum1);
});

const buttonSumWhile = document.getElementById("sum-while-button");
buttonSumWhile.addEventListener("click", () => {
  const sum2 = Number(document.getElementById("sum-input").value);
  const sum2Container = document.getElementById("sum-all-container");
  sum2Container.innerHTML = sumWhile(sum2);
});

const buttonSumR1 = document.getElementById("sum-r1-button");
buttonSumR1.addEventListener("click", () => {
  const sum3 = Number(document.getElementById("sum-input").value);
  const sum3Container = document.getElementById("sum-all-container");
  sum3Container.innerHTML = sumR1(sum3);
});

const buttonSumR2 = document.getElementById("sum-r2-button");
buttonSumR2.addEventListener("click", () => {
  const sum4 = document.getElementById("sum-input").value;
  const sum4Container = document.getElementById("sum-all-container");
  sum4Container.innerHTML = sumR2(sum4);
});

showCode("toggle-n3");

//------------------------------------------------------------------------
//  4. OTHERS | Read the year, month and day for 2 persons and show a message saying which person is born first. Show error messages
// if there is no data in all inputs, if there are not numbers in all inputs.
//------------------------------------------------------------------------
function compareDates(year1, month1, day1, year2, month2, day2) {
  let myDate1 = new Date(year1, month1, day1);
  let myDate2 = new Date(year2, month2, day2);

  if (myDate1.getTime() > myDate2.getTime()) {
    return "First person is BIGGER than the second person.";
  } else if (myDate1.getTime() < myDate2.getTime()) {
    return "First person in SMALLER than the second person.";
  } else {
    return "First person has the same age as the second person.";
  }
}

const compareDatesButton = document.getElementById("compare-dates");
compareDatesButton.addEventListener("click", () => {
  const year1 = Number(document.getElementById("year1").value);
  const month1 = Number(document.getElementById("month1").value);
  const day1 = Number(document.getElementById("day1").value);

  const year2 = Number(document.getElementById("year2").value);
  const month2 = Number(document.getElementById("month2").value);
  const day2 = Number(document.getElementById("day2").value);

  const resultCompareDates = document.getElementById("result-compare-dates");
  resultCompareDates.innerHTML = compareDates(
    year1,
    month1,
    day1,
    year2,
    month2,
    day2
  );
});

showCode("toggle-n4");

//------------------------------------------------------------------------
//  1. STRINGS | In the following input type a word and add it to the given text.
//------------------------------------------------------------------------
let myText = "";

function addWordToPhrase(word) {
  myText += word;
  return myText;
}

const addWordButton = document.getElementById("add-word");
addWordButton.addEventListener("click", () => {
  const word = document.getElementById("word");
  resultAddedText = document.getElementById("added-text");
  resultAddedText.innerHTML = addWordToPhrase(word.value);
  word.value = "";
});

showCode("toggle-s1");

//------------------------------------------------------------------------
//  2. STRINGS | FIND THE LONGEST WORD
//------------------------------------------------------------------------
function findLongestWord(text) {
  var textSplit = text.split(" ");
  var longestWord = "";

  for (var i = 0; i < textSplit.length; i++) {
    if (textSplit[i].length > longestWord.length) {
      longestWord = textSplit[i];
    }
  }
  return `The longest word is ${longestWord}`;
}

const buttonLong = document.getElementById("long-word-button");
buttonLong.addEventListener("click", () => {
  const yourText = document.getElementById("long-word-input").value;
  const longWord = document.getElementById("long-word-container");
  longWord.innerHTML = findLongestWord(yourText);
});

showCode("toggle-s2");

//------------------------------------------------------------------------
//  3. STRINGS
//------------------------------------------------------------------------
function reverseText(textRev) {
  let flip = textRev.split("").reverse().join("");
  // let flip = text.split('').sort().join(''); // in ordine alfabetica
  return flip;
}

const buttonReverse = document.getElementById("reverse-text-button");
buttonReverse.addEventListener("click", () => {
  const myText = document.getElementById("reverse-text-input").value;
  const revText = document.getElementById("reverse-text-container");
  revText.innerHTML = reverseText(myText);
});

showCode("toggle-s3");

//------------------------------------------------------------------------
//  4. STRINGS
//------------------------------------------------------------------------

// VERSION 1
function reverseEachWord(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}
// ARGUMENT = the people => split1 ['the', 'people'] -> rev1 ['people, 'the'] => join1 'peoplethe'
// => split2['peoplethe'] => rev2 = ['ehtelpoep'] => join2 = eht elpoep

// ARGUMENT = the people => split1 ['thepeople'] -> rev1 ['ehtelpoep'] => join1 'ehtelpoep'
// => split2['ehtelpoep'] => rev2 = ['thepeople'] => join2 = eht elpoep

// VERSION 2
// function reverseEachWord(str) {
//   let reversedWord = "";
//   let reversedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       reversedWord = str[i] + reversedWord;
//     } else {
//       reversedStr += reversedWord + " ";
//       reversedWord = "";
//     }
//   }
//   return reversedStr + reversedWord;
// }

const buttonReverseWord = document.getElementById("reverse-word-button");
buttonReverseWord.addEventListener("click", () => {
  const reverseWord = document.getElementById("reverse-word-input").value;
  const rev = document.getElementById("reverse-word-container");
  rev.innerHTML = reverseEachWord(reverseWord);
});

showCode("toggle-s4");

//------------------------------------------------------------------------
//  5. STRINGS
//------------------------------------------------------------------------
function capitalLetter(letter) {
  lett = letter.split(" ");

  for (i = 0; i < lett.length; i++) {
    lett[i] = lett[i].charAt(0).toUpperCase(0) + lett[i].slice(1);
  }
  let string = lett.join(" ");
  return string;
}

const buttonCapital = document.getElementById("capital-letter-button");
buttonCapital.addEventListener("click", () => {
  const letterCapital = document.getElementById("capital-letter-input").value;
  const capital = document.getElementById("capital-letter-container");
  capital.innerHTML = capitalLetter(letterCapital);
});

showCode("toggle-s5");

//------------------------------------------------------------------------
//  6. STRINGS
//------------------------------------------------------------------------
function character(size, value) {
  let textFinal = "";
  const listOfCharacters = [];

  for (let i = 0; i < size; i++) {
    //STRING
    // textFinal += value;

    //LIST
    textFinal = value + textFinal;
    listOfCharacters.push(value);
  }

  const myBox = document.getElementById("iterate-string-container");

  if (isNaN(size)) {
    myBox.innerText = "It is not a number";
  } else {
    myBox.innerText = textFinal;
  }

  return listOfCharacters + " " + textFinal;
}

const buttonChar = document.getElementById("iterate-string-button");
buttonChar.addEventListener("click", () => {
  const char = document.getElementById("char-input").value;
  const size = Number(document.getElementById("size-input").value);
  const capital = document.getElementById("iterate-string-container");
  capital.innerHTML = character(size, char);
});

showCode("toggle-s6");

//------------------------------------------------------------------------
//  7. STRINGS
//------------------------------------------------------------------------

// VERSION 1
// function detectSubstring(comment) {
//     let start = comment.startsWith('Can someone explain');
//     return start
// }

// VERSION 2
// function detectSubstring(comment) {
//     return (comment.indexOf('Can someone explain') === 0);
// }

// VERSION 3
// function detectSubstring(s, starter) {
//     for (var i = 0, cur_c; i < starter.length; i++) {
//         cur_c = starter[i];
//         if (s[i] !== starter[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// VERSION 4
function detectSubstring(comment) {
  // let first = "Can someone explain";
  let first = "Can someone explain";

  if (comment.includes(first) && comment.substr(0, first.length) === first) {
    return true;
  } else {
    return false;
  }
}

const buttonSubstring = document.getElementById("substring-button");
buttonSubstring.addEventListener("click", () => {
  const checkSubstring = document.getElementById("substring-input").value;
  const substring = document.getElementById("substring-container");
  substring.innerHTML = detectSubstring(checkSubstring);
});

showCode("toggle-s7");

//  EXAMPLE 1: Can someone explain this and this - > true
//  EXAMPLE 2: lalala Can someone explain lalala - >  false
//  EXAMPLE 3: hfjhjkhkjfhdjkfvhsdjkfhsdjkf      - > false

//------------------------------------------------------------------------
//  8.  STRINGS
//------------------------------------------------------------------------
function removeCharacter(str, n) {
  // const myString = 'Afara este soare';
  const characterPositionToRemove = n;
  let newString = "";

  for (let i = 0; i < str.length; i++) {
    if (i !== characterPositionToRemove) {
      newString += str[i];
    }
  }
  return newString;
}

const buttonRemove = document.getElementById("remove-char-button");
buttonRemove.addEventListener("click", () => {
  const removeChar = document.getElementById("remove-char-input").value;
  const indexChar = Number(document.getElementById("index-char-input").value);
  const remCh = document.getElementById("remove-char-container");
  remCh.innerHTML = removeCharacter(removeChar, indexChar);
});

showCode("toggle-s8");

//------------------------
//  9. Strings Verifica daca cuvantul este palindrom.
//------------------------
function isPalindrome(text) {
  //   let checkText = text.toLowerCase().replace(re, "");
  //   var re = /[^A-Za-z0-9]/g;
  let checkText = text.toLowerCase();
  var len = checkText.length;

  for (var i = 0; i < len / 2; i++) {
    if (checkText[i] !== checkText[len - 1 - i]) {
      return `The text "${checkText}" is NOT a palindrom.`;
    } else {
      return `The text "${checkText}"  is a palindrom.`;
    }
  }
}

const buttonPal = document.getElementById("palindrom-button");
buttonPal.addEventListener("click", () => {
  const textPal = document.getElementById("palindrom-input").value;
  const pal = document.getElementById("palindrom-container");
  pal.innerHTML = isPalindrome(textPal);
});

showCode("toggle-s9");

//------------------------
/// 10. STRINGS
//------------------------
function checkTheString(a) {
  if (typeof a === "string") {
    return "It's a string.";
  }
}

const buttonStr = document.getElementById("check-string-button");
buttonStr.addEventListener("click", () => {
  const checkStr = document.getElementById("check-string-input").value;
  const strContainer = document.getElementById("check-string-container");
  strContainer.innerHTML = checkTheString(checkStr);
});

showCode("toggle-s10");

//------------------------
/// 11. STRINGS
//------------------------
function hideEmail(email) {
  const content = email.split("@");
  const name = content[0];
  const leftName = name.substring(0, Math.floor(name.length / 2));
  return `${leftName}****@${content[1]}`;
}

const buttonMail = document.getElementById("hide-email-button");
buttonMail.addEventListener("click", () => {
  const mail = document.getElementById("hide-email-input").value;
  const mailContainer = document.getElementById("hide-email-container");
  mailContainer.innerHTML = hideEmail(mail);
});

showCode("toggle-s11");

// Example: 'robin_singh@example.com'

//------------------------
/// 12. STRINGS
//------------------------
function count(string, word) {
  // VERSION 1
  // let frazeArray = string.toLowerCase().split(word);
  // return frazeArray.length - 1;

  // VERSION 2
  let frazeArray = string.split(" ");
  let counter = 0;

  for (let i = 0; i < frazeArray.length; i++) {
    if (frazeArray[i].toLowerCase().includes(word)) {
      counter++;
    }
  }
  return counter;
}

const buttonWord = document.getElementById("word-str-button");
buttonWord.addEventListener("click", () => {
  const wordStr = document.getElementById("strng-input").value;
  const wrd = document.getElementById("word-str-input").value;
  const wordStrContainer = document.getElementById("word-str-container");
  wordStrContainer.innerHTML = count(wordStr, wrd);
});

showCode("toggle-s12");

// console.log(count("The quick brown the fox jumps over the lazy dog", "the"));
// console.log(count("The quick brown the fox jumps over the lazy dog", "fox"));

//------------------------------------------------------------------------
//  1. ARRAYS Read two lists of students in the input fields. The students needs
// to be separated by ";".Compare the lists of students and show a error message.
//------------------------------------------------------------------------
function compareStudentsLists(students1, students2) {
  let stud1 = students1.split(";");
  let stud2 = students2.split(";");

  if (stud1.length > stud2.length) {
    return "The list of students 1 bigger than students 2.";
  } else if (stud2.length > stud1.length) {
    return "The list of students 2 bigger than students 1.";
  } else if (stud2.length === stud1.length) {
    return "The list of students 2 is equal with students 1.";
  }
}

const compareStudentsListButton = document.getElementById("compare-students");
compareStudentsListButton.addEventListener("click", () => {
  const studentsList1 = document.getElementById("students-list-1").value;
  const studentsList2 = document.getElementById("students-list-2").value;
  const resultCompareStudents = document.getElementById("result-compare");
  resultCompareStudents.innerHTML = compareStudentsLists(
    studentsList1,
    studentsList2
  );
});

showCode("toggle-a1");

//------------------------------------------------------------------------
//  2. ARRAYS In this app you need to create the global variable MOVIES. For each movie you need to store the
// title and the seen status.When click on the button "Check movies status", for every movie from the list
// show if the movie is seen or not.Example: Already saw Narcos OR I steel need to see Narcos Mexico
//------------------------------------------------------------------------
const MOVIES = [
  {
    title: "Narcos",
    seen: true,
  },
  {
    title: "Fauda",
    seen: true,
  },
  {
    title: "The trial",
    seen: false,
  },
  {
    title: "Enrola",
    seen: false,
  },
  {
    title: "Elements",
    seen: false,
  },
  {
    title: "Suits",
    seen: true,
  },
];

function getMoviesStatus(movies) {
  let test = document.createElement("ul");

  for (movie of movies) {
    let li = document.createElement("li");

    if (movie.seen === true) {
      li.innerHTML = `Already seen the movie ${movie.title}`;
    } else {
      li.innerHTML = `Not seen the movie ${movie.title}`;
    }
    test.appendChild(li);
  }
  return test;
}

const checkMoviesStatusButton = document.getElementById("check-movies-status");
checkMoviesStatusButton.addEventListener("click", () => {
  const resultMoviesStatus = document.getElementById("result-movies-status");
  resultMoviesStatus.appendChild(getMoviesStatus(MOVIES));
});

showCode("toggle-a2");

//------------------------------------------------------------------------
//  3. ARRAYS
//------------------------------------------------------------------------
function reversedEvenNumbers(numberListArray) {
  const reversedOddNumbers = [];

  for (let i = numberListArray.length - 1; i >= 0; i--) {
    if (numberListArray[i] % 2 === 0 && numberListArray[i] > 10) {
      reversedOddNumbers.push(numberListArray[i]);
    }
  }
  return reversedOddNumbers;
}

const button = document.getElementById("reverse-numbers");
button.addEventListener("click", function () {
  const values = document.getElementById("user-numbers").value;
  const result = [];
  const splitNumbers = values.split(",");

  splitNumbers.forEach((element) => {
    result.push(Number(element));
  });

  const logData = reversedEvenNumbers(result);

  document.getElementById("reverse-even-numbers").innerHTML =
    logData.join(", ");
});

showCode("toggle-a3");

// const myList = [2, 1, 5, 20, 20, 22, 63, 2, 17];

//------------------------------------------------------------------------
//  4.  ARRAYS
//------------------------------------------------------------------------
function descendingNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
      return `${num1}, ${num2}, ${num3}`;
    } else {
      return `${num1}, ${num3}, ${num2}`;
    }
  } else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
      return `${num2}, ${num1}, ${num3}`;
    } else {
      return `${num2}, ${num3}, ${num1}`;
    }
  } else if (num3 > num1 && num3 > num2) {
    if (num1 > num2) {
      return `${num3}, ${num1}, ${num2}`;
    } else {
      return `${num3}, ${num2}, ${num1}`;
    }
  }
}

const buttonDes = document.getElementById("descending-numbers-button");
buttonDes.addEventListener("click", () => {
  const number1 = Number(
    document.getElementById("descending-number1-input").value
  );
  const number2 = Number(
    document.getElementById("descending-number2-input").value
  );
  const number3 = Number(
    document.getElementById("descending-number3-input").value
  );
  const descending = document.getElementById("descending-numbers-container");
  descending.innerHTML = descendingNumbers(number1, number2, number3);
});

showCode("toggle-a4");

//------------------------------------------------------------------------
//  5.  ARRAYS
//------------------------------------------------------------------------
function minMaxNumbers(arr) {
  var maxValue = arr[0];
  var minValue = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    } else if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  return `Min value is: ${minValue} and Max value is: ${maxValue}`;
}

const buttonMinMax = document.getElementById("min-max-button");
buttonMinMax.addEventListener("click", () => {
  const minMaxValue = document.getElementById("min-max-input").value;
  const splitNumbers = minMaxValue.split(",");
  const result = [];

  splitNumbers.forEach((element) => {
    result.push(Number(element));
  });

  const minMax = document.getElementById("min-max-container");
  minMax.innerHTML = minMaxNumbers(result);
});

showCode("toggle-a5");

// Example: [10, 50, 2, 4, 6, 345, 0, -22, 4, 56];

//------------------------------------------------------------------------
//  6.  ARRAYS
//------------------------------------------------------------------------
function minMaxNumWhile(arr) {
  var max = arr[0];

  var i = 0;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }

    i++;
  }
  return `Max value is: ${max}`;
}

const buttonMinMaxWhile = document.getElementById("min-max-while-button");
buttonMinMaxWhile.addEventListener("click", () => {
  const minMaxValueWhile = document.getElementById("min-max-while-input").value;
  const splitNum = minMaxValueWhile.split(",");
  const result = [];

  splitNum.forEach((element) => {
    result.push(Number(element));
  });

  const minMaxWhile = document.getElementById("min-max-while-container");
  minMaxWhile.innerHTML = minMaxNumWhile(result);
});

showCode("toggle-a6");

// Example: [10, 50, 2, 4, 6, 345, 0, -22, 4, 56];

//------------------------------------------------------------------------
//  7.  ARRAYS
//------------------------------------------------------------------------
function negativePositiveNumbers(arr) {
  var negativeNumbers = 0;
  var positiveNumbers = 0;

  for (let number of arr) {
    if (number < 0) {
      negativeNumbers++;
    } else {
      positiveNumbers++;
    }
  }
  return `There are ${negativeNumbers} Negative numbers and ${positiveNumbers} Positive numbers.`;
}

const buttonNegPos = document.getElementById("neg-pos-button");
buttonNegPos.addEventListener("click", () => {
  const negPosValue = document.getElementById("neg-pos-input").value;
  const splitNum = negPosValue.split(",");
  const result = [];

  splitNum.forEach((element) => {
    result.push(Number(element));
  });

  const negPos = document.getElementById("neg-pos-container");
  negPos.innerHTML = negativePositiveNumbers(result);
});

showCode("toggle-a7");

// Example: [10, 50, -2, 4, 6, -345, 0, -22, 4, 56];

//------------------------------------------------------------------------
//  8.  ARRAYS
//------------------------------------------------------------------------
function sortingArray(numbers) {
  var len = numbers.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let tmp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = tmp;
      }
    }
  }
  return numbers;
}

const buttonSortArr = document.getElementById("sort-array-button");
buttonSortArr.addEventListener("click", () => {
  const sortArr = document.getElementById("sort-array-input").value;
  const splitNum = sortArr.split(",");
  const result = [];

  splitNum.forEach((element) => {
    result.push(Number(element));
  });

  const sorting = document.getElementById("sort-array-container");
  sorting.innerHTML = sortingArray(result);
});

showCode("toggle-a8");

// Example: [5, 3, 1, 4, 6];

//------------------------------------------------------------------------
//  9. ARRAYS Given the list of numbers, return the list so that the values increment by 1
//  for each index up to the maximum value.
//  Example: Input: 1, 3, 5, 6, 7, 8     &     Output: 1, 2, 3, 4, 5, 6, 7, 8
//  numbers = [-2, 0, 1, 3, 7, 9];
//------------------------------------------------------------------------
const missingNumbers = (numbers) => {
  let first = numbers[0];
  let last = numbers[numbers.length - 1];
  let array = [];
  for (let i = first; i < last + 1; i++) {
    array.push(i);
  }
  return array;
};

const buttonMissing = document.getElementById("missing-num-button");
buttonMissing.addEventListener("click", () => {
  const missNum = document.getElementById("missing-num-input").value;
  const splitNum = missNum.split(",");
  const resultNum = [];

  splitNum.forEach((element) => {
    resultNum.push(Number(element));
  });

  const missing = document.getElementById("missing-num-container");
  missing.innerHTML = missingNumbers(resultNum);
});

showCode("toggle-a9");

//------------------------
//  10. ARRAYS
//------------------------
function arrayElements(array, n) {
  if (!n && array) {
    return array[0];
  } else if (n < 0 || !array) {
    return "[]";
  }
  return array.slice(0, n);
}

const buttonArr = document.getElementById("array-button");
buttonArr.addEventListener("click", () => {
  const arrNum = document.getElementById("array-input").value;
  const num = Number(document.getElementById("arrayN-input").value);
  const splitNum = arrNum.split(",");
  const resultNum = [];

  splitNum.forEach((element) => {
    resultNum.push(Number(element));
  });

  const arrContainer = document.getElementById("array-container");
  arrContainer.innerHTML = arrayElements(splitNum, num);
});

showCode("toggle-a10");

// console.log('arrayElements(): ', arrayElements()); // []
// console.log('arrayElements([1, 2, 3, 4, 5]): ', arrayElements([1, 2, 3, 4, 5])); // 1
// console.log('arrayElements([1, 2, 3, 4, 5], 3): ', arrayElements([1, 2, 3, 4, 5], 3)); // 1, 2, 3
// console.log('arrayElements([1, 2, 3, 4, 5], -3): ', arrayElements([1, 2, 3, 4, 5], -3)); // []

//------------------------
/// 11. LIST AND OBJECTS You will be given an array of numbers. For each number in the array you will need to create
// an object. The object key will be the number, as a string.The value will be the corresponding
// character code, as a string. Return an array of the resulting objects. All inputs will be
// arrays of numbers. All character codes are valid lower case letters.The input array will not
// be empty.
//------------------------

// VERSION 1
// function numObj(s) {
//     const myList = [];
//     s.map(number => myList.push(
//         String.fromCharCode(number)
//     ))
//     const myObject = Array.from({ length: s.length }, number => number = {});
//     myObject.map((number, i) => number[s[i]] = myList[i])
//     return JSON.stringify(myObject);
// }

// VERSION 2
// function numObj(s) {
//     return s.map(n => {
//         const obj = {};
//         obj[n] = String.fromCharCode(n);
//         return JSON.stringify(obj);
//     });
// }

// VERSION 3
// function numObj(list) {
//     var arr = []
//     for (var i = 0; i < list.length; ++i) {
//         var myObject = {};
//         myObject[list[i].toString()] = String.fromCharCode(list[i]);
//         arr.push(myObject);
//     }
//     return JSON.stringify(arr);
// }

// VERSION 4
function numObj(myList) {
  let newArr = [];

  for (let number of myList) {
    let myObject = new Object();
    myObject[number] = String.fromCharCode(number);
    newArr.push(myObject);
  }
  return JSON.stringify(newArr);
}

const buttonObjList = document.getElementById("obj-in-list-button");
buttonObjList.addEventListener("click", () => {
  const objList = document.getElementById("obj-in-list-input").value;
  const splitNum = objList.split(",");
  const resultObj = [];

  splitNum.forEach((element) => {
    resultObj.push(Number(element));
  });

  const objListContainer = document.getElementById("obj-in-list-container");
  objListContainer.innerHTML = numObj(resultObj);
});

showCode("toggle-a11");

// console.log(numObj([118, 117, 120]), [{ '118': 'v' }, { '117': 'u' }, { '120': 'x' }]);
// console.log(numObj([101, 121, 110, 113, 113, 103]), [{ '101': 'e' }, { '121': 'y' }, { '110': 'n' }, { '113': 'q' }, { '113': 'q' }, { '103': 'g' }]);

//------------------------
/// 12. ARRAYS | Invert values. Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//------------------------
// VERSION 1
function invert(array) {
  let numbers = [];

  for (num of array) {
    numbers.push(-num);
  }

  return numbers;
}

// VERSION 2
// function invert(array) {
//     return array.map(n => n && -n)
// }

// VERSION 3
// function invert(array) {
//     let newArry = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 0) {
//             newArry.push(array[i]);
//         } else {
//             newArry.push(array[i] * -1)
//         }
//     }
//     return newArry;
// }

const buttonInvert = document.getElementById("invert-button");
buttonInvert.addEventListener("click", () => {
  const invertList = document.getElementById("invert-input").value;
  const splitInv = invertList.split(", ");
  const resultInv = [];

  splitInv.forEach((element) => {
    resultInv.push(Number(element));
  });

  const invertContainer = document.getElementById("invert-container");
  invertContainer.innerHTML = invert(resultInv);
});

showCode("toggle-a12");

// console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
// console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
// console.log(invert([]), []);
// console.log(invert([0]), [0]);

//------------------------
/// 13. ARRAYS | Find numbers which are divisible by given number. Complete the function which takes two arguments and returns all numbers
// which are divisible by the given divisor.First argument is an array of numbers and the second is the divisor.
// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]
//------------------------
// // VERSION 1
// function divisibleBy(numbers, divisor) {
//     let myList = [];
//     for (num of numbers) {
//         if (num % divisor === 0) { // 1 % 2 = rest; 2 % 2 = 0; 3 % 2 = rest;  4 % 2 = 0;  5 % 2 = rest;  6 % 2 = 0;
//             myList.push(num);
//         }
//     }
//     return myList;
// }

// // VERSION 2
// function divisibleBy(numbers, divisor) {
//     return numbers.filter(n => n % divisor === 0)
// }

// const buttonDivisibleBy = document.getElementById('divisibleby-button');
// buttonDivisibleBy.addEventListener('click', () => {
//     const divisibleList = document.getElementById("divisibleby-list-input").value;
//     const divisibleNumber = Number(document.getElementById("divisibleby-number-input").value);
//     const splitDiv = divisibleList.split(', ');
//     const resultDiv = [];

//     splitDiv.forEach((element) => {
//         resultDiv.push(Number(element));
//     });

//     const invertContainer = document.getElementById("divisibleby-container");
//     invertContainer.innerHTML = invert(resultInv);
// });

// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
// console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
// console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
// console.log(divisibleBy([0], 4), [0]);
// console.log(divisibleBy([1, 3, 5], 2), []);

//------------------------
// 1. OBJECTS Think of a way to store the languages as a database (eg an object).
// Write a 'welcome' function that takes a parameter 'language'(always a string), and
// returns a greeting - if you have it in your database.It should default to English if
// the language is not in the database, or in the event of an invalid input.
//------------------------

// VERSION 1
// const greet = (language) => {
//     const database = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso'
//     }
//     return database[language] !== undefined ? database[language] : 'Welcome';
// }

// VERSION 2
var languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  for (var k in languages) {
    console.log(k);
    if (k == language) {
      return languages[k];
    }
  }
  return "Welcome";
}

const buttonObjGreet = document.getElementById("obj-greet-button");
buttonObjGreet.addEventListener("click", () => {
  const checkObj = document.getElementById("obj-greet-input").value;
  const objContainer = document.getElementById("obj-greet-container");
  objContainer.innerHTML = greet(checkObj);
});

showCode("toggle-o1");

// console.log(greet());
// console.log(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
// console.log(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");

//------------------------------------------------------------------------
//  2. OBJECTS You have the Person class. You need to create two instances of the class Person with different details.
// For the first person you need to call the class method "bio" when clicking on the "PERSON 1 BIO" button, and for
// the second person you need to call the classs method "greeting" when click on the "PERSON 2 GREETING" button.For
// each of them you need to show the informations.Also you have the following issues here:
//  - the output always includes the pronoun "He", even if your person is female
//  - bio only includes two interests, even if more are listed in the interests array
//  - the greeting includes just the first name
//  - we use function instead of class for the constructor function
//------------------------------------------------------------------------
class Person {
  constructor(firstName, lastName, age, gender, interests) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  getGender() {
    if (this.gender === "femeie") {
      return "She";
    } else {
      return "He";
    }
  }

  bio() {
    return (
      this.firstName +
      " " +
      this.lastName +
      " is " +
      this.age +
      " years old. " +
      this.getGender() +
      " likes " +
      this.interests.join(" and ") +
      "."
    );
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        "."
    );
  }

  greeting() {
    return "Hi! I'm " + this.firstName + " " + this.lastName + ".";
    console.log("Hi! I'm " + this.firstName + " " + this.lastName + ".");
  }
}

const person1BioButton = document.getElementById("person-1-bio-button");
person1BioButton.addEventListener("click", () => {
  const person1 = new Person("Madalina", "Jerca", 32, "femeie", [
    "something1",
    "something2",
    "something3",
  ]);
  const person1Bio = document.getElementById("person-1-bio");
  person1Bio.innerText = person1.bio();
});

const person2GreetingButton = document.getElementById(
  "person-2-greeting-button"
);
person2GreetingButton.addEventListener("click", () => {
  const person2 = new Person("Sebi", "Eusebiu", 30, "barbat", [
    "something1",
    "something2",
    "something3",
  ]);
  const person2Greeting = document.getElementById("person-2-greeting");
  person2Greeting.innerText = person2.greeting();
});

showCode("toggle-o2");

//------------------------------------------------------------------------
//  3. OBJECTS a)  In this app you have the global variable STUDENT. When click on the button "IS OBJECT"
// show true or false depending if the variable is object or not.
//------------------------------------------------------------------------
const STUDENT = {
  firstName: "Vasile",
  lastName: "Popescu",
  jobTitle: "Frontend engineer",
  age: 30,
  married: true,
  sports: ["football", "volei"],
};

function isObject(object) {
  if (object && typeof object === "object") {
    return true;
  } else {
    return false;
  }
}

const isObjectButton = document.getElementById("is-object");
isObjectButton.addEventListener("click", () => {
  const resultObject = document.getElementById("result-object");
  resultObject.innerHTML = isObject(STUDENT);
});

showCode("toggle-o3");

//------------------------------------------------------------------------
//  3. b)  When click on the button "PRINT KEYS", print the keys of the object.
//------------------------------------------------------------------------
function objectKeys(obj) {
  if (isObject(obj) === true) {
    return Object.keys(obj);
  } else {
    return [];
  }
}

const printObjectKeysButton = document.getElementById("print-keys");
printObjectKeysButton.addEventListener("click", () => {
  const resultObjectKeys = document.getElementById("result-object");
  resultObjectKeys.innerHTML = objectKeys(STUDENT);
});

//------------------------------------------------------------------------
//  3. c)  When click on the button "PRINT KEYS AND VALUES", print the key and the values of the object.
//------------------------------------------------------------------------
function objectKeyValues(obj) {
  if (isObject(obj) === true) {
    let printKeyValues = [];

    for (const [key, value] of Object.entries(obj)) {
      printKeyValues.push(`${key}: ${value}`);
    }
    return printKeyValues;
  } else {
    return "not an object";
  }
}

const printKeysAndValuesButton = document.getElementById(
  "print-keys-and-values"
);
printKeysAndValuesButton.addEventListener("click", () => {
  const resultObject = document.getElementById("result-object");
  resultObject.innerHTML = objectKeyValues(STUDENT);
});

//------------------------------------------------------------------------
//  3. d)  When click on "OBJECT LENGTH" show the number of properties from object
//------------------------------------------------------------------------
function objectLength(obj) {
  return Object.keys(obj).length;
}

const getObjectLengthButton = document.getElementById("object-length");
getObjectLengthButton.addEventListener("click", () => {
  const resultObject = document.getElementById("result-object");
  resultObject.innerHTML = objectLength(STUDENT);
});

//------------------------------------------------------------------------
//  3. e)  When click on the button "DELETE PROPERTIES", delete all the properties from object.
//------------------------------------------------------------------------
function deleteObjectProperties(STUDENT) {
  for (let key in STUDENT) {
    delete STUDENT[key];
  }
}

const deleteObjectPropertiesButton =
  document.getElementById("delete-properties");
deleteObjectPropertiesButton.addEventListener("click", () => {
  const resultObjectDelete = document.getElementById("result-object");
  resultObjectDelete.innerHTML = deleteObjectProperties(STUDENT);
});

//------------------------
/// 4. The code provided is supposed return a person's Full Name given their first and last names
// But it's not working properly. Fix the bug so we can all go home early.
// The first and / or last names are never null, but may be empty.
//------------------------
class Fullname {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`.trim();
  }
}

// console.log(new Fullname("Clint", "Eastwood").getFullName(), "Clint Eastwood");

const buttonObjName = document.getElementById("obj-full-name-button");
buttonObjName.addEventListener("click", () => {
  const fullNameObj = document.getElementById("obj-full-name-input").value;
  const fullNameObjContainer = document.getElementById(
    "obj-full-name-container"
  );
  fullNameObjContainer.innerHTML = Fullname(fullNameObj);
});

showCode("toggle-o4");

//------------------------
/// 5. OBJECTS
//------------------------
const USER = {
  // can i do a class and add all the functions?
  name: "Alex",
  location: "Bucuresti",
  age: 32,
};

function renderUser(obj) {
  // Display user
  for (let prop in obj) {
    if (isObject(obj) === true) {
      return JSON.stringify(obj);
    } else {
      return [];
    }
  }
  // return `${ Object.keys(user)} ${Object.values(user)}`;
}

function addUser(user) {
  // Add property
  user.prenume = "Daniel";

  return Object.keys(user);
}

function removeUser(user) {
  //Remove property
  delete user.age;

  return Object.keys(user);
}

const buttonDisplay = document.getElementById("display-user-button");
buttonDisplay.addEventListener("click", () => {
  const userContainerDisplay = document.getElementById("obj-user-container");
  userContainerDisplay.innerHTML = renderUser(USER);
});

const buttonAdd = document.getElementById("add-user-button");
buttonAdd.addEventListener("click", () => {
  const userObjContainerAdd = document.getElementById("obj-user-container");
  userObjContainerAdd.innerHTML = addUser(USER);
});

const buttonRem = document.getElementById("remove-user-button");
buttonRem.addEventListener("click", () => {
  const removeObj = document.getElementById("obj-user-input").value;
  const userObjContainerRem = document.getElementById("obj-user-container");
  userObjContainerRem.innerHTML = removeUser(USER);
});

showCode("toggle-o5");
