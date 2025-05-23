const { sayHello } = require('./hello');

describe('Hello World Test', () => {
    test('should return Hello World', () => {
        expect(sayHello()).toBe('Hello World');
    });
}); 