// Day 17: Data Structures
// Tasks/Activities:
// Activity 1: Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}
const node1 = new Node(10); // Creating a node with value 10
const node2 = new Node(20, node1); // Creating a node with value 20, pointing to node1

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end and display all nodes.
class Node2{
    constructor(value, next=null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList{
    // Constructor initializes the linked list with no nodes(head is null)
    constructor(){
        this.head = null;
    }
    // Method to Add a node at the end of the list
    addLast(data){
        const newNode = new Node(data);
        // Checking if the list is empty(If empty, set the newNode as the head)
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            // Traversing the list until the end is reached
            while(current.next){
                current = current.next; //  Move to the next node
            }
            current.next = newNode; // Adding the newNode to the end of the list
        }
    }

    // Method to Remove the last node from the list
    removeLast(){
        if(!this.head){
            return; // If the list is empty nothing to remove so return immediately
        }
        // If there is only one node set head to null, effectively removing the only node
        if(!this.head.next){
            this.head = null;
        }

        let current = this.head;
        // Traversing the list until the second-to-last node is reached
        while(current.next.next){
          current = current.next; // Move to the next node
        }
        // Removing the last node by setting the next reference of the second-to-last node to null
        current.next = null;
    }

    // Method to display the values of all nodes in the linked list
    display(){
        let current = this.head; // Start at the head of the list
        // Traversing the list and print each node's value
        while(current){
            console.log(current.value); // Printing the value of the current node
            current = current.next; // Move to the next node
        }
    }
}

// Creating an new LinkedList instance
const list = new LinkedList();
list.addLast(10);
list.addLast(20);
list.addLast(30);

console.log("List after adding nodes:");
list.display(); // 10 20 30

list.removeLast();

console.log("List after removing the last node:");
list.display();// 10 20

// Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), peek(view the top element).

// Stack class represents a stack data structure
class Stack{
    constructor(){
        this.items = []; // Array to store stack elements
    }
    // Method to add an element to the top of the stack
    push(element){
        this.items.push(element); // Adding element to the end of the array
    }

    // Method to remove and return the top element of the stack
    pop(){
        if(this.isEmpty()){
            return "Stack is Empty. Can't perform pop";
        }
        return this.items.pop();
    }

    // Method to view the top element of the stack without removing it
    peek(){
    if(this.isEmpty()){
        return "Stack is Empty.Can't perform peek";
    }
    return this.items[this.items.length-1];
}
    // Checking if the stack is empty
    isEmpty(){
        return this.items.length === 0; // Return true if the array is empty
    }
    
    // Method to get the size of the stack
    size(){
        return this.items.length; // Return the number of elements in the array
    }
}

const stack = new Stack(); // Creating a new Stack instance
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element:", stack.peek()); // Output: 30

console.log("Removed element:", stack.pop()); // Output: 30
console.log("Top element after pop:", stack.peek()); // Output: 20

console.log("Is stack empty?", stack.isEmpty()); // Output: false

console.log("Stack size:", stack.size()); // Output: 2


// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off.
function reverseString(str){
    // Creating a new Stack instance
    const stack1 = new Stack();
    // Push each character of the string onto the stack
    for(let char of str){
        stack1.push(char);
    }
    let reversed = "";
    // Pop characters from the stack and add them to the reversed string
    while(!stack1.isEmpty()){
        reversed += stack1.pop();
    }
    return reversed;
}

const originalString = "hello";
const reversedString = reverseString(originalString);

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString);

// Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue(add element), dequeue(remove element), and front(view the first element).

// Queue class represents a queue data structure
class Queue{
    constructor(){
        this.items = []; // Array to store queue elements 
    }

    // Method to add an element to the end of the queue
    enqueue(element){
        this.items.push(element);
    }

    // Method to remove and return the front element of the queue
    dequeue(){
        if(this.isEmpty()){
            return this.items[this.items.length-1];
        }
        return this.items.shift(); // Remove and return the first element of the array
    }

    // Method to view the front element of the queue without removing it
    front(){
        if(this.isEmpty()){
            return null; // Return null if queue is empty
        }
        return this.items[0]; // Return the first element of the array
    }

    // Method to check if the queue is empty
    isEmpty(){
        return this.items.length === 0;
    }

    // Method to get the size of the queue
    size(){
        return this.items.length;
    }
}
//Create a new Queue instance
const queue = new Queue();
queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);

console.log("Front element:", queue.front());  // 50
console.log("Removed element:", queue.dequeue());  // 50
console.log("Front element after dequeue:", queue.front());  // 60
console.log("Is queue empty?", queue.isEmpty()); // false
console.log("Queue size:", queue.size());   // 2

// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

function simulatePrinterQueue(printJobs){
    // Create a new Queue instance for the printer queue
    const printerQueue = new Queue();

    // Adding all print jobs to the queue
    for(let job of printJobs){
        console.log(`Adding print job: ${job}`);
        printerQueue.enqueue(job);
    }

    console.log("\nProcessing print jobs:");

    //Process each print job in order
    while(!printerQueue.isEmpty()){
        const currentJob = printerQueue.dequeue();  // Remove and get the front job
        console.log(`Processing print job: ${currentJob}`);
    }
}

const jobs = ["Document1.pdf", "Image2.png", "Presentation3.pptx", "Report4.docx"];
simulatePrinterQueue(jobs);

// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right.

class TreeNode{
    constructor(value, left=null, right=null){
        this.value = value; // Value of the node
        this.left = left; // Reference to the left child node
        this.right = right; // Reference to the right child node
    }
}

const leftChild = new TreeNode(2); // Create a left child node with value 2
const rightChild = new TreeNode(3); // Create a right child node with value 3
const root = new TreeNode(1, leftChild, rightChild); // Create the root node with value 1

console.log("Root node value:", root.value); // Output: 1
console.log("Left child value:", root.left.value); // Output: 2
console.log("Right child value:", root.right.value); // Output: 3


// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class TreeNode1 {
    constructor(value, left = null, right = null) {
        this.value = value; // Value of the node
        this.left = left;   // Reference to the left child node
        this.right = right; // Reference to the right child node
    }
}

class BinaryTree {
    constructor() {
        this.root = null; // Root node of the binary tree
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value); // Create a new node with the given value
        if (this.root === null) {
            this.root = newNode; // If tree is empty, set the new node as root
        } else {
            this._insertNode(this.root, newNode); // Otherwise, insert the node into the tree
        }
    }

    // Helper method to insert a node into the binary tree
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            // If new value is less, go to the left child
            if (node.left === null) {
                node.left = newNode; // If no left child, set new node as left child
            } else {
                this._insertNode(node.left, newNode); // Recursively insert into the left subtree
            }
        } else {
            // If new value is greater or equal, go to the right child
            if (node.right === null) {
                node.right = newNode; // If no right child, set new node as right child
            } else {
                this._insertNode(node.right, newNode); // Recursively insert into the right subtree
            }
        }
    }

    // Method to perform in-order traversal of the binary tree
    inOrderTraversal(node = this.root) {
        if (node !== null) {
            this.inOrderTraversal(node.left); // Traverse left subtree
            console.log(node.value);         // Visit node
            this.inOrderTraversal(node.right); // Traverse right subtree
        }
    }
}


const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

console.log("In-order traversal of the binary tree:");
tree.inOrderTraversal(); // Output: 2, 3, 4, 5, 6, 7, 8
