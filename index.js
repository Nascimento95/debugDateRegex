console.log(" exercice 1");
//exo 1 quel jours somme nous
function whatDayIsToday(date) {
    
    var date = new Date()
    var day = date.getDay()
    var dayName= ["dimanche","lundi","mardi","mercredi","jeudi","vendredi"]
    dayName = dayName[day]
    console.log(`aujourdui nous somme le ${dayName}`); 
}
whatDayIsToday ()


console.log("");
console.log("exercice 2");
// exo 2
function whatMonthIsIt(month) {
    
    var date = new Date()
    var month = date.getMonth()
    var monthName= ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"]
    monthName = monthName[month]
    console.log(`Nous sommes au mois de ${monthName}`); 
}
whatMonthIsIt ()

console.log("");
console.log(" exercice 3");
// exo 3 

function formatDate(birthday) {
    
    var anivDate = new Date(birthday);
    var année = anivDate.getFullYear()
    var jour = anivDate.getDate()
    var mois = anivDate.getMonth() 
    
    if(parseInt(mois) < 10 ) {
        mois = "0" + mois 
    }

    if(parseInt(jour) < 10) {
        jour = "0" + jour 
        console.log("resulta de  jour",jour);
    }
    
    console.log(`${jour}/${mois}/${année}`);
    
}
formatDate ("1989-02-16")


console.log("");
console.log(" exercice 4");
// exo 4

function calculateAge(age) {
    var anivDate = new Date(age);
    var anné = anivDate.getYear()
    var mois = anivDate.getMonth()
    var dateNow = new Date()
    var dateMoisNow = dateNow.getMonth()
    var numberDateNow = dateNow.getYear()
    
     if ( dateMoisNow < mois) {
        anné = anné + 1 
        console.log("",anné);
    }
    var ageResult = numberDateNow - anné;
    
    console.log("mon âge", ageResult);
}

calculateAge("1989-10-16")

console.log("");
console.log("exo bonus");