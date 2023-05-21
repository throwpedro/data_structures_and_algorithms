import { Stack } from "./stack";

describe('Stack', () => {
    let stack: Stack<unknown>;
    beforeEach(() => {
        stack = new Stack();
    });
    describe('Push', () => {
        test('We can push an entry on to the stack', () => {
            stack.push(1);
            expect(stack.size()).toEqual(1);
        });
        test('We can push different types on to the stack', () => {
            stack.push({ a: 'hello', b: 'world' });
            stack.push([]);
            stack.push('string');
            expect(stack.size()).toEqual(3);
        });
    });
    describe('Pop', () => {
        test("pop returns the last element in the stack", () => {
            stack.push(42);
            expect(stack.pop()).toEqual(42);
        });
        test("Pop returns undefined if the stack is empty", () => {
            expect(stack.pop()).toBeUndefined();
        });
        test("Pop removes the last element in the stack", () => {
            stack.push(42);
            stack.pop();
            expect(stack.size()).toEqual(0);
        });
    });
    describe('Peek', () => {
        test("Peek returns the last element in the stack, without removing the element", () => {
            stack.push(42);
            expect(stack.peek()).toEqual(42);
            expect(stack.size()).toEqual(1);
        });
        test("Peek returns undefined if the stack is empty", () => {
            expect(stack.peek()).toBeUndefined();
        });
    });
    describe('isEmpty', () => {
        test("isEmpty returns true if the stack is empty", () => {
            expect(stack.isEmpty()).toEqual(true);
        });
        test("isEmpty returns false if the stack is not empty", () => {
            stack.push(42);
            expect(stack.isEmpty()).toEqual(false);
        });
    });
    describe('Clear', () => {
        test("Clear removes all elements from the stack", () => {
            stack.push(42);
            stack.push(42);
            stack.push(42);
            stack.clear();
            expect(stack.size()).toEqual(0);
        });
    });
    describe('Size', () => {
        test("Size returns the number of elements in the stack", () => {
            stack.push(42);
            stack.push(42);
            stack.push(42);
            expect(stack.size()).toEqual(3);
        });
        test("Size returns 0 if the stack is empty", () => {
            expect(stack.size()).toEqual(0);
        });
    });
    describe('Print', () => {
        test("Print uses console.log", () => {
            console.log = jest.fn();
            stack.print();
            expect(console.log).toHaveBeenCalledTimes(1);
        });
    });
})