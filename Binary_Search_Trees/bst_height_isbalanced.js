var BST = require('./main_binary_search_tree')
BST.prototype.height = function(){//returns total height of tree, the longest sequence of nodes from root to the bottom or leaf node
  if(!this.root)
    return 0
  var height = 1
  function recurseHeight(currentHeight, node){
    if(!node){
      if(currentHeight > height)
        height = currentHeight
      return
    }
    recurseHeight(currentHeight + 1, node.left)
    recurseHeight(currentHeight + 1, node.right)
  }//end of recurseHeight
  recurseHeight(1, this.root.left)
  recurseHeight(1, this.root.right)

  return height
}//end of height

BST.prototype.isBalanced = function(){//returns boolean value, based on if the tree is balanced or not, basically, a tree is balanced if the height of its left and right subtree differ by one at most
  if(!this.root)
    return true
  var leftHeight = this.root.left? 1 : 0
  var rightHeight = this.root.right? 1 : 0
  if(leftHeight == 0 && rightHeight == 0)
    return true //no point in going any farther

  function bothHeights(currentHeight, node){
    if(!node){
      if(currentHeight > height)
        height = currentHeight
      return
    }
    bothHeights(currentHeight + 1, node.left)
    bothHeights(currentHeight + 1, node.right)
  }// end of bothHeights
  var height = leftHeight? 1 : 0 // first we will find the left subtree's height, but only if there is a left subtree to check
  if(height){
    bothHeights(1, this.root.left)
    leftHeight = height// this will be the height of the left subtree
  }

  var height = rightHeight? 1 : 0 // Next we will find the right subtree's height, but only if there is a right subtree to check
  if(height){
    bothHeights(1, this.root.right)
    rightHeight = height// this will be the height of the right subtree
  }
  //final conditional
  return (leftHeight-1==rightHeight || rightHeight==leftHeight+1 || rightHeight==leftHeight)? true : false
}// end of isBalanced



var first = new BST()
first.add(5)
first.add(1)
first.add(4)
first.add(8)
first.add(7)
first.add(2)
console.log(first.height()) //returns 4
console.log(first.isBalanced()) //returns true, left subtree is 4, and the right is 3
