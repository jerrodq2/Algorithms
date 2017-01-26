function removeBlanks(str){//given string, return it's contents without spaces, ex: given 'how are you' return 'howareyou'
  var answer = ''
  for(i = 0; i < str.length; i++){
    if(str[i] != ' ')
      answer += str[i]
  }
  return answer
}

function getDigits(str){//given a string, returns the integers made from the strings digits. ex: given 'd41ndie5dse3', return '4153'. no built in methods besides length
  var answer = ''
  for(i = 0; i < str.length; i++){
    if(str[i] == '0' || str[i] == '1' || str[i] == '2' || str[i] == '3' || str[i] == '4' || str[i] == '5' || str[i] == '6' || str[i] == '7' || str[i] == '8' || str[i] == '9')
      answer += str[i]
    //not pretty but it works without built in methods
  }
  return answer

}

function acronym(str){//given a string, return the string's acronym(first letters, all capitalized), ex: given 'Gotto go and head to New York' return 'GGAHTNY'
  var answer = ''
  for(i = 0; i < str.length; i++){
    if(i == 0){

      if(str[i] == ' '){
        continue
      } else {
        answer += str[i]
      }
      //end of first if
    } else if(str[i-1] == ' ' && str[i] != ' '){
      answer += str[i]
    }

  }//end of loop
  return answer.toUpperCase()

}



// console.log(removeBlanks('how are you doing?'));
// console.log(getDigits('d41ndie5dse3'));
console.log(acronym('Gotto go and head to New York'));
