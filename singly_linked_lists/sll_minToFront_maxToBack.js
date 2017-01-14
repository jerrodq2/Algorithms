var Node = require('./sll_node')
var SLL = require('./main_singly_linked_lists')

SLL.prototype.moveMinToFront = function(){//find the node with the smallest value in the list, move that node to the front of the list
  if(!this.root)
    return this
  var current = this.root
  var min = current.val
  var minNode = current
  var minPrevious = current //this will be the node before the minNode
  var previous = current //this is a counter/iterator so we can keep track of each node's previous as we progress
  while(current){
    if(current.val < min){
      min = current.val
      minNode = current
      minPrevious = previous
    }
    previous = current
    current = current.next
  }//end while loop

  if(minNode == this.root)
    return this //then the first node has the lowest value, don't need to do anything
  minPrevious.next = minNode.next
  minNode.next = this.root
  this.root = minNode
  return
}// end of moveMinToFront


SLL.prototype.moveMaxToBack = function(){//find the node with the largest value in the list, move that node to the back of the list
  if(!this.root)
    return
  var current = this.root
  var max = current.val
  var maxNode = current
  var maxPrevious = current
  var previous = current
  var lastNode = current
  while(current){
    if(current.val > max){
      max = current.val
      maxNode = current
      maxPrevious = previous
    }
    if(!current.next){
      lastNode = current
    }
    previous = current
    current = current.next
  }// end of while
  if(maxNode == lastNode)
    return this
  if(maxNode == this.root){
    this.root = this.root.next
    maxNode.next = null
    lastNode.next = maxNode
    return this
  }
  maxPrevious.next = maxNode.next
  maxNode.next = null
  lastNode.next = maxNode
  return this
}






a = new SLL()
a.add(2)
a.add(1)
a.add(3)
a.add(4)
a.add(5)
// a.moveMinToFront()
// a.moveMaxToBack()
a.display()
