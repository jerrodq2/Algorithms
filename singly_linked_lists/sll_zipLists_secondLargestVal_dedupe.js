var Node = require('./sll_node')
var SLL = require('./main_singly_linked_lists')


function ziplist(one, two){//given two singly linked lists, combine them to create a new list. Do this by alternating nodes, starting with the first list
  if(!one.root)
    return two
  if(!two.root)
    return one
  var list = new SLL()
  var oneLength = 0; twoLength = 0
  var current = one.root
  while(current){
    oneLength ++
    current = current.next
  }
  current = two.root
  while(current){
    twoLength ++
    current = current.next
  }
  if( oneLength > twoLength){
    var long = one, short = two
  } else {
    var long = two, short = one
  }

  //DONE WITH FINDING LENGTHS, THIS WAS FOR CONVENIENCE
  current = long.root, other = short.root, listCurrent = list.root
  while (current) {
    if(!list.root){
      list.root = current
      listCurrent = current
    } else {
      listCurrent.next = current
      listCurrent = listCurrent.next
    }
    current = current.next

    if(other){
      listCurrent.next = other
      listCurrent = listCurrent.next
      other = other.next
    }

  }// end of while loop
  return list
}// END OF ZIPLIST************************




SLL.prototype.secondLargestVal = function(){//return second largest value in the list
  if(!this.root)
    return false
  if(!this.root.next)
    return this.root.val
  var max = this.root.val, maxNode = this.root, current = this.root
  while(current){
    if(current.val > max){
      max = current.val
      maxNode = current
    }
    current = current.next
  }// end of while

  if(maxNode == this.root){
    var second = this.root.next.val
  } else {
    var second = this.root.val
  }
  current = this.root
  while(current){
    if(current == maxNode){
      current = current.next
      continue
    }
    if(current.val > second){
      second = current.val
    }
    current = current.next
  }// end of second while
  return second
}// end of secondLargestVal************************



SLL.prototype.dedupe = function(){//remove duplicate values, retain only the first instance
  if(!this.root)
    return this
  var current = this.root, nodesToRemove = []
  while(current){
    var secondCurrent = current.next, previous = current
    while(secondCurrent){
      if (secondCurrent.val == current.val){
        nodesToRemove.push([previous, secondCurrent])
      }
      previous = secondCurrent
      secondCurrent = secondCurrent.next
    }// end of inner while
    current = current.next
  }// end of outer while loop
  for(i = 0; i< nodesToRemove.length ; i++){
    var found = true // this variable is used for the below if statement
    if(nodesToRemove[i][0].next != nodesToRemove[i][1]){
      found = false
      current = this.root
      while(current.next){
        if(current.next == nodesToRemove[i][1]){
          found = true
          nodesToRemove[i][0] = current
        }
        current = current.next
      }// end of while loop
    }// end of if statement
    if(found){
      nodesToRemove[i][0].next = nodesToRemove[i][1].next
      nodesToRemove[i][1].next = null
    }
  }// end of for loop
}// end of dedupe************************


a = new SLL()
a.add(1)
a.add(2)
// a.add(1)
// a.add(1)
// a.add(1)
// a.add(1)
// a.add(1)
// a.add(1)
a.add(3)
// a.add(1)
// a.add(1)
a.add(4)
// a.add(3)
a.add(5)
// a.dedupe()
// a.display()
// console.log(a.secondLargestVal())

b = new SLL()
b.add(6)
b.add(7)
b.add(8)
b.add(9)
c = ziplist(a, b)
c.display()
