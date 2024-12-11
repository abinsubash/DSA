class StackUsingQueue {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(value) {
        // Push new element into q2
        this.q2.push(value);

        // Transfer all elements from q1 to q2
        while (this.q1.length) {
            this.q2.push(this.q1.shift());
        }

        // Swap q1 and q2
        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() {
        if (this.q1.length === 0) {
            console.log("Stack is empty.");
            return;
        }
        return this.q1.shift(); // Remove the top element
    }

    peek() {
        if (this.q1.length === 0) {
            console.log("Stack is empty.");
            return;
        }
        return this.q1[0]; // Return the top element
    }

    display() {
        console.log(this.q1);
    }
}

// Example Usage:
const stack = new StackUsingQueue();
stack.push(12);
stack.push(33);
stack.push(44);
stack.display(); // [44, 33, 12]
stack.push(55);
stack.pop(); // Removes 55
stack.display(); // [44, 33, 12]
stack.push(66);
stack.push(77);
stack.display(); // [77, 66, 44, 33, 12]
stack.pop(); // Removes 77
stack.display(); // [66, 44, 33, 12]
