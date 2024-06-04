// take input from the user

let isPrime = true;
function checkPrime(number) {
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    let i = 2;
    while (i < number) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
      i++;
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  }

  // check if number is less than 1
  else {
    console.log("The number is not a prime number.");
  }
}
checkPrime(2);
