// stacks are a datastructure that follows the last in, first out (LIFO), you can only add to the back and take out from the back, or the top, the first element could never come out after being put in
var Stack = (function(){
  function Stack() {
    this.dataStore = [];
    this.top = -1;
  }
  Stack.prototype.push = function(item) {
    this.top++
    this.dataStore[this.top] = item

  }
  Stack.prototype.pop = function() {
    this.top--
    return this.top ++
  }
  Stack.prototype.display = function() {
    console.log(this.dataStore)
  }
  return Stack;
})();
module.exports = Stack;
