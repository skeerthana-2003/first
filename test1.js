//Create a function that takes two dates and returns the number of days between the first and second date.
//Examples getDays( new Date("December 29, 2018"), new Date("January 1, 2019") ) ? 3


function getDays(date1,date2){
    var time=date1 - date2
    return Math.abs(time)/(1000*3600*24)
}
const firstDate =new Date(("December 29, 2018"))
const secondDate =new Date(("January 1, 2019"))
console.log(getDays(firstDate,secondDate))