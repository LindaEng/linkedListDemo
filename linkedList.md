# Linked Lists

### pre-reading
[linked-list](https://medium.com/basecs/whats-a-linked-list-anyway-part-1-d8b7e6508b9d)

## What is a Linked List?
-- a linear data structure that contains data in the form of nodes.


## What are the benefits of using Linked Lists as a data structure? (LL vs. Arrays)
-- contiguous - side by side (arrays)
-- non-noncontiguous - (linked lists)


Pros of Linked Lists : Memory allocation
-- for array's memory allocation is contiguously
-- Linked lists data is stored dynamically

Cons of Linked Lists: Look up time
-- Pros for Arrays: the Look up time is O(1)
-- Linked List: O(n)


## What are the parts of a linked list? 
-- head - nodes - tail -> null


## What are the parts of a node? singly vs. doubly
-- singly node 
 [data | next: ]

-- doubly node
[ prev: reference to the previous node, data: your info, next: reference to the next node]

## What data type will we use to create a linked list?

-- Node -- we will be creating node class
singly node:
this.data 
this.next

doubly node:
this.data
this.prev
this.next

-- Linked List:
singly:
this.head
this.size


doubly:
this.head
this.tail
this.size