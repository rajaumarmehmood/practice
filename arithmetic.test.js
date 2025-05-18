const { add, subtract, multiply, divide } = require('./arithmetic');

describe('Arithmetic Operations', () => {
    test('adds two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 1)).toBe(0);
        expect(add(0, 0)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(1, 1)).toBe(0);
        expect(subtract(0, 5)).toBe(-5);
    });

    test('multiplies two numbers correctly', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
        expect(multiply(0, 5)).toBe(0);
    });

    test('divides two numbers correctly', () => {
        expect(divide(6, 2)).toBe(3);
        expect(divide(5, 2)).toBe(2.5);
        expect(divide(0, 5)).toBe(0);
    });

    test('throws error when dividing by zero', () => {
        expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });
}); 