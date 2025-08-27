

// let x = 5;
// let y = 3;
// let c = "marwa";
// // console.log(x + y);
// // console.log(typeof x);
// // console.log(typeof c);
// document.getElementById("containt").innerHTML = x+y;
// document.getElementById("containt").innerHTML = x + c;

// let x = 5;
// let y = 20;
// let z = 3;
// let max = 0;

// if (x > y && x > z) {
//     max = x;
//     console.log(max);
// }
// else if (y > x && y > z) {
//     max = y;
//     console.log(max);
// }
// else {
//     max = z;
//     console.log(max);
// }
// function mim(x, y, z) {
//     if (x > y && x > z) {
//       max = x;
//       return x
//     } else if (y > x && y > z) {
//       max = y;
//       return y
//     } else {
//       max = z;
//       return z
//     }
// }
// console.log(mim(2,8,5)*2)


// let max = 0;
// let i = 0;


// function summing(x) {
//   if (x < 0)
//   {
//     return 0 
    
//   }
//   else {
//     let sum = 0;
//     let i = 1;
//     while (i<=x) {
//       sum +=i
//     i++
//     }
//     return sum;
//   }
// }
// console.log(summing(5));
// ----------------------------------------------------------------
  
function isPrime(y) {
  if (y<0) {
    return false
  }
  else if(y>=i) {
    let i = 2;
    while (y % i === 0) {
      return false;
    }
  }
  else {
    return true
  }
}
console.log(isPrime(6));
