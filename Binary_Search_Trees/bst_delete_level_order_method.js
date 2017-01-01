var BST = require('./binary_search_tree')


BST.prototype.delete = function(data){
  if(!this.root)
    return false

  var current = this.root
  //first we deal with if the first node, the root has to be deleted
  if(current.val == data){//START OF FIRST BIG IF
    //first case, it has no children nodes
    if(current.left == null && current.right == null){
      this.root = null
      return
    } else if(current.left != null && current.right == null){//only the right side is empty
      this.root = current.left
      current.left = null// the previous root node just floats away basically, it's not connected to the tree anymore
      return
    } else if(current.left == null && current.right != null){//only the left side is empty
      this.root = current.right
      current.right = null// the previous root node just floats away basically, it's not connected to the tree anymore
      return
    }else if(current.left != null && current.right != null){//neither are empty, we'll make the right most node in the left subtree connect to the right subtree, and the start of the original left subtree, our new root
      var rightmost = current.left//node that is the start of the left subtree
      while(rightmost.right){
        rightmost = rightmost.right
      }
      this.root = current.left//start of left subtree is the new root
      rightmost.right = current.right//connect the right subtree with the right most node in the left subtree
      current.left = null
      current.right = null//disconnect all nodes from the original root node, it will float away
      return
    }

  }//END OF FIRST BIG IF


  var previous = current
  //Next, if the root node wasn't the one we need, we find the node that needs to be deleted, and go through whichever case we need to after we find it
  while(current){
    if(current.val == data)
      break
    if(current.val < data){
      previous = current
      current = current.right
    } else {
      previous = current
      current = current.left
    }
  }//end of while
  if(!current)//then the node we want to delete doesn't exist in the tree
    return false
  //now we go throught the different possible scenarios we need to deal with
  if(current.left == null && current.right == null){//both are null, we just disconnect current
    if(current.val < previous.val){//then we are on the left side of our parent node (previous)
      previous.left = null
    } else{//then we are on the right side of our parent node (previous)
      previous.right = null
    }
  } else if(current.left == null && current.right != null){//only the left child node is null
    if(current.val < previous.val){//then we are on the left side of our parent node (previous)
      previous.left = current.right
      current.right = null
    } else{//then we are on the right side of our parent node (previous)
      previous.right = current.right
      current.right = null
    }
  } else if(current.left != null && current.right == null){//only the right child node is null
    if(current.val < previous.val){//then we are on the left side of our parent node (previous)
      previous.left = current.left
      current.left = null
    } else{//then we are on the right side of our parent node (previous)
      previous.right = current.left
      current.left = null
    }
  } else{//both of our child nodes are not null, so we will make our left child node connect to our parent node(previous), and make the right most node in the left subtree (started by our left child node) connect to the right subtree (started by our right child node)
    var rightmost = current.left//node that is the start of the left subtree
    while(rightmost.right){
      rightmost = rightmost.right
    }
    if(current.val < previous.val){//then we are on the left side of our parent node (previous)
      previous.left = current.left
    } else{//then we are on the right side of our parent node (previous)
      previous.right = current.left
    }
    rightmost.right = current.right//connect the right subtree with the right most node in the left subtree
    current.left = null
    current.right = null//disconnect all nodes from the original root node, it will float away
  }


}//END OF DELETE METHOD


BST.prototype.levelOrder = function(){//basically if you picture a BST, as an actual tree, we want to console.log each value by level, meaning we would print the root value which is the top level, then we would print the root's left and right node's, which would be the second level of nodes, then each of the left and right's children nodes, the third level, and so on
  var arr = []

  function moveArr(){//in this function, we will remove the first value of the array arr, and move each value to the left one, cycling the previous starting index out
    if(arr.length == 1){
      arr = []
      return
    }
    for(i = 0; i < arr.length; i++){
      if(i == arr.length - 1){
        arr[i - 1] = arr[i]
        arr.length = arr.length-1
      } else if(i == 0){
        continue
      } else{
        arr[i - 1] = arr[i]
      }
    }
  }//end of moveArr helper function

  console.log(this.root.val)
  if(!this.root.left && !this.root.right)
    return
  if(this.root.left)
    arr.push(this.root.left)
  if(this.root.right)
    arr.push(this.root.right)

  while(arr[0]){
    console.log(arr[0].val)
    if(arr[0].right)
      arr.push(arr[0].right)
    if(arr[0].left)
      arr.push(arr[0].left)
    moveArr()
  }
  
}//END OF LEVEL ORDER METHOD



var first = new BST()
first.insert(5)
first.insert(1)
first.insert(4)
first.insert(8)
first.insert(7)
// first.delete(5)
// console.log(first.root.val) //after the delete above, the new root would be one
// first.inOrder()
first.levelOrder()
