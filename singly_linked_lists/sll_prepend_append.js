var Node = require('./sll_node')
var SLL = require('./main_singly_linked_lists')

SLL.prototype.prepend = function(val, before){//inserts a new node with the given value immediately before the node that contains the before value, or at the end of the list if before is not found
  var node = new Node(val)
  if(!this.root)
    return this.root = node
  var current = this.root
  if(current.val == before){
    this.root = node
    node.next = current
    return
  }
  while(current.next){
    if(current.next.val == before){
      node.next = current.next
      current.next = node
      return
    }
    current = current.next
  }
  current.next = node
}// end of prepend

SLL.prototype.append = function(val, after){//inserts a new node with the given value immediately after the node that contains the after value, or at the end of the list if after isn't found
  var node = new Node(val)
  if(!this.root)
    return this.root = node
  var current = this.root
  while(current){
    if(current.val == after){
      node.next = current.next
      current.next = node
      return
    }
    if(!current.next){
      current.next = node
      return
    }
    current = current.next

  }//end of while loop


}



a = new SLL()
a.add(1)
a.add(2)
a.add(3)
a.add(4)
a.add(5)
a.add(6)
// a.prepend(10, 8)
// a.prepend(10, 1)
// a.prepend(10, 4)
// a.append(10, 8)
// a.append(10, 1)
// a.append(10, 5)
a.display()
