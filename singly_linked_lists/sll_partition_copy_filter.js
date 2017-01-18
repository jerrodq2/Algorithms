var Node = require('./sll_node')
var SLL = require('./main_singly_linked_lists')

SLL.prototype.partition = function(val){//locates the node with the given val, reorders the list so that this node is the root node, all nodes that have a value less than the given val come first, and nodes with values greater than the val come after. Don't care about arranging nodes in comparison to each other just the given val. If the val is not found, return the list as is. Ex: if list has nodes with values of: 4, 6, 3, 7, 1  and the given value is 4, the returned list should be something like: 4, 3, 1, 6, 7
  if(!this.root)
    return this
  var earlyNodes = [], laterNodes = [], current = this.root, middleNode = false
  while(current){
    if(current.val == val){
      middleNode = current
    } else if (current.val > val){
      laterNodes.push(current)
    } else {
      earlyNodes.push(current)
    }
    current = current.next
  }// end of while loop
  if(!middleNode)
    return this
  this.root = middleNode
  current = this.root
  current.next = null
  for(i = 0; i < earlyNodes.length; i++){
    earlyNodes[i].next = null
    current.next = earlyNodes[i]
    current = current.next
  }
  for(i = 0; i < laterNodes.length; i++){
    laterNodes[i].next = null
    current.next = laterNodes[i]
    current = current.next
  }
  return this
}// end of partition **********************


SLL.prototype.copy = function(){//create a copy of the list and return it. Copy each node, and return the new list with the nodes in the same order as the original
  var copy = new SLL()
  if(!this.root)
    return copy
  var current = this.root
  var node = new Node(current.val)
  current = current.next
  copy.root = node
  var copyCurrent = copy.root
  while(current){
    node = new Node(current.val)
    copyCurrent.next = node
    copyCurrent = copyCurrent.next
    current = current.next
  }
  return copy
}// end of copy



SLL.prototype.filter = function(low, high){//given a low value and a high value, remove from the list any node whose value is lower than the given low, or higher than the given high
  if(!this.root)
    return this
  var current = this.root
  //loops to deal with the root node and it's removal
  while(current.val < low){
    if(!current.next){
      this.root = null
      return this
    }
    this.root = current.next
    current = this.root
  }// end of low while

  while(current.val > high){
    if(!current.next){
      this.root = null
      return this
    }
    this.root = current.next
    current = this.root
  }// end of high while
  //end of root node while loops

  var previous = current
  while(current){
    if(current.val < low){
      previous.next = current.next
      current = previous.next
      continue
    } else if (current.val > high){
      previous.next = current.next
      current = previous.next
      continue
    }
    previous = current
    current = current.next
  }// end of while loop
  return this
}


var p = new SLL()
p.add(4)
p.add(7)
p.add(23)
p.add(1)
p.add(9)
p.add(10)
p.add(0)
// p.partition(9)
// p.filter(3, 11)
p.display()

// var copy = p.copy()
// copy.display()
