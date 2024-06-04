function fizzBuzz(num) {
  for (let i = 1; i <= 100; i++) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "Fizz Buzz";
    } else {
      if (num % 3 === 0) {
        return "Fizz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else {
        return num;
      }
    }
  }
}
console.log(fizzBuzz(4));
// if (num % 3 !== 0 && num % 5 !== 0) {
//   return num;
// }
