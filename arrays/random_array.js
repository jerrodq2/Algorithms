//********** create an array with 10 random numbers from 0 to 100
function randomArray(){
  var arr = []
  for(var i = 0; i < 10; i++){
    arr.push( Math.floor(Math.random() * (100 - 0 + 1)) + 0 )
  }
  console.log(arr);
}
