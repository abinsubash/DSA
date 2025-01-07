class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (this.root == null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }

    insertNode(root, node) {
        if (node.value < root.value) {
            if (root.left == null) {
                root.left = node;
            } else {
                this.insertNode(root.left, node);
            }
        } else {
            if (root.right == null) {
                root.right = node;
            } else {
                this.insertNode(root.right, node);
            }
        }
    }

    inOrder(root = this.root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    preOrder(root = this.root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    postOrder(root = this.root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    levelOrder() {
        let queue = [];
        queue.push(this.root);
        while (queue.length > 0) {
            let cur = queue.shift();
            console.log(cur.value);
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(value, this.root);
    }

    deleteNode(value, root) {
        if (root == null) {
            return root;
        }
        if (root.value > value) {
            root.left = this.deleteNode(value, root.left);
        } else if (root.value < value) {
            root.right = this.deleteNode(value, root.right);
        } else {
            if (!root.left && !root.right) {
                return null;
            }
            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.value, root.right); // Fixed
        }
        return root;
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    findClosest(target) {
        let closest = this.root.value;
        function traverse(node) {
            if (node == null) {
                return null;
            }
            if (Math.abs(node.value - target) < Math.abs(closest - target)) {
                closest = node.value;
            }
            if (target < node.value) {
                return traverse(node.left);
            } else {
                return traverse(node.right);
            }
        }
        traverse(this.root);
        return closest;
    }

    removeEven(root = this.root) {
        if (root == null) return null;

        // Recur for the left and right children
        root.left = this.removeEven(root.left);
        root.right = this.removeEven(root.right);

        // If the current node's value is even, delete it and return the updated subtree
        if (root.value % 2 == 0) {
            return this.deleteNode(root.value, root);
        }

        return root;
    }
}

const BST = new BinarySearchTree();
BST.insert(12);
BST.insert(4);
BST.insert(55);
BST.insert(6);
BST.insert(7);
// BST.inOrder();
// BST.levelOrder();
// BST.delete(7);
BST.removeEven();
// console.log(BST.findClosest(10));
BST.levelOrder();
