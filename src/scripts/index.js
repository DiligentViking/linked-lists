function Node(value=null, nextNode=null) {
  return {
    value,
    nextNode
  };
}

function LinkedList() {
  const head = Node();
  return {
    append(value) {
      let curr = head;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      curr.nextNode = Node(value);
    },
    toString(value) {
      let curr = head.nextNode;
      while (curr) {
        process.stdout.write(`( ${curr.value} ) -> `);
        curr = curr.nextNode;
      }
      console.log('null');
    },
  };
}


const list = LinkedList();

list.append('Our');
list.append('hero');
list.append('bears');
list.append('a');
list.append("warrior's");
list.append('heart');

list.toString();
