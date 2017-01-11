var Node = require('./ssl_node')
var SLL = (function(){
  function SLL(){
    this.root = null
  }

  SSL.prototype.display = function(){//simple method to see what's in the tree
    if(!this.root)
      return
    var current = this.root
    while(current){
      console.log(current.val)
      current = current.next
    }
  }


  BST.prototype.add = function(val){//adds a node with the given value to the end of a list
    var node = new Node(val)
    if(!this.root)
      this.root = node
    var current = this.root
    while(current.next){
      current = current.next
    }
    current.next = node
  }

  BST.prototype.contains = function(val){//returns boolean based on if the given val is in the list
    if(!this.root)
      return false
    var current = this.root
    while(current){
      if(current.val == val)
        return true
      current = current.next
    }
    return false
  }


  BST.prototype.remove = function(val){//given a val, find a node in the list that contians that val and remove the node, return false if not found
    if(!this.root)
      return false
    var current = this.root
    if(current.val == val){
      this.root = current.next
      current.next = null
      return true
    }
    var previous = current
    while(current){
      if(current.val == val){
        previous.next = current.next
        current.next = null
        return true
      }
      previous = current
      current = current.next
    }
    return false
  }


  return SLL
})()

module.exports = SLL
