var Node = require('./ssl_node')
var SLL = (function(){
  function SLL(){
    this.root = null
  }

  SLL.prototype.display = function(){//simple method to see what's in the tree
    if(!this.root)
      return
    var current = this.root
    while(current){
      console.log(current.val)
      current = current.next
    }
  }


  SLL.prototype.add = function(val){//adds a node with the given value to the end of a list
    var node = new Node(val)
    if(!this.root){
      this.root = node
      return
    }
    var current = this.root
    while(current.next){
      current = current.next
    }
    current.next = node
  }

  SLL.prototype.contains = function(val){//returns boolean based on if the given val is in the list
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


  SLL.prototype.remove = function(val){//given a val, find a node in the list that contians that val and remove the node, return false if not found
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

// var ex = new SLL
// ex.add(1)
// ex.add(9)
// ex.add(3)
// ex.add('hey')
// ex.add(6)
// ex.add('oh')
// ex.remove(3)
// ex.display()
// console.log(ex.contains(1))
// console.log(ex.contains(2))
module.exports = SLL
