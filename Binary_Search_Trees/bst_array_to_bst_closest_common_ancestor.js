var Node = require('./bst_node')
var BST = require('./main_binary_search_tree')

function arrayToBST(arr){//given an array that is sorted, in ascending order, return a bst object that is height  balanced
  if(arr.length == 0)
    return new BST()
  var bst = new BST(), mid = Math.floor(arr.length/2)
  bst.root = new Node(arr[mid])
  var leftCurrent = bst.root, rightCurrent = bst.root, rightCounter = 1
  for(i = mid - 1; i >= 0; i--){
    var leftSide = i, rightSide = ( mid + rightCounter )
    rightCounter ++
    leftCurrent.left = new Node(arr[leftSide])
    leftCurrent = leftCurrent.left
    rightCurrent.right = new Node(arr[rightSide])
    rightCurrent = rightCurrent.right
  }//end of loop
  return bst
}// end of arrayToBSt
BST.prototype.checkIfArrayToBSTWorked = function(){//this function prints the root, then all left values starting with the left subtree root going down then the same for the right just to make sure the above funciton worked like it was supposed to
  console.log('Root is: ', this.root.val);
  console.log('left subtree root is: ', this.root.left.val);
  console.log('Rest of left subtree is : ')
  var current = this.root.left? this.root.left.left : null
  while(current){
    console.log(current.val);
    current = current.left
  }
  console.log('End of left Subtree');
  console.log('right subtree root is: ', this.root.right.val);
  console.log('Rest of right subtree is : ')
  var current = this.root.right? this.root.right.right : null
  while(current){
    console.log(current.val);
    current = current.right
  }

}// end of checkIfArrayToBSTWorked

BST.prototype.closestCommonAncestor = function(val1, val2){//given two contain values, return the value of the closest common ancestor node. For each node, the chain up to root represents that node's ancestry, return the node in both ancestor chains that is closest to both. Assumption is that both given nodes are actually contained within the bst
  if( (val1 > this.root.val && val2 < this.root.val) || (val1 < this.root.val && val2 > this.root.val) ){
    //if either of these prove true, then the two given values are on opposite sides of the tree, and the root is their closest common ancestor
    return this.root.val
  }
  var current = val1<this.root.val? this.root.left : this.root.right// we already know that both values are on one side of the tree, so this finds out which so we can start from there
  while(true){//no matter what, we will find an answer, so we keep going till we return
    if(val1 == current.val || val2 == current.val){
      return current.val
    } else if( (val1 > current.val && val2 < current.val) || (val1 < current.val && val2 > current.val) ){//this check will see in at any time, the two values diverge, meaning they are now on opposite sides of the current subtree, in which case, current is their closest common ancestor
      return current.val
    } else if(val1 < current.val){// if we reach this point then we've confirmed that both values are still on one side of the subtree, so we just see which side to coninue on
      current = current.left
    } else {
      current = current.right
    }
  }// end of while
}//end of closestCommonAncestor


var first = arrayToBST([1, 2, 3, 4, 5])
// console.log(first.contains(1))    // returns true
// console.log(first.contains(2))    // returns true
// console.log(first.contains(3))    // returns true
// console.log(first.contains(4))    // returns true
// console.log(first.contains(5))    // returns true
console.log(first.closestCommonAncestor(1, 1)) //returns 1
console.log(first.closestCommonAncestor(2, 1)) //returns 2
console.log(first.closestCommonAncestor(2, 5)) //returns 3, the root, since they are on opposite sides of the tree
