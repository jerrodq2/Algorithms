//these are just re-creations of the built in methods concat, slice, and trim
String.prototype.MyConcat = function(str){//given a string, add it to the end of the current one
  var answer = this
  answer += str
  return answer
}


String.prototype.MySlice = function(start, end=null){//extract part of a string and return it. start is the index the substring starts at, end is where it ends but is not included. ex: if string is '123456', and given start 2 and end 5. return '345'. End is optional, otherwise the substring includes everything from the starting index and after. If start is negative, then it represents offsets from the string's end, and we return that character. For example, if given -1 as start, we return the last character.
  if(start < 0){
    if( this.length - start < 0){
      return ''
    } else {
      return this[this.length + start]
    }

  } else if(end == null){

    var answer = ''
    for(i=start; i < this.length; i++){
      answer += this[i]
    }
    return answer

  } else {
    var answer = ''
    if(end > this.length)
      end = this.length
    for(i = start; i < end; i++){
      answer += this[i]
    }
  }
  return answer
}// end of MySlice



String.prototype.MyTrim = function(){//remove any whitespaces at the beginned and end of the string only, and return the new string. Ex: given '   Hey  there sir   ' return 'Hey  there sir'.
  var answer = this.split('')
  if(answer.length == 0)
    return ''
  while(true){
    if(answer[0] != ' ')
      break
    for(i = 0; i < answer.length-1; i++){
      answer[i] = answer[ i+1 ]
    }
    answer.pop()

  }


  while(true){
    var last = answer.length-1
    if(answer[last] != ' ')
      return answer.join('')
    answer.pop()
  }
}


console.log('Hey'.MyConcat(' there'));

var str = 'how are you doing?'
console.log(str.MySlice(3));
console.log(str.MySlice(-2));
console.log(str.MySlice(1,4));
console.log(str.MySlice(4,8));

var second = '   Hey  there sir   '.MyTrim()
console.log(second);
console.log(second[second.length-1]);
