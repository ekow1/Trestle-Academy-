// Q3 .Given an integer “x”, return true if x is a palindrome (An integer is a palindrome when it reads the same forward and backward.) and false otherwise.

// ES5 and below


function palindrome(pendu) {
  let   result =  String(pendu);

  let reversed = result.split('').reverse().join('');

  if (result === reversed) {
     return true 
  } else {
    return false
  }

   

}


palindrome(242)
palindrome(254)
palindrome(121)
palindrome(350)




// Es6 syntax 
const palind = (drome) => {
     let num = String(drome)
   let output =  [...num].reverse().join('');

   return output === drome
}

palind(555)