// Javascript program for the above approach

// Node class
class Node {
	// Constructor to initialize the node object
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	// Function to initialize head
	constructor() {
		this.head = null;
	}

	// Function to swap nodes x and y in linked list by changing links
	swapNodes(x, y) {
		// Nothing to do if x and y are same
		if (x === y) {
			return;
		}

		// Search for x (keep track of prevX and CurrX)
		let prevX = null;
		let currX = this.head;
		while (currX !== null && currX.data !== x) {
			prevX = currX;
			currX = currX.next;
		}

		// Search for y (keep track of prevY and currY)
		let prevY = null;
		let currY = this.head;
		while (currY !== null && currY.data !== y) {
			prevY = currY;
			currY = currY.next;
		}

		// If either x or y is not present, nothing to do
		if (currX === null || currY === null) {
			return;
		}

		// If x is not head of linked list
		if (prevX !== null) {
			prevX.next = currY;
		} else { // Else make y as new head
			this.head = currY;
		}

		// If y is not head of linked list
		if (prevY !== null) {
			prevY.next = currX;
		} else { // Else make x as new head
			this.head = currX;
		}

		// Swap next pointers
		let temp = currX.next;
		currX.next = currY.next;
		currY.next = temp;
	}

	// Function to sort the linked list using bubble sort
	bubbleSort() {
		let count = 0;
		let start = this.head;
		while (start !== null) {
			count++;
			start = start.next;
		}

		// Traverse through all nodes of linked list
		for (let i = 0; i < count; i++) {
			// Last i elements are already in place
			start = this.head;
			while (start !== null) {
				// Swap adjacent nodes
				let ptr = start.next;
				if (ptr !== null) {
					if (start.data > ptr.data) {
						this.swapNodes(start.data, ptr.data);
					}
				}
				start = start.next;
			}
		}
	}

	// Function to print the linked list
	printList() {
		let store = [];
		let tmp = this.head;
		while (tmp !== null) {
			store.push(tmp.data);
			store.push(" ->");
			// console.log(tmp.data + " -> ");
			tmp = tmp.next;
		}
		store.push("None");
		console.log(store.join(" "))
	}
}

// Driver Code
let arr = [78, 20, 10, 32, 1, 5];

// Create a linked list from array
let llist = new LinkedList();
llist.head = new Node(arr[0]);
let start = llist.head;
for (let i = 1; i < arr.length; i++) {
	start.next = new Node(arr[i]);
	start = start.next;
}

// Print the list before sorting
console.log("Linked list before sorting");
llist.printList();

// Sort the list
llist.bubbleSort();
console.log("Linked List After Sorting");
llist.printList();

// This code is contributed by princekumaras
