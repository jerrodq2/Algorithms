var BST = (function(){
  function BST(){// My implementation of BST assumes the possibility of duplicates unless otherwise stated
    this.root = null
  }
  function Node(value){
    this.val = value
    this.left = null
    this.right = null
  }

  BST.prototype.add = function(val){//accepts value and inserts new node into tree, if there is a duplicate we will put it on the right side of the original value
    var node = new Node(val)
    if(!this.root){
      this.root = node
      return
    }
    var current = this.root
    var previous = current
    while(current){
      if(current.val == val){
        previous = current
        current = current.right
      } else if(current.val < val){
        previous = current
        current = current.right
      } else {
        previous = current
        current = current.left
      }
    }// end of while loop
    if(previous.val == val){
      previous.right = node// our while loop will have moved current to the right if we ran into a duplicate and would have stopped if the right was null, so this conditional covers the possibility of ending on that
    } else if(previous.val < val){
      previous.right = node
    } else{
      previous.left = node
    }

  }// END OF ADD

  BST.prototype.isEmpty = function(){//returns boolean to see if tree is empty or not
    return !this.root? true : false
  }

  BST.prototype.contains = function(val){//returns boolean value based on if the tree has the given value inside of it
    var current = this.root
    if(!current)
      return false
    while(current){
      if(current.val == val){
        return true
      } else if(current.val < val){
        current = current.right
      } else{
        current = current.left
      }
    }//end of while
    return false
  }//END OF CONTAINS

  BST.prototype.min = function(){//returns minimum value of tree, no matter what, if the tree is valid, the minimum value will be the left most value
    var current = this.root
    if(!current)
      return false
    while(current.left){
      current = current.left
    }
    return current.val

  } //END OF MIN

  BST.prototype.max = function(){//returns maximum value of tree, no matter what, if the tree is valid, the maximum value will be the right most value
    var current = this.root
    if(!current)
      return false
    while(current.right){
      current = current.right
    }
    return current.val

  } //END OF MAX

  BST.prototype.size = function(){//returns the size, or number of nodes in the tree
    if(!this.root)
      return 0
    var count = 1
    function recurse(node){
      if(!node)
        return
      count ++
      recurse(node.right)
      recurse(node.left)
    }//end of recurse
    recurse(this.root.right)
    recurse(this.root.left)
    return count
  }//end of size




  return BST
})();

module.exports = BST
// var first = new BST()
// first.add(5)
// first.add(1)
// first.add(4)
// first.add(8)
// first.add(7)
// console.log(first.min())          // returns 1
// console.log(first.max())          // returns 8
// console.log(first.isEmpty())      // returns false
// console.log(first.contains(4))    // returns true
// console.log(first.contains(3))    // returns false
// console.log(first.size())         // returns 5
