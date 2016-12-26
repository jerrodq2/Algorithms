//************PRINT 1-255
for (var i = 1; i <= 255; i++)
  console.log(i);

//*********ODD NUMBERS
for (var i = 1; i <= 1000; i++){
  i % 2 != 0? console.log(i) : i
}

//*********PRINT SUM
function printSum(){
  var sum
  for (var i = 1; i <= 5000; i++){
    i % 2 != 0? sum+= i : i
  }
  console.log(sum);

}

//********ITERATE THROUGH ARRAY
function iterate(arr){
  for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
}

//******FIND MAX
function max(arr){
  var max = arr[0]
  for (var i = 0; i < arr.length; i++)
    i > max? max = i : i
}

//********FIND AVG
function avg(arr){
  var sum
  for (var i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  console.log(sum/arr.length);
}

//*********ARRAY WITH ODD NUMBERS
function arrOdd(){
  var Y = []
  for (var i = 1; i <= 255; i++){
    i % 2 != 0? Y.push(i) : i
  }
}

//*********GREATER THAN Y
function greaterThanY(arr, y){
  var count = 0
  for (var i = 0; i < arr.length; i++){
    arr[i] > y? count ++: i
  }
  console.log(count);
}

//********SQUARE VALUES
function square(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i] * arr[i]
  }
}

//*********ELIMINATE NEGATIVE NUMBERS
function elim(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] < 0? arr[i] = 0: i
  }
}

//***********MAX, MIN, AND AVERAGE
function all(arr){
  var sum=0; max = arr[0], min = arr[0]
  for (var i = 0; i < arr.length; i++){
    if( arr[i] > max){
      max = arr[i]
    } else if( arr[i] < min){
      min = arr[i]
    }
    sum += arr[i]
  }
  console.log('avg: '+ sum/arr.length + ', min:' + min + ', max:' + max);
}

//************SWAP VALUES
function swap(arr){
  for (var i = 0; i < arr.length; i++){
    if(i == arr.length -1){
      arr[i] = 0
    } else{
      arr[i] = arr[i + 1]
    }
  }
  console.log(arr);
}

//*******NUM TO STRING
function numToString(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] < 0? arr[i] = 'Dojo': i
  }
  console.log(arr);
}
