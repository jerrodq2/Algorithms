var Node = require('./bst_node')
var BST = require('./main_binary_search_tree')
BST.prototype.toArray = function(){//turn the BST into an array and returns it, the bst will be traversed in inOrder, meaning in numerical order (1, 2, 3, ect)
  if(!this.root)
    return []
  var arr = []
  function inOrderTraversal(node){
    if(!node)
      return

    inOrderTraversal(node.left)
    arr.push(node.val)
    inOrderTraversal(node.right)
  }
  inOrderTraversal(this.root)
  //calling the inOrderTraversal function in this order means that all of the node's to the current nodes left (the smaller nodes) will be pushed into the arr first, then the current node, then the nodes to it's right (the bigger nodes). So everything is pushed in numerical order
  return arr
} //END OF TOARRAY ****************************


function SSL(){// For the toList method
  this.root = null
}
function SSLNode(val){// For the toList method
  this.val = val
  this.next = null
}
BST.prototype.toList = function(){//same as toArray, but i'm creating and returning a singly linked list
  if(!this.root)
    return new SSL()
  var list = new SSL()
  var arr = []//since i can't just access the last node in a singly linked list, it's fast to gather all the values in an array, then loop through that array at the end
  function inOrderTraversal(node){
    if(!node)
      return
    inOrderTraversal(node.left)
    arr.push(node.val)
    inOrderTraversal(node.right)
  }
  inOrderTraversal(this.root)
  list.root = new SSLNode(arr[0])
  var current = list.root
  for(i = 1; i < arr.length; i++){
    current.next = new SSLNode(arr[i])
    current = current.next
  }
  return list
} //END OF TOLIST ****************************

BST.prototype.minHeight = function(){//returns the smallest height of a BST, or the shortest distance from a leaf node to the root node, assumption is that if the root node is missing a left or right, this counts as 0, the shortest distance, this was not otherwise stated, but it is easy to refactor this code to compensate
  if(!this.root)
    return 0
  if(!this.root.left)
    return 1
  var minH = 1
  var current = this.root
  while(current.left){//I have to set a minimum height to compare so this is like a control
    minH ++
    current = current.left
  }
  function traverseTree(currentHeight, node){
    if(!node){
      if(currentHeight < minH)
        minH = currentHeight
      return
    }
    traverseTree(currentHeight + 1, node.left)
    traverseTree(currentHeight + 1, node.right)

  }//END OF traverseTree
  traverseTree(1, this.root.left)
  traverseTree(1, this.root.right)
  return minH
}//END OF minHeight

var first = new BST()
first.add(5)
first.add(1)
first.add(4)
first.add(2)
first.add(3)
first.add(8)
first.add(9)
first.add(7)
// console.log(first.toArray())
// console.log(first.toList())
// console.log(first.minHeight())
