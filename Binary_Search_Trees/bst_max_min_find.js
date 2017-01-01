var BST = require('./binary_search_tree')
BST.prototype.getMax = function(){
  if(!this.root){
    return false
  }
  var current = this.root
  while(current.right){
    current = current.right
  }
  return current.val//this will be the most rigth value of our tree, which if the tree is valid, the largest value in the tree
}
BST.prototype.getMin = function(){
  if(!this.root){
    return false
  }
  var current = this.root
  while(current.left){
    current = current.left
  }
  return current.val//this will be the most left value of our tree, which if the tree is valid, the smallest value in the tree
}
BST.prototype.find = function(data){
  if(!this.root)
    return false
  var current = this.root
  while(current){
    if(current.val == data)
      return current
    if(current.val < data){
      current = current.right
    } else{
      current = current.left
    }
  }//end while
  return false//we didn't find it
}




var first = new BST()
first.insert(5)
first.insert(1)
first.insert(4)
first.insert(8)
first.insert(7)
console.log(first.getMax())
console.log(first.getMin())
console.log(first.find(4))
console.log(first.find(3))
