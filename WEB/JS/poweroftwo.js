
// Q5. Given an integer n, return true if it is a power of two. Otherwise, return false. An integer n is a power of two, if there exists an integer x such that n == 2x.




function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }


  
  return (n & (n - 1)) === 0;
}


let numsSet = [22 , 25, 16 ,4 , 2,36 , 32 ,64 ,1, 128];

numsSet .map(num => isPowerOfTwo(num))