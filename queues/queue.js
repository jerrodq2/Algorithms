// A queue is a list of elements that are accessible only from the front of the list which is called the front. The queue is known as a first-in, first out (FIFO) data structure. You can think of a queue as the drive-through at McDonalds. The first car there gets served first and leaves. First in first out. Seems fair. Although .enqueue, and .queue methods are often associated with queues, JavaScript "Arrays" are also queues because it implements the .shift and .unshift() methods.
var Queue = (function(){
  function Queue() {
    this.dataStore = [];
    this.back = 0;
  }
  Queue.prototype.enqueue = function(item) {// insertion or push
    this.dataStore[this.back] = item;
    this.back++;
  }
  Queue.prototype.dequeue = function() {//deletion or pop, but from the front
    var output = this.dataStore[0];
    for(var i = 1; i < this.back; i++) {
      this.dataStore[i - 1] = this.dataStore[i];
    }
    this.back--;
    return output;
  }
  Queue.prototype.display = function() {
    for(var i = 0; i < this.back; i++) {
      console.log(this.dataStore[i]);
    }
  }
  return Queue;
})();
module.exports = Queue;
