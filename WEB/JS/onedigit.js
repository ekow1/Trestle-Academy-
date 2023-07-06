/// Q6 . Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.





function getDigitalRoot(num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}

getDigitalRoot(50)