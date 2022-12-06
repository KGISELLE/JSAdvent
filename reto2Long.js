// const year = 2022
// const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// // countHours(year, holidays) // 2 days -> 4 extra hours in the year

// function countHours(year, holidays) {

//     let count = 0;

    
//     holidays.map((date) => {
        
//         const yearString = year.toString();
       
//         const joinYearString = date + "/" + yearString;

//         const stringToDate = new Date(joinYearString);

//         const getDay = stringToDate.getDay();
//         console.log('%creto2.js line:18 getDay', 'color: #007acc;', getDay);

//         if (getDay === 0) {
//             count += 0;
//         } else if (getDay === 6) {
//             count += 0;
//         } else {
//             count += 2;
//         }

//     });

//     return console.log(count);
// }

// countHours(year, holidays)