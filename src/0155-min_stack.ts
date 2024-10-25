class MinStack {
    private values: Array<number>;
    private minStack: Array<number>;

    constructor() {
        this.values = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.values.push(val);
        const minVal = Math.min(val, (!this.minStack.length) ? val : this.minStack[this.minStack.length - 1]);
        this.minStack.push(minVal)
    }

    pop(): void {
        this.values.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.values[this.values.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}


export function testMinStack() {
    // Test cases
    const stack = new MinStack();

    // Test push and getMin
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    console.assert(stack.getMin() === -3, `Test case 1 failed: expected -3, got ${stack.getMin()}`);

    // Test pop and getMin
    stack.pop();
    console.assert(stack.getMin() === -2, `Test case 2 failed: expected -2, got ${stack.getMin()}`);

    // Test top
    console.assert(stack.top() === 0, `Test case 3 failed: expected 0, got ${stack.top()}`);

    // Test getMin after pop
    stack.pop();
    console.assert(stack.getMin() === -2, `Test case 4 failed: expected -2, got ${stack.getMin()}`);

    // Test top after pop
    console.assert(stack.top() === -2, `Test case 5 failed: expected -2, got ${stack.top()}`);

    console.log("All test cases passed!");
}
