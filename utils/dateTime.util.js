class DateTime
{
    today()
    {
        return Date.now();
    }

    setYear(date)
    {

    }

    daysDifference(dateLeft, dateRight)
    {
        const diffTime = Math.abs(dateRight.getTime() - dateLeft.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    }
}

module.exports = new DateTime();