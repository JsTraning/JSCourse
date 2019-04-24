const chai = require('chai');
const assert = require('chai').assert;
const dateTime = require('../utils/dateTime.util'); 
chai.use(require('chai-datetime'));

describe('Today method testing', () =>
{
    it('Should return today\'s date', () =>
    {
        var expectedDate = Date.now(),
            actualDate = dateTime.today();
        assert.equal(actualDate, expectedDate);
    });
});

describe('Set Year method testing', () =>
{
    it('Should return bla-bla', () => 
    {
        
    });
});

describe('Days difference testing', () =>
{
    it('Should return correct difference between dates', () =>
    {
        const expectedDaysDifference = 9224;
        var actualDaysDifference = dateTime.daysDifference(new Date('1/21/1994'), new Date('4/24/2019'));
        assert.equal(actualDaysDifference, expectedDaysDifference);
    });
});
