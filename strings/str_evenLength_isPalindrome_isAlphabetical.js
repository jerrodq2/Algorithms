function evenLength(arr){//given an array of strings or associative array, remove all strings of even length, meaning if one index has a length of 3, if any other index also has a length of 3, remove them both.
  var counter = 0;
  while(counter < arr.length){
    var shouldIRemove = false, indexesToRemove = []

    for(i=0; i < arr.length; i++){
      if(i == counter)
        continue
      if(arr[i].length == arr[counter].length){
        shouldIRemove = true
        indexesToRemove.push(i)
      }
    }// end of for loop
    for(i=0; i < indexesToRemove.length; i++){
      arr.splice(indexesToRemove[i]-i, 1)
    }

    if(shouldIRemove){
      arr.splice(counter, 1)
    } else {
      counter ++
    }
  }// end of while loop
  return arr
}// end of even length****************



String.prototype.isPalindrome = function(){//return boolean based on if the string is a palidrome (same forwards and backwards), so 'hey' or 'Dud' return false, but 'racecar' return true
  var mid = Math.floor(this.length/2), other = this.length -1
  for(i=0; i < mid;i ++){
    if(this[i] != this[other - i])
      return false
  }
  return true
}// end of isPalindrome


String.prototype.isAlphabetical = function(){//return boolean based on if every letter in the string is in alphabetical order, we're not given any numbers , only letters
  var str = this.toLowerCase()
  for(i = 0; i < str.length-1; i++){
    if(str[i] > this[i+1])
      return false
  }
  return true
}//end of isAlphabetical




var arr = ['nope!', 'its', 'kris', 'starting', 'with', 'k!', '(instead', 'of', 'chris', 'with', 'C)', '.']
console.log(arr);
evenLength(arr)
console.log(arr);//arr is now ['its', '.']

console.log('Dud'.isPalindrome());
console.log('hey'.isPalindrome());
console.log('racecar'.isPalindrome());


console.log('ehyx'.isAlphabetical()); //return false
console.log('zurs'.isAlphabetical()); //return false
console.log('abcde'.isAlphabetical()); //return true
console.log('almrz'.isAlphabetical()); //return true
