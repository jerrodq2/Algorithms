var Node = require('./sll_node')
var SLL = require('./main_singly_linked_lists')

SLL.prototype.removeNegatives = function(){//remove any nodes in the list containing negative numbers
  if(!this.root)
    return this
  var current = this.root
  while(current.val < 0){//this loop is for the first node, and if each node after it is negative
    this.root = current.next
    current.next = null
    current = this.root
  }
  var previous = current
  while(current){
    if(current.val < 0){
      previous.next = current.next
      current.next = null
      current = previous.next
      continue
    }

    previous = current
    current = current.next
  }// end of while loop
  return this
}// end of removeNegatives



function sllConcat(one, two){// given two Singly Linked Lists, concat them by adding the second one to the end of the first list and returning the new list
  if(!one.root)
    return two
  if(!two.root)
    return one
  var lastNode, current = one.root
  while(current.next){
    current = current.next
  }
  current.next = two.root
  return one
}// end of sllConcat


SLL.prototype.splitOnVal = function(val){//given a value, you should find the node within the sll that contains that value, split it/separate it from the original list and return it and all nodes that follow, as a new list. If not found, return a new list with a new node containing the value as its root
  var list = new SLL()
  var node = new Node(val)
  if(!this.root){
    list.root = node
    return list
  }
  var current = this.root
  if(current.val == val){
    this.root = null
    list.root = current
    return list
  }

  var previous = current
  while(current){
    if(current.val == val){
      previous.next = null
      list.root = current
      return list
    }
    previous = current
    current = current.next
  }// end of while
  list.root = node
  return list
}


var a = new SLL()
a.add(1)
a.add(-2)
a.add(3)
a.add(4)
a.add(5)
a.add(-6)
// a.removeNegatives()
// a.display()

b = new SLL()
b.add(7)
b.add(8)
b.add(9)

var c = sllConcat(a, b)
// c.display()

// var d = a.splitOnVal(1)
// var d = a.splitOnVal(5)
var d = a.splitOnVal(11)
d.display()
