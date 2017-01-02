// this code is from the learing platform, completed the methods it told me to, no explanations for the rest.
function HashTable() {
  // given fixed size of array of 26 slots
  this.table = new Array(26);
}
HashTable.prototype.buildLinks = function() {//NOT IMPLEMENTED
  // set an empty array for all indexes in this.table
}
HashTable.prototype.linkBuilt = function() {//NOT IMPLEMENTED
  // determines if links have been built yet
}
function simpleHash(data) {
  // determines the hash value given data
  // how can we use the ASCII values to find appropriate data (use charCodeAt())
  var index = data.charCodeAt(0) //this uses the first index of the data, assuming we get a string, which if the string is 'ABC', we would get 65, if it was 'abc', we would get 97
  if(index < 97)
    return index - 65//if we're dealing with a capital number, we subtract 65 from it, so our 65 would turn into 0, and 'A' would go in the first index of our Array. not elegent but a simple example we can work with
  return index - 97
}
HashTable.prototype.betterHash = function(data) {
  // how can we write a better Hash using ASCII values?
  //? not sure how to implement or what is asking
}
HashTable.prototype.simplePut = function(data) {
  // place data in appropriate place by using simpleHash
  //very simple and basic implementation, doesn't check if anything is already there
  var index = simpleHash(data)
  this.table[index] = data
}
HashTable.prototype.linkPut = function(data) {
  // build links if not built yet and place data in the right place
  var index = simpleHash(data)
  if(Array.isArray(this.table[index])){
    this.table[index].push(data)
  } else {
    this.table[index] = [data]//if there isn't an array there yet, we will create one and put our value inside of it
  }
}
HashTable.prototype.showDistribution = function() {//NOT IMPLEMENTED
  // shows distribution of hash table
  for(var i = 0; i < this.table.length; i++) {
    console.log(this.table[i]);
  }
}
var names = ["Tony", "Tori", "Kate", "Kyle", "Thomas", "Dale",
             "David", "Daisy", "Andy", "Albert", "Dane", "Shane", "Lane",
             "Janet", "Katelyn", "Janet", "Vivian", "Joe"];
var simpleHashTable = new HashTable();
for(var i = 0; i < names.length; i++) {
  simpleHashTable.simplePut(names[i]);
}
simpleHashTable.showDistribution();
var betterHashTable = new HashTable();
for(var i = 0; i < names.length; i++) {
  betterHashTable.linkPut(names[i]);
}
betterHashTable.showDistribution();
