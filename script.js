// function countBy(x, n) {
//     let z = [],
//         i
//     for (i = 1; z.length != n; i++) {
//       if (i % x == 0) {
//         z.push(i);
//       } else {
//         continue;
//       }
//     }

//     return z;
// }

// console.log(countBy(2, 5));

// function betterThanAverage(classPoints, yourPoints) {
//     // Your code here
//     let sr = 0
//     classPoints.forEach(item => {
//         sr += item;
//     });
//     sr = sr / (classPoints.length);
//     if (sr > yourPoints) {
//         return false;
//     } else {
//         return true;
//     }
//   }

// function sumMix(x){
//     let sum = 0;
//     x.forEach(item => {
//       sum += new Number(item);
//     });
//     return sum;
//   }

// console.log(sumMix([9, 3, '7', '3']))

// function century(year) {
//     if (year % 100 == 0) {
//       return year / 100
//     } else {
//       return Math.floor(year / 100) + 1;
//     }
// }

// const rps = (p1, p2) => {
//     if (p1 == 'scissors' & p2 == 'paper') {
//       return 'Player 1 won!';
//     } else if (p1 == 'paper' & p2 == 'scissors') {
//       return 'Player 2 won!';
//     } else if (p1 == 'rock' & p2 == 'scissors') {
//       return 'Player 1 won!';
//     } else if (p1 == 'scissors' & p2 == 'rock') {
//       return 'Player 2 won!';
//     } else if (p1 == 'rock' & p2 == 'paper') {
//       return 'Player 2 won!';
//     } else if (p1 == 'paper' & p2 == 'rock') {
//       return 'Player 1 won!';
//     } else {
//       return 'Draw!';
//     }
//   };

// function areYouPlayingBanjo(name) {
//     if (name[0] == 'R' | name[0] == 'r') {
//         return (name + ' plays banjo');
//     } else {
//         return (name + ' does not play banjo');
//     }
// }

// console.log(areYouPlayingBanjo('Adam'));

// function countSheeps(arrayOfSheep) {
//     let present = 0;
//     arrayOfSheep.forEach(item => {
//       if (item == true) {
//         present += 1
//       }
//     });
//     return present;
//   }

// function reverseWords(str) {
//     let reverseWordArr = str.split(" ").map(word => word.split("").reverse().join(""));
//     return reverseWordArr.join(" ");
//   }

// function nbYear(p0, percent, aug, p) {
//     let years;
//     for (years = 0; p0 < p; years++) {
//         p0 = Math.floor(p0 + p0 * percent / 100 + aug)
//     }
//     return years;
// }

// console.log(nbYear(1500, 5, 100, 5000))

// function getMiddle(s) {
//     if (s.length % 2 == 0) {
//       return s[s.length / 2 - 1] + s[s.length / 2];
//     } else {
//       return s[Math.floor(s.length / 2)];
//     }
//   }

// const reverseSeq = n => {
//     let arr = [];
//     while (n != 0) {
//         arr.push(n);
//         n = n - 1;
//     }
//     return arr;

//   };

// console.log(reverseSeq(5));

// function printerError(s) {
//     let count = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] > "m") {
//             count++;
//         };
//     };
//     return count + "/" + s.length;
// };

// function positiveSum(arr) {
//     let sum = 0;
//     arr.forEach(number => {
//         if (number > 0) {
//             sum += number;
//         }
//     });
//     return sum;
// };

// const binaryArrayToNumber = arr => {
//     let sum = 0;
//     const newArr = arr.reverse();
//     console.log(newArr);
//     for (let i = 0; i < newArr.length; i++) {
//         sum += (newArr[i] * (2**i));
//     };
//     return sum;
// };

// function noSpace(x){
//     const arr = x.split("");
//     let newArr = [];
//     arr.forEach(item => {
//         if (item != " ") {
//             newArr.push(item);
//         }
//     });
//     return newArr.join("")
// }

// noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');

