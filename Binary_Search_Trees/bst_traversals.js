var Node = require('./bst_node')
var BST = require('./main_binary_search_tree')
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


BST.prototype.preOrderNoRecursion = function(){// Same as Preorder, but without recursion, also my implementation is more level orderso i'll print the tree level by level, meaning, i'll print the root (top level), then the root's left and right (second level), then their children (third level) and so on and so forth.

  if(!this.root)
    return
  var holdingArray = [this.root]

  function cycleThroughSubTree(){
    while(holdingArray[0]){
      console.log(holdingArray[0].val)
      if(holdingArray[0].left)
        holdingArray.push(holdingArray[0].left)
      if(holdingArray[0].right)
        holdingArray.push(holdingArray[0].right)
      holdingArray.shift()
    }
  }// END OF cycleThroughSubTree function. If i wanted this to be closer to preOrder, i could log the root value, then call the cycleThroughSubTree function on the root's left node, then call it on the right node

  cycleThroughSubTree()
} //END OF POSTORDER with no recursion****************************************


BST.prototype.postOrder = function(){//displays a BST from its child nodes upward, so i'll print the left subtree, starting with the child nodes and working my way up, then the right subtree, then the root will be last
  if(!this.root)
    return
  function traverseFromBottom(node){
    if(!node)
      return
    traverseFromBottom(node.left)
    traverseFromBottom(node.right)
    console.log(node.val)
    //by first calling the recursive function on the child nodes, then console logging the current node's value, the child nodes get printed first
  }
  traverseFromBottom(this.root.left)
  traverseFromBottom(this.root.right)
  console.log(this.root.val)
} //END OF POSTORDER****************************************


var first = new BST()
first.add(5)
first.add(1)
first.add(4)
first.add(2)
first.add(3)
first.add(8)
first.add(9)
first.add(7)
first.preOrder()
// first.preOrderNoRecursion()
// first.postOrder()
