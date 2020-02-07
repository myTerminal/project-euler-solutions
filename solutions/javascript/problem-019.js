/* global module */

module.exports.run = () => {
    const weekdays = [];
    const someDate = new Date(1901, 0, 1);

    const getDayName = day =>
        weekdays[day];

    const checkIfSunday = someDate =>
        getDayName(someDate.getDay()) === 'Sunday';

    const checkIfFirstOfMonth = someDate =>
        someDate.getDate() === 1;

    let count = 0;

    weekdays.push('Sunday');
    weekdays.push('Monday');
    weekdays.push('Tuesday');
    weekdays.push('Wednesday');
    weekdays.push('Thursday');
    weekdays.push('Friday');
    weekdays.push('Saturday');

    while (someDate.getFullYear() < 2001) {

        if (checkIfFirstOfMonth(someDate) && checkIfSunday(someDate)) {
            count++;
        }

        someDate.setDate(someDate.getDate() + 1);
    }

    return count;
};