// function solution(str, ending) {
//     const arr = str.split("");
//     let k = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (arr[-ending.length] + i == ending[i]) {
//             k += 1;
//         }
//     }
//     if (k == ending.length + 1) {
//         return true;
//     } else {
//         return false;
//     }
// };

// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };

// function diamond(n){
//     if ((n % 2 == 0) | (n < 0)) {
//         return null;
//     }

//     if (n == 1) {
//         return "*\n";
//     }

//     let str = "";
//     for (let i = 1; i < n; i += 2) {
//         str = str + " ".repeat((n - i) / 2) + '*'.repeat(i) + "\n";
//     }

//     for (let i = n; i > 0; i -= 2) {
//         str = str + " ".repeat((n - i) / 2) + '*'.repeat(i) + "\n";
//     }

//     return str;
// }

// console.log(diamond(5));
// console.log(diamond(3));

// function duplicateEncode(word){
//     let arr = word.toLowerCase().split("");
//     let newString = "";
//     arr.forEach(letter => {
//         if (arr.filter(item => item == letter).length > 1) {
//             newString += ")";
//         } else {
//             newString += "(";
//         }
//     });
//     return newString;
// };

// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] == 'needle') {
//             return 'found the needle at position ' + i
//         }
//     };
// };

// function cakes(recipe, available) {
//     let count = 0;
//     while(true) {
//         for (let ingredient in recipe) {
//             if (!available[ingredient]) {
//                 return count;
//             }
//             if (available[ingredient] - recipe[ingredient] < 0) {
//                 return count;
//             } else {
//                 available[ingredient] -= recipe[ingredient];
//             }
//         }
//         count++;
//     }
// }

// function highAndLow(numbers){
//     const arr = numbers.split(" ");
//     let maxNumber = -100000000,
//         minNumber = 100000000;
//     arr.forEach(item => {
//         if (Number(item) > maxNumber) {
//             maxNumber = item;
//         }
//     });
//     arr.forEach(item => {
//         if (Number(item) < minNumber) {
//             minNumber = item;
//         }
//     });
//     return maxNumber + ' ' + minNumber;
// }

// function tribonacci(signature,n){
//     let newArr = signature;
//     while (newArr.length != n) {
//         newArr.push('');
//     }
//     for (let i = 0; newArr.filter(item => item === '').length != 0; newArr.filter(item => item === '').length) {
//         newArr[i + (n - newArr.filter(item => item === '').length)] = newArr[i + (n - newArr.filter(item => item === '').length) - 3] + newArr[i + (n - newArr.filter(item => item === '').length) - 2] + newArr[i + (n - newArr.filter(item => item === '').length) - 1];
//     }
//     return newArr;
// }

// console.log(tribonacci([1,0,0],10))

// function likes(names) {
//     switch (names.length) {
//         case (0):
//           return 'no one likes this';
//           break;
//         case (1):
//           return `${names[0]} likes this`;
//           break;
//         case (2):
//           return `${names[0]} and ${names[1]} like this`;
//           break;
//         case (3):
//           return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//           break;
//         default:
//           return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//           break;
//     }
//   }

// Fake Binary

function fakeBin(x) {
  let str = x.split(""),
    newStr = "";
  str.forEach((number) => {
    Number(number) < 5 ? (newStr += "0") : (newStr += "1");
  });
  return newStr;
}

// console.log(fakeBin('45385593107843568'));

// Count characters in your string

function count(string) {
  const arr = string.split(""),
    obj = {};

  if (string.length === 0) {
    return {};
  }

  arr.forEach((item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  });

  return obj;
}

console.log(count("aba"));

// Rot13

