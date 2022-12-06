const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// countHours(year, holidays) // 2 days -> 4 extra hours in the year

function countHours(year, holidays) {

    let count = 0;

    holidays.map((date) => {
       
        const joinYear = `${date}/${year}`;

        const stringToDate = new Date(joinYear);
        
        const getDay = stringToDate.getDay();
        
        if (getDay === 0) {
            count += 0;
        } else if(getDay === 6) {
            count += 0;
        } else {
            count += 2;
        }

    });

    return console.log(count);
}

countHours(year, holidays)