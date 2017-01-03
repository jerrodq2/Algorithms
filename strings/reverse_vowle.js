//take a given string and switch the vowels in it.  so if it had 4 vowels in the string then the first vowel would now be the 4th, the 2nd would now be the 3rd and vice versa.
//So if given 'Hello', you should return 'Holle', and if given 'REverse', you should return 'ReversE', only the first and last e were switched.
function reverseVowel(str){
  var v = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  var hold = [];
  for(i = 0; i < str.length; i++){
    for(x = 0; x < v.length; x++){// using a for loop inside of a for loop isn't very efficient but it's the simplest way to check if any character is a string
      if(str[i] == v[x]){
        hold.push(i)//so each index of my hold array, will have the indexes of the str that needs to be switched
        break
      }
    }//end of inner loop
  }//end of outer loop
  
  var output = str.split('')
  for(i = 0; i < Math.floor(hold.length/2); i++){
    var firstToChange = hold[i], otherSideToChange = hold[ (hold.length-1) -i ]
    var temp = output[firstToChange]
    output[firstToChange] = output[otherSideToChange]
    output[otherSideToChange] = temp
  }
  output = output.join('')
  return output
}
console.log(reverseVowel('Hello')) // returns Holle
console.log(reverseVowel('aeu')) // returns uea
console.log(reverseVowel('i hold  you')) // returns u hold  yoi
console.log(reverseVowel('rest in peace')) // returns rest an peice
