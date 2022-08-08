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