var BST = (function(){
  function BST(){// My implementation of BST assumes we don't want any duplicates
    this.root = null
  }
  function Node(data, left=null, right=null){
    this.val = data
    this.left = left
    this.right = right
  }
  BST.prototype.insert = function(data){//add a new node into the tree, no duplicates
    var n = new Node(data)
    if(!this.root){
      this.root = n
      return
    }
    var current = this.root, previous
    while(current){
      if(current.val == data){
        return//we don't want any duplicates
      } else if(current.val < data){
        previous = current
        current = current.right
      } else{
        previous = current
        current = current.left
      }
    }//end while
    if(previous.val < data){//by this point current is at an empty spot, where we want to insert the new node, but it has to be attached to it's soon to be parent node (previous), we just have to see which side to put it on
      previous.right = n
    } else{
      previous.left = n
    }
  }//end of insert


//definition wasn't clear but I'm assuming these next 3 methods, inorder, postorder, and preorder as just practice moving about the tree, and not actually affecing it in any way, i'll just display all the values
  function searchSubTree(root){//used in the next 3 methods, inOrder, postOrder, and preOrder
    if(!root){
      return
    }
    console.log(root.val)
    searchSubTree(root.right)
    searchSubTree(root.left)
  }
  BST.prototype.inOrder = function(){//we traverse the tree starting with the left subtree, then root, then right subtree
    var current = this.root
    var leftRoot = current.left
    var rightRoot = current.right
    searchSubTree(leftRoot)
    console.log(current.val)
    searchSubTree(rightRoot)
  }
  BST.prototype.preOrder = function(){//we traverse the tree starting with the root, then left subtree, then right subtree
    var current = this.root
    var leftRoot = current.left
    var rightRoot = current.right
    console.log(current.val)
    searchSubTree(leftRoot)
    searchSubTree(rightRoot)
  }
  BST.prototype.postOrder = function(){//we traverse the tree starting with the left subtree, then right subtree, then root
    var current = this.root
    var leftRoot = current.left
    var rightRoot = current.right
    searchSubTree(leftRoot)
    searchSubTree(rightRoot)
    console.log(current.val)
  }




  return BST
})();

module.exports = BST
var first = new BST()
first.insert(5)
first.insert(1)
first.insert(4)
first.insert(8)
first.insert(7)
// first.inOrder()
