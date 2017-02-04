String.prototype.parensValid = function(){//return boolean based on if the parenthesis in the string is valid. For every opening parenthesis, there is a closing, and a closing doesn't come before an opening. Ex: '( hey (there)' and  ') i see()' are both false. But '(hey there (sir))' is true
  var counter = 0
  for(i=0; i < this.length; i++){
    if(this[i] == '('){
      counter++
    } else if(this[i] == ')'){
      counter--
    }

    if(counter < 0)
      return false
  }
  return counter == 0? true : false
}//end of parensValid



String.prototype.bracesValid = function(){//the exact same as parensValid, except this time we have to make sure parenthesis (), brackets {} and braces [] are valid. Ex: 'W (a'{t} s[o (n{ c}o)m] e)h[e{r}e]!' is true, but 'D(i {a} l[ t]o) n {e' is false, missing a closing bracket
  var parCounter = 0, bracketCounter = 0, braceCounter = 0
  for(i=0; i < this.length; i++){
    if(this[i] == '('){
      parCounter++
    } else if(this[i] == ')'){
      parCounter--
    } else if(this[i] == '{'){
      bracketCounter++
    } else if(this[i] == '}'){
      bracketCounter--
    } else if(this[i] == '['){
      braceCounter++
    } else if(this[i] == ']'){
      braceCounter--
    }

    if(parCounter < 0 || bracketCounter < 0 || braceCounter < 0)
      return false
  }// end of for loop

  return parCounter == 0 && bracketCounter == 0 && braceCounter == 0? true : false
}// end of bracesValid


String.prototype.longestPalindrome = function(){// find the longest palindrome inside the string, searching through substrings. palindrome is the exact same forwards and backwards. For example: if the string was 'what up, daddy-o' the answer would be 'dad'. If the string was 'Yikes! my favorite racecar erupted!' return 'e racecar e'
 var length = 0, start = 0, end = 0, answer = '' //This will be the length of the longest inner palindrome, and the indexes where it starts and ends
 for(i=1; i < this.length-1; i++){
   var currentStart = i-1, currentEnd = i+1
   while(true){
     if(currentEnd == this.length || currentStart < 0 || this[currentStart] != this[currentEnd] ){
       if(currentStart == i -1 ){
         //then we never had a palindrome, no need to check the next if
         break
       }
       if( (currentEnd-1) - (currentStart+1) > length){
         length = (currentEnd-1) - (currentStart+1)
         start = (currentStart+1)
         end = (currentEnd-1)
       }
       break
     }// end of first if

     else{
       currentEnd++
       currentStart--
     }
   }// end of while loop

 }// end of for loop

 for(i = start; i <= end; i++){
   answer += this[i]
 }
 return answer
} //end of longestPalindrome



console.log('( hey (there)'.parensValid());
console.log(') i see()'.parensValid());
console.log('(hey there (sir))'.parensValid());


console.log('D(i {a} l[ t]o) n {e'.bracesValid());
console.log('W (a{t} s[o (n{ c}o)m] e)h[e{r}e]!'.bracesValid());


console.log('what up, daddy-o'.longestPalindrome());
console.log('Yikes! my favorite racecar erupted!'.longestPalindrome());
