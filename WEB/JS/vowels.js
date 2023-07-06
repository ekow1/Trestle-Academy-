
// Q8.Given a string “s”, return the number of vowels in the string. 


function getVowels(words){
     
    let vowels = words.match(/["aeiou"]/gi);

    return vowels ? vowels.join('') : "";
}


// Es6


const vowels = (word) =>{
    return word.match(/["aeiou"]/gi).join('') || "";
}


//Esnext


let fullname = 'Dylis Yaaba Nyamison'
let club = 'Liverpool Football Club'


getVowels(fullname);

vowels(club)