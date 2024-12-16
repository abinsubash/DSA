//Last in First out

class StackUsingQueue {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(value) {
        this.q2.push(value);

        while (this.q1.length) {
            this.q2.push(this.q1.shift());
        }

        [this.q1, this.q2] = [this.q2, this.q1];
    }

    pop() {
        if (this.q1.length === 0) {
            console.log("Stack is empty.");
            return;
        }
        return this.q1.shift();
    }

    peek() {
        if (this.q1.length === 0) {
            console.log("Stack is empty.");
            return;
        }
        return this.q1[0];
    }

    display() {
        console.log(this.q1);
    }
}

const stack = new StackUsingQueue();
stack.push(12);
stack.push(33);
stack.push(44);
stack.display(); 
stack.push(55);
stack.pop();
stack.display();
stack.push(66);
stack.push(77);
stack.display(); 
stack.pop(); 
stack.display();
