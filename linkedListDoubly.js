//doubly node class
class Node {
    constructor(data, prev = null, next = null) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}

//doubly linked list
class DoublyLinkedList {
    constructor() {
        this.head
        this.tail
    }

    setHead(data) {
        //check to see if there exists a head
        if(!this.head) {
            this.head = new Node(data)
            // this.tail = this.head
            return
        } else {
            //we will create a variable that represents the old head [newHead] <- [prev: null data: next: [Node]] -> [node]
            let oldHead = this.head
            //define the new head and set it
            this.head = new Node(data)
            //redefine the new head's next to point to the old head
            this.head.next = oldHead
            //redefine the oldHead's prev to point to the new head
            oldHead.prev = this.head
            return
        }
    }

    addNode(data) {
        if(!this.head) {
            this.head = new Node(data)
        } else {
            let currentNode = this.head
            while(currentNode.next !== null) {
                currentNode = currentNode.next
            }
            //we are now at the last node of our DLL
            let newNode = new Node(data)
            console.log('LAST NODE', currentNode)
            currentNode.next = newNode
            //define newNode's prev pointer to the last node
            newNode.prev = currentNode
            return
        }
    }
}

const dLL = new DoublyLinkedList()
dLL.setHead('Irene')
dLL.addNode('Muneer')
dLL.addNode('Yannick')

console.log(dLL)