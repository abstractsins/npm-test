const assert = require('assert');

describe('Test this thing', () => {
    describe('actually this', () => {
        it('should add things', () => {
            const predicted = 3 + 4;
            const actual = 7;

            assert.strictEqual(actual, predicted);
        })
    });
})