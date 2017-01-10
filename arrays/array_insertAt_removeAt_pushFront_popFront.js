Array.prototype.pushFront = function(val){//given a value, push it to the front of the array without using built in methods
  this.length += 1
  for(i = this.length - 1; i > 0; i--){
    this[i] = this[i -1]
  }
  this[0] = val
}

Array.prototype.popFront = function(){//remove and return the value from the front of the array without using built in methods, except pop
  var val = this[0]
  for(i = 0; i < this.length-1; i++){
    this[i] = this[i +1]
  }
  this.length -= 1
  return val
}

Array.prototype.insertAt = function(index, val){//given an index and value, insert the given val into the index of the array, do this without built in methods
  if(index > this.length)
    return this[index] = val
  this.length += 1
  for(i = this.length - 1; i > index; i--){
    this[i] = this[i -1]
  }
  this[index] = val
}

Array.prototype.removeAt = function(index){//given a value, remove the given val into the index of the array, you can only use the pop method
  if(index > this.length)
    return
  for(i = index; i < this.length-1; i++){
    this[i] = this[i +1]
  }
  this.length -= 1
}

var a = [1, 2, 3, 4, 5]
// a.pushFront(3)
// a.popFront()
// a.insertAt(3, 10)
a.removeAt(2)
console.log(a);
