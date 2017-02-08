var Node = require('./slqueue_node')
var SLQueue = require('./slqueue')

SLQueue.prototype.compare = function(second){//given a second queue, compare and return a boolean based if they are equal. They are equal only if they have the same values in the same order
  var one = this.size(), two = second.size()
  if(one != two)
    return false
  var current = this.head, twoCurrent = second.head
  while(current){
    if(current.val != twoCurrent.val)
      return false
    current = current.next
    twoCurrent = twoCurrent.next
  }
  return true
}



SLQueue.prototype.removeMin = function(){//remove the minimum value from the queue
  if(!this.head)
    return
  var min = this.head.val, current = this.head, previous = false
  var minNode = this.head, minPrevious = false
  while(current){
    if(current.val < min){
      minNode = current
      minPrevious = previous
      min = current.val
    }
    previous = current
    current = current.next
  }// end of loop

  if(!minPrevious){
    this.head = minNode.next
    minNode.next = null
  } else {
    minPrevious.next = minNode.next
    minNode.next = null
  }
  return

}




SLQueue.prototype.interleave = function(){//return a new queue by alternative the values in the first half with values in the second half. Ex: with the queue [1,2,3,4,5], return [1,4,2,5,3]
  var q = new SLQueue(), firstHalf = [], secondHalf = []
  if(!this.head)
    return q
  var size = this.size()
  var mid = Math.floor(size/2)+1, counter = 0, current = this.head
  while(current){
    counter++
    if(counter < mid){
      firstHalf.push(current)
    } else if (counter == mid && size%2 != 0){
      firstHalf.push(current)
    } else {
      secondHalf.push(current)
    }
    current = current.next

  }// end of while loop

  for(i = 0; i < secondHalf.length; i++){
    if( i == 0){
      q.head = firstHalf[i]
      current = q.head
    } else {
      current.next = firstHalf[i]
      current = current.next
    }
    current.next = secondHalf[i]
    current = current.next
  }// end of for loop

  if(firstHalf.length != secondHalf.length){
    current.next = firstHalf[firstHalf.length-1]
    current = current.next
    current.next = null
  }
  return q
}// end of interleave



// var one = new SLQueue()
// var two = new SLQueue()
// var three = new SLQueue()
// one.enqueue(1)
// one.enqueue(2)
// one.enqueue(3)
// one.enqueue(4)
// two.enqueue(1)
// two.enqueue(2)
// two.enqueue(3)
// two.enqueue(4)
// three.enqueue(1)
// three.enqueue(2)
// three.enqueue(4)
// three.enqueue(4)
// console.log(one.compare(two));
// console.log(one.compare(three));

var queue = new SLQueue()
queue.enqueue(3)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(4)
queue.removeMin()
// queue.display()

var q = new SLQueue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
// q.enqueue(6)
var newQ = q.interleave()
newQ.display()
