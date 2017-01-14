var Node = require('./sll_node')
var SLL = require('./main_singly_linked_lists')

//the below methods only word for Singly Linked Lists that contain numbers

SLL.prototype.min = function(){// returns minimum value in list
  if(!this.root)
    return null
  var current = this.root
  var min = current.val
  while(current){
    if(current.val < min)
      min = current.val
    current = current.next
  }
  return min
}

SLL.prototype.max = function(){// returns maximum value in list
  if(!this.root)
    return null
  var current = this.root
  var max = current.val
  while(current){
    if(current.val > max)
      max = current.val
    current = current.next
  }
  return max
}

SLL.prototype.avg = function(){// returns avg value from the list
  if(!this.root)
    return 0
  var current = this.root
  var sum = 0
  var length = 0
  while(current){
    length ++
    sum += current.val
    current = current.next
  }
  return sum/length

}

a = new SLL
a.add(1)
a.add(2)
a.add(3)
a.add(4)
a.add(5)
console.log(a.min())
console.log(a.max())
console.log(a.avg())