function rot13(message) {
  const alph = "abcdefghijklmnopqrstuvwxyz".split(""),
    bigAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
    msg = message.split(""),
    newMsg = [];
  for (let i = 0; i < alph.length; i++) {
    if (alph.includes(msg[i])) {
      if (alph.indexOf(msg[i]) + 13 > alph.length) {
        newMsg.push(alph[alph.indexOf(msg[i]) - 13]);
      } else {
        newMsg.push(alph[alph.indexOf(msg[i]) + 13]);
      }
    }
    if (bigAlph.includes(msg[i])) {
      if (bigAlph.indexOf(msg[i]) + 13 > bigAlph.length) {
        newMsg.push(bigAlph[bigAlph.indexOf(msg[i]) - 13]);
      } else {
        newMsg.push(bigAlph[bigAlph.indexOf(msg[i]) + 13]);
      }
    }
  }
  return newMsg.join("");
}

// function solution(string) {
//   let newString = '';
//   for (const letter of string) {
//     if (letter.toUpperCase() == letter) {
//       newString += ' ';
//       newString += letter;
//     } else {
//       newString += letter;
//     }
//   }
//   return newString;
// }

// const opposites = ['NORTH'];
// console.log(opposites.pop());

// function comparePowers(n1,n2){
//   const first = Math.pow(Math.log(n1[0]), n1[1]),
//         second = Math.pow(Math.log(n2[0]), n2[1]);
//   if (first > second) {
//     return -1;
//   } else if (first == second) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// const uniqueInOrder = function (iterable) {
//   let arr,
//     newArr = [];
//   if (typeof iterable == "string") {
//     arr = iterable.split("");
//   } else {
//     arr = iterable;
//   }
//   arr.forEach((item) => {
//     if (newArr.length) {
//       const prevItem = newArr.pop();
//       if (item != prevItem) {
//         newArr.push(prevItem);
//         newArr.push(item);
//       } else {
//         newArr.push(prevItem);
//       }
//     } else {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// };

// function persistence(num) {
//   let counter = 0,
//     digits = num.toString().split(''),
//     results = 1;

//   while (digits.length > 1) {
//     let results = 1;
//     for (let i = 0; i < digits.length; i++) {
//       results *= digits[i];
//     }

//     digits = results.toString().split('');

//     counter += 1;
//   }

//   return counter;
// }

// function twoSum(numbers, target) {
//   let iterator = 0,
//       newArr = [];
//   while ((iterator < numbers.length) && newArr.length < 2) {
//     for (let i = 1; i < numbers.length; i++) {
//       if ((numbers[iterator] + numbers[iterator + i]) == target) {
//         newArr.push(iterator);
//         newArr.push(iterator + i);
//         break;
//       }
//     }
//     iterator++;
//   }
//   return newArr;
// }

// function elem(x) {
//   const arr = x.toString().split('');
//   let newNum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     newNum += Math.pow(arr[i], i + 1);
//   }
//   return newNum;
// }

// function sumDigPow(a, b) {
//   let newArr = [];
//   for (let i = a; i < b; i++) {
//     if (elem(i) == i) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }

// console.log(sumDigPow(1, 100));

// function isTriangle(a,b,c) {
//   if ((a + b > c) && (b + c > a) && (a + c > b)) {
//     return true;
//   }
//   return false;
// }

// function findUniq(arr) {
//   let unique;
//   arr.forEach(elem => {
//     if (arr.filter(item => item == elem).length > 1) {
//       unique = arr.filter(item => item != elem);
//     }
//   });
//   return unique[0];
// }

// console.log(findUniq([1, 0, 0]))

// function findUniq(arr) {
//   let unique;
//   arr.forEach(elem => {
//     if (arr.filter(item => item == elem).length > 1) {
//       unique = arr.filter(item => item != elem);
//     }
//   });
//   return unique[0];
// }

// function findUniq(arr) {
//   let unique;
//   arr.forEach(elem => {
//     switch (arr.filter(item => item == elem).length) {
//       case (1):
//         unique = elem;
//         break;
//       }
//     });
//     return unique;
// }

// console.log(findUniq([1, 0, 0]))

// function findUniq(arr) {
//   for (const number of arr) {
//     if (arr.filter(item => item == number).length == 1) {
//       return number;
//     }
//   }
// }

