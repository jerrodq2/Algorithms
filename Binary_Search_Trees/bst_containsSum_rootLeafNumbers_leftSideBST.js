var Node = require('./bst_node')
var BST = require('./main_binary_search_tree')

BST.prototype.treePathContainsSum = function(sum){//given a sum and BST containing numbers, return a boolean based on if there is a root to leaf path, that if the values are added up, equal that sum. So If i the sum is 10, and the root(2) has a left node of (4), and a left leaf node of (4) they add up to 10, i return true. In this example, if a node has only one child, it is considered a leaf node
  if(!this.root)
    return false
  var doesTreeContainSum = false
  function findTotal(node, currentTotal){
    if(!node){
      if(currentTotal == sum)
        doesTreeContainSum = true
      return
    }
    if( (node.left && !node.right) || (!node.left && node.right) ){//checks if the node has only one child
      if(currentTotal+node.val == sum)
        doesTreeContainSum = true
    }
    findTotal(node.left, currentTotal + node.val)
    findTotal(node.right, currentTotal + node.val)
  }// end of findTotal function
  findTotal(this.root, 0)
  if(doesTreeContainSum)
    return true
  return false
}//END OF treePathContainsSum**********************


BST.prototype.sumOfBstRootLeafNumbers = function(){//given that your BST contains only numbers between 0 and 9, we consider the digits encountered in order when traversing from root to leaf to be that path's root-leaf number. Ex: if the root-leaf path has values 4 ->2->3, the root leaf number is 432, find the sum of all root leaf numbers in the tree. Node is a leaf if it has no children in this case
  if(!this.root)
    return false
  var arr = []
  function findRootLeafs(node, currentNums){
    if(!node)
      return
    currentNums += node.val
    if(!node.left && !node.right){
      arr.push(currentNums)
      return
    }
    findRootLeafs(node.left, currentNums)
    findRootLeafs(node.right, currentNums)
  }// end of findRootLeafs function
  findRootLeafs(this.root, '')// using a string, i can concatenate numbers, instead of adding them
  var sum = 0
  for(i = 0; i < arr.length; i++){
    sum += Number(arr[i])
  }
  return sum
}//end of sumOfBstRootLeafNumbers**********************


BST.prototype.leftSide = function(){//return an array containing, the numbers of the BST you would only see if you metaphorically stood on the left and looked sideways at the tree. Only the root and left most nodes
  if(!this.root)
    return []
  var arr = [], current = this.root
  while(current){
    arr.push(current.val)
    current = current.left
  }
  return arr
}// end of leftSide


var first = new BST()
first.add(5)
first.add(1)
first.add(4)
first.add(8)
first.add(7)
// console.log(first.treePathContainsSum(5))//returns false
// console.log(first.treePathContainsSum(10)) //returns true
// console.log(first.treePathContainsSum(6)) //returns true
// console.log(first.sumOfBstRootLeafNumbers()) //returns 1101, sum of 514 and 587
// console.log(first.leftSide());
