function isPalindrome(str){//returns a boolean value for if a string is a palindrome, meaning split down the middle, the two sides are the same. So the first character matches the last, second to second to last, ect.
  var mid = Math.floor(str.length/2)
  var otherSide = str.length - 1
  for(i = 0; i <= mid; i++){
    if(str[i] != str[otherSide - i])
      return false
  }
  return true

}

console.log(isPalindrome('hi')); // FALSE
console.log(isPalindrome('abcba')); // TRUE
console.log(isPalindrome('abut tuba')); // TRUE
console.log(isPalindrome('abut tcba')); // FALSE
