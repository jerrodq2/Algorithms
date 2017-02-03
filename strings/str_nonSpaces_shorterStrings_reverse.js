String.prototype.nonSpaces = function(){//return the number of non space characters in a string
  var count = 0
  for(i = 0; i < this.length; i++){
    if(this[i] != ' ')
      count++
  }
  return count
}


function shorterStrings(arr, val){//given an array of strings and a value, remove any strings shorter than the given value from the arr, not built in methods except pop, push, and length
  function removeIndexFromArray(index, arr){
    for(i=index; i < arr.length - 1; i++){
      arr[i] = arr[i+1]
    }
    arr.pop()
  }

  var remove = []
  for(x = 0; x < arr.length; x++){
    if(arr[x].length < val)
      remove.push(x)
  }

  while(remove.length != 0){
    removeIndexFromArray( remove[remove.length-1], arr)
    remove.pop()
  }
  return arr
}// end of shorterStrings



String.prototype.myReverse = function(){//reverse a string without built in methods, do so in place
  var arr = this.split('')
  var mid = Math.floor(arr.length/2), other = arr.length - 1
  for(i=0; i < mid; i++){
    var temp = arr[i]
    arr[i] = arr[ other - i]
    arr[ other - i] = temp
  }
  var str = arr.join('')
  return str
}


var str = 'hows your day going?'
console.log(str.nonSpaces());

var arr = ['hehehe', 'hello', 'sooooo', 'eh']
console.log(arr);
shorterStrings(arr, 6)
console.log(arr);

console.log(str.myReverse());
