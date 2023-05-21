/** Typescript implentation of a stack
 * LIFO - Last In First Out
 * contains the following methods:
 * push - adds an element to the top of the stack
 * pop - removes the top element from the stack, and returns it
 * peek - returns the top element from the stack, without removing it
 * isEmpty - returns true if the stack is empty
 * clear - removes all elements from the stack
 * size - returns the number of elements in the stack
 * print - returns a string representation of the stack
 */

export class Stack<T> {
    #elements: T[] = [];

    push(element: T): void {
        this.#elements.push(element);
    }

    pop(): T | undefined {
        return this.#elements.pop();
    };

    peek(): T | undefined {
        return this.#elements[this.#elements.length - 1];
    };

    isEmpty(): boolean {
        return this.#elements.length === 0;
    };

    clear(): void {
        this.#elements.length = 0;
    };

    size(): number {
        return this.#elements.length;
    };

    print(): void {
        console.log(this.#elements);
    }
};
