class DateTime
{
    today()
    {
        return new Date();
    }

    setYear(date, year)
    {
        date.setFullYear(year);
        return date;
    }

    daysDifference(dateLeft, dateRight)
    {
        const diffTime = Math.abs(dateRight.getTime() - dateLeft.getTime());
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    }
}

module.exports = new DateTime();