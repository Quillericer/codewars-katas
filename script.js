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