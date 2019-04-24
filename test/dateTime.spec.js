const chai = require('chai');
const assert = require('chai').assert;
const dateTime = require('../utils/dateTime.util'); 
chai.use(require('chai-datetime'));

describe('Today method testing', () =>
{
    it('Should return today\'s date', () =>
    {
        var expectedDate = new Date();
        var actualDate = dateTime.today();
        assert.equalDate(actualDate, expectedDate);
    });
});

describe('Set Year method testing', () =>
{
    it('Should return changed date with changed year', () => 
    {
        const expectedYear = 2003;
        const initialDate = new Date('2010, 5, 15');
        const expectedDate = new Date(`${expectedYear}, 5, 15`);
        var actualDate = dateTime.setYear(initialDate, expectedYear);
        assert.equalDate(actualDate, expectedDate);
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