// function duplicateCount(text){
//   const string = text.toLowerCase().split("");
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     for (let j = i + 1; j < string.length; j) {
//       if (string[i] == string[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// function duplicateCount(text){
//   let string = text.toLowerCase().split("");
//   let count = 0,
//     iterator = 0;
//   while (iterator < string.length) {
//     for (let i = 1; i < string.length; i++) {
//       if (string[iterator] == string[iterator + i]) {
//         count++;
//         string = string.filter(item => item != string[iterator]);
//       }
//     }
//     iterator += 2;
//   }
//   return count;
// }

function parseInt(string) {
  let result = 0,
    result2 = 0;
  const obj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  const multiObj = {
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };
  function getNumber(string) {
    const nArr = string.split("-");
    if (nArr.length > 1) {
      return obj[nArr[0]] + obj[nArr[1]];
    }
    return obj[string];
  }

  string.split(" ").forEach((item) => {
    if (multiObj[item]) {
      result *= multiObj[item];
      if (result >= 1000) {
        result2 = result;
        result = 0;
      }
    } else if (item != "and") {
      result += getNumber(item);
    }
  });

  return result + result2;
}

function bouncingBall(h, bounce, window) {
  if (h < 0 || bounce >= 1 || bounce <= 0 || window > h) {
    return -1;
  }
  let height = h * bounce,
    counter = 0;
  while (height > window) {
    counter += 2;
    height = height * bounce;
  }
  counter += 1;
  return counter;
}

function wave(str) {
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    let copy = str.split("");
    if (copy[i] !== " ") {
      copy[i] = copy[i].toUpperCase();
      newArr.push(copy.join(""));
    }
  }
  return newArr;
}

console.log(wave("hello"));

function maxSequence(nums) {
  if (!nums.length) {
    return 0;
  }
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      counter++;
    }
  }
  if (counter == nums.length) {
    return 0;
  }

  let solution = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    solution = Math.max(solution, nums[i]);
  }
  return solution;
}
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

function incrementString(strng) {
  let alph = "abcdefghijklmnopqrstuvwxyz",
    numArr = [],
    letArr = [],
    strngArr = strng.split("");
  if (strng.length === 0) {
    return "1";
  }

  for (let i = 0; i < strng.length; i++) {
    if (alph.includes(strngArr[i])) {
      letArr.push(strngArr[i]);
    } else {
      numArr.push(parseInt(strngArr[i]));
    }
  }

  numArr.reverse();

  if (numArr.length === 0) {
    return strng + "1";
  }

  numArr[0]++;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > 9) {
      numArr[i] = 0;
      if (i + 1 < numArr.length) {
        numArr[i + 1]++;
      } else {
        numArr.push(1);
      }
    }
  }

  return letArr.join("") + numArr.reverse().join("");
}

console.log(incrementString("foobar099"));

const RomanNumerals = {
  fromRoman(item) {
    const map = { // ??????????????
      IV: 4,
      IX: 9,
      XL: 40,
      XC: 90,
      CD: 400,
      CM: 900,
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let value = 0;
    for (let i = 0; i < item.length; i++) {
      let two = map[item[i] + item[i + 1]], // ????????????????????, ???????????????????? ?????? ?????????????? (IV, IX, XL, XC, CD, CM)
        one = map[item[i]]; // ????????????????????, ???????????????????? ???????? ???????????? (?????? ??????????????????)
      if (two != null) { // ???????? ???????????????????? ?????????? ????????????????, ???? ?? value ?????????????????? ???? ?????????? ?? ?????????????????????? i ?????? ???? ????????, ?????????? ???????????????????? 2 ??????????????
        value += two;
        i++;
      } else if (one != null) value += one; // ?????????????????? ???????????????? ???????????? ??????????????
    }
    return value;
  },
  toRoman(item) {
    const map = { // ??????????????
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let roman = "";
    while (item > 0) {
      for (const r in map) {
        // ????????
        if (map[r] <= item) {
          roman += r;
          item -= map[r];
          break;
        }
      }
    }
    return roman;
  },
};
