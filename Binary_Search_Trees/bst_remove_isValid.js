var Node = require('./bst_node')
var BST = require('./main_binary_search_tree')

BST.prototype.remove = function(val){//delete a node that is found with the given value, a tedious process for a Binary Search Tree, I will cover all possible scenarios
  if(!this.root)
    return false
  var current = this.root
  if(current.val == val){//the root node has to be given specific code since it has no parent node
    if(!current.left && !current.right){//it has no child nodes, simplist scenario
      this.root = null
    } else if(current.left && !current.right){//has only a left node
      this.root = current.left
    } else if(!current.left && current.right){//has only a right node
      this.root = current.right
    } else{//root node has two child nodes, we will connect the root to the left subtree starting node, and connect the right subtree to the right most node in the inital left subtree
      var rightMostNode = current.left
      while(rightMostNode.right){
        rightMostNode = rightMostNode.right
      }
      this.root = current.left
      rightMostNode.right = current.right
      current.left = null
      current.right = null //original root node is no longer connected
    }
    return true
  } // END OF INITAL IF for if root node has the value


  var previous = current
  var endAfterWhileLoop = true//this variable is so that all the removing code can be outside of the while loop and thus is easier to read
  while(current){
    if(current.val == val){
      endAfterWhileLoop = false
      break
    } else if(current.val < val){
      previous = current
      current = current.right
    } else {
      previous = current
      current = current.left
    }
  }// end of while
  if(endAfterWhileLoop)//if it is still true, then the given val was not found in our tree, so we exit
    return false

  //FOR EACH SCENARIO, we have to code based on the scenario and first determine which side of our parent node (previous) we are on
  if(!current.left && !current.right){//no child nodes, we can just remove the current node
    if(previous.val < current.val){//then we are on the right side of our parent
      previous.right = null
    } else {//then we are on the left side of our parent
      previous.left = null
    }
  }//END OF FIRST IF
  else if(current.left && !current.right){
    if(previous.val < current.val){
      previous.right = current.left
      current.left = null
    } else {
      previous.left = current.left
      current.left = null
    }
  }//END OF SECOND IF
  else if(!current.left && current.right){
    if(previous.val < current.val){
      previous.right = current.right
      current.right = null
    } else {
      previous.left = current.right
      current.right = null
    }
  }//END OF THIRD IF
  else{//worst case scenario, the current node has two child nodes, we will do the same things we did for the root node, connect our parent node(previous) to current's left subtree and connect current's right subtree to the right most node in the left subtree
    var rightMostNode = current.left
    while(rightMostNode.right){
      rightMostNode = rightMostNode.right
    }
    if(previous.val < current.val){
      previous.right = current.left
    } else {
      previous.left = current.left
    }
    rightMostNode.right = current.right
    current.left = null
    current.right = null
  }// END OF FINAL CONDITIONAL
  return true//we found and removed the node
}//********************************** END OF REMOVE **********************************






BST.prototype.isValid = function(){//return boolean value based on if the tree is valid or not. Tree is valid if all nodes are in the correct position relative to their parent, ex: smaller values are on the left side of their parent, greater values are on the right side. If once case fails, the tree is invalid
  if(!this.root)
    return true
  var validTree = true
  function checkTree(node){
    if(!node)
      return
    if(node.left){
      if(node.left.val > node.val){ //invalid placement
        validTree = false
        return
      }
    }
    if(node.right){
      if(node.right.val < node.val){ //invalid placement
        validTree = false
        return
      }
    }
    checkTree(node.left)
    checkTree(node.right)
  }// end of checkTree function
  checkTree(this.root)
  return validTree? true : false
}


//this method is so we can see our tree and make sure the proper node was removed
BST.prototype.preOrder = function(){//display a BST from its parent nodes downward, so i'll print the root, then the left subtree, starting from the top, then the right subtree
  if(!this.root)
    return

  function traverseSubTree(node){
    if(!node)
      return
    console.log(node.val)
    traverseSubTree(node.left)
    traverseSubTree(node.right)
  }//end of recursive function
  traverseSubTree(this.root)

} //END OF PREORDER****************************************


var first = new BST()
first.add(5)
first.add(3)
first.add(2)
first.add(4)
first.add(1)
first.add(10)
first.add(11)
first.add(8)
first.add(7)

// first.root.right = new Node(2)  //adding this makes isValid return false
// first.remove(5) //root node
// first.remove(7) //leaf node
// first.remove(3) //node with two child nodes
// first.remove(8) //node with only one child node
// first.preOrder()
// console.log(first.isValid())
