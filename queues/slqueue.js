var Node = require('./slqueue_node')

//this is the Queue data structure built in the format of a singly linked list. It follows the FIFO (First in First out) principles.

var SLQueue = (function(){
  function SLQueue(){
    this.head = null
    this.tail = null
  }

  SLQueue.prototype.enqueue = function(val){//given a val, create a new node and add it to the end of the list
    var node = new Node(val)
    if(!this.head){
      this.head = node
      this.tail = node
      return
    }
    this.tail.next = node
    this.tail = node
    return
  }

  SLQueue.prototype.dequeue = function(){//remove and return the value at the start of the list
    if(!this.head)
      return false
    var frontNode = this.head
    this.head = frontNode.next
    frontNode.next = null
    return frontNode.val
  }

  SLQueue.prototype.front = function(){//return front value of list, don't remove
    return this.head? this.head.val : 'List is empty'
  }

  SLQueue.prototype.contains = function(val){//returns boolean based on if the queue has a node that has the same value as the one that is given
    if(!this.head)
      return false
    var current = this.head
    while(current){
      if(current.val == val)
        return true
      current = current.next
    }
    return false
  }

  SLQueue.prototype.size = function(){//return the size or length of the queue
    if(!this.head)
      return 0
    var size = 0, current = this.head
    while(current){
      size++
      current = current.next
    }
    return size
  }

  SLQueue.prototype.display = function(){//display all nodes in the queue
    if(!this.head)
      return console.log('List is empty');
    var current = this.head
    console.log('Start of list');
    while(current){
      console.log(current.val);
      current = current.next
    }
    return console.log('End of list');
  }

  SLQueue.prototype.isEmpty = function(){//return boolean based on if the queue is empty or not
    return this.head? false : true
  }


  return SLQueue
})()

// var q = new SLQueue()
// q.display()
// q.enqueue(4)
// q.enqueue(5)
// q.enqueue(2)
// q.enqueue('hey')
// q.enqueue(9)
// q.enqueue('uh oh')
// q.display()
// console.log(q.contains(1));
// console.log(q.contains(2));
// console.log(q.front());
// console.log(q.size());

// q.dequeue()
// q.dequeue()
// q.display()






module.exports = SLQueue
