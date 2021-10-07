var moment = require("moment")

 function whatDayIsToday(date) {
    var date = moment().format("[Aujourd'hui nous sommes ] dddd")
    
    console.log(date);
}
whatDayIsToday ()

console.log("");
// exo  2
function whatMonthIsIt(month) {
    var date = moment().format("[Nous sommes au mois de] MMMM")
    
    console.log(date);
}
whatMonthIsIt ()

console.log("");
// exo 3

function formatDate(birthday) {
    var date1 = moment(birthday).format("D, MMMM  YYYY, h:mm:ss a")

    console.log(date1);  
}
formatDate ("1989-02-16")

// exo 4
console.log("");
console.log("");
function formatDate(dateBirthday) {
    var date2 = moment(dateBirthday).format(" YYYY")
        date2 = parseInt(date2)
    var mois2 = moment(dateBirthday).format("M")
        mois2 = parseInt(mois2)
     var dateNow = moment().format(" YYYY")
        dateNow = parseInt(dateNow)
    var moisNow = moment().format("M")
        moisNow = parseInt(moisNow)
        console.log(date2);
   
    if ( moisNow < mois2) {
        date2 = date2 + 1 
        console.log("",date2);
    }
    var resultAge = parseInt(dateNow) -parseInt(date2)
   
    console.log(resultAge);
    
}
formatDate ("1989-12-16")
    