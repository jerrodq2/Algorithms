var Node = require('./sll_node')
var SLL = require('./main_singly_linked_lists')


SLL.prototype.addFront = function(val){//add a node with the given value to the front of the list
  var node = new Node(val)
  if(!this.root)
    return this.root = node
  node.next = this.root
  this.root = node
}

SLL.prototype.removeFront = function(){//remove the node at the front of the list
  if (!this.root)
    return
  var first = this.root
  this.root = first.next
  first.next = null
}

SLL.prototype.length = function(){//return the length or number of nodes in the list
  if(!this.root)
    return 0
  var current = this.root
  var length = 0
  while(current){
    length ++
    current = current.next
  }
  return length

}



var ex = new SLL()
ex.addFront(1)
ex.addFront(2)
ex.addFront(2)
// ex.removeFront()
// console.log(ex.length())
ex.display()
