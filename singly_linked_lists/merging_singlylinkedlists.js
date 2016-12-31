var SSL = require('./singly_linked_lists')

function mergeSortLinkedList(sll) {// not really sure what this one is asking for, no explanation
  // your code here
}
function mergeLinkedLists(left, right) {// merge two SSLs
  if(left.head == null)
    return right
  if(right.head == null)
    return left
  var ssl = left
  var last = ssl.head
  while(last.next){// so we can find the last node of the left list connect it to right
    last = last.next
  }
  var current = right.head
  while(current){
    last.next = current
    last = current
    current = current.next
  }
  return ssl
}


var names = new SSL()
names.add('John')
names.add('Sam')
names.add('David')
names.add('Jen')

var otherNames = new SSL()
otherNames.add('Jerrod')
otherNames.add('Ryan')
otherNames.add('Jose')
otherNames.add('Alex')

var both = mergeLinkedLists(names, otherNames)
both.display()
