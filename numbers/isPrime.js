function isPrime(num){//given a number, find the optimal way to see if the number is prime, or no numbers besides itself and 1 can be multiplied togehter to equal the given number, ex: 1, 3, 5, 7, 11
  if(num % 2 == 0){//this method eliminates half of all the possible numbers you could be given, or all odd numbers
    return false
  }
  for(i = 3; i < num/2; i++){
    //Note: simplist way to do this is starting with 3, since 1 is pointless and we already checked 2, we divide the given number by i. If the modulus is zero, that means that it returned a whole number, and that number with i can multiply together to get the given num, so it isn't prime. I only go until half of the given num, since in theory, any number past that will already have been checked in the first half of numbers. Ex: for 100, anything past 50 will give you between 1 and 2 as a return, a fraction, since we know 100/50 = 2, and 100/1 = 100. Inbetween will just be fractions
    if(num % i == 0){
      return false
    }
  }
  return true

}


console.log(isPrime(10)); //FALSE
console.log(isPrime(9)); //FALSE
console.log(isPrime(51)); //FALSE
console.log(isPrime(49)); //FALSE
console.log(isPrime(97)); //TRUE
