function Node(value=null, nextNode=null) {
  return {
    value,
    nextNode
  };
}

function LinkedList() {
  const head = Node();  // Note that the head is technically a Node, but it is only used as an entry point
  return {
    append(value) {
      let curr = head;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      curr.nextNode = Node(value);
    },

    prepend(value) {
      head.nextNode = Node(value, head.nextNode);
    },

    size() {
      let count = 0;
      let curr = head;
      while (curr.nextNode !== null) {
        count++;
        curr = curr.nextNode;
      }
      return count;
    },

    head() {
      return head.nextNode?.value;
    },

    tail() {
      let curr = head;
      while (curr.nextNode !== null) {
        curr = curr.nextNode;
      }
      return curr.value;
    },

    at(index) {
      let curr = head;
      for (let i = 0; i <= index; i++) {
        curr = curr.nextNode;
        if (!curr) return undefined;
      }
      return curr.value;
    },

    pop() {
      if (head.nextNode) {
        const tmp = head.nextNode.value;
        head.nextNode = head.nextNode.nextNode;
        return tmp;
      }
    },

    contains(value) {
      let curr = head.nextNode;
      while (curr) {
        if (curr.value === value) return true;
        curr = curr.nextNode;
      }
      return false;
    },

    findIndex(value) {
      let count = 0;
      let curr = head.nextNode;
      while (curr) {
        if (curr.value === value) return count;
        curr = curr.nextNode;
        count++;
      }
      return -1;
    },

    toString() {
      let string = '';
      let curr = head.nextNode;
      while (curr) {
        string += `( ${curr.value} ) -> `;
        curr = curr.nextNode;
      }
      string += 'null';
      return string;
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

console.log(
  list.findIndex('a')
);

console.log(
  list.toString()
);
