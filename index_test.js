const assert = require('assert');
const myHouse = require('./index');

describe('My House', () => {
    describe('its properties', () => {
        it('the address should be a string', ()=> {
            const predicted = 'string';
            const actual = typeof(myHouse.address);
            assert.strictEqual(actual, predicted);
        });
        it('the address should be correct', () => {
            const predicted = "828";
            const actual = myHouse.address;
            assert.strictEqual(actual, predicted);
        });
        it('should have 2 floors', () => {
            const predicted = 2;
            const actual = myHouse.floors;
            assert.strictEqual(actual, predicted);
        })
        it('should have electric heat', () => {
            const predicted = 'electric';
            const actual = myHouse.heat;
            assert.strictEqual(actual, predicted);
        });
    });
})