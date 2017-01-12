BST.prototype.isPalindrome = function(){//returns a boolean value for if a bst is a palindrome, meaning split down the middle, the two sides are the same. So for a word, it is a plaindrome if the first character matches the last, second to second to last, ect. ex: abut tuba
  if(!this.root)
    return false
  var isItAPalindrome = true //default by true, so the recursive function has access to it
  function checkBothSides(currentLeft, currentRight){//recursive function
    if(!currentLeft && currentRight){
      isItAPalindrome = false
      return
    } else if(currentLeft && !currentRight){
      isItAPalindrome = false
      return
    } else if(!currentLeft && !currentRight){
      return
    }
  }
}
