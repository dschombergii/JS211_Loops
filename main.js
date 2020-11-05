// 1.Use a do...while loop to console.log the numbers from 1 to 1000.
let counter = 0

do {
    counter++
    console.log(counter)
} while (counter < 1000)


// 2. Create an object (with keys and values) called person with the following data:
// firstName: "Jane",
// lastName: "Doe",
// birthDate: "Jan 5, 1925",
// gender: "female"

const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}


// 3.Create a function that logs out the keys of the object using Object.keys().

const logKeys = (object) => {
    console.log(Object.keys(object))
}

logKeys(person)


// 4. Create a function that logs out the keys and values of the object using Object.entries().

const logKeysAndValues = (object) => {
    console.log(Object.entries(object))
}

logKeysAndValues(person)


// 5.Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above 
// multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
    {firstName: "Darryl",
    lastName: "Schomberg II",
    birthDate: "Apr 24, 1990",
    gender: "male"},

    {firstName: "Jamie",
    lastName: "Maxwell",
    birthDate: "Jul 6, 1987",
    gender: "female"},

    {firstName: "Moxie",
    lastName: "Maxwell",
    birthDate: "Nov 28, 2011",
    gender: "female"},

    {firstName: "Arthur",
    lastName: "Schomberg",
    birthDate: "Apr 5, 2015",
    gender: "male"},

    {firstName: "Marty",
    lastName: "Maxwell",
    birthDate: "Oct 14, 2016",
    gender: "female"},

    {firstName: "Vanessa",
    lastName: "Schomberg",
    birthDate: "May 29, 1972",
    gender: "female"},

    {firstName: "Darryl",
    lastName: "Schomberg",
    birthDate: "Dec 13, 1969",
    gender: "male"},

    {firstName: "Ashlyn",
    lastName: "Schomberg",
    birthDate: "Feb 13, 1998",
    gender: "female"
    }
]


// 6. Create a function that uses a for...of loop and an if statement to console.log the value associated with 
// the key birthDate of each object if the birth year is an odd number.

const getOddballs = (array) => {
    for (let person of array) {
        let birthYear = Number(person.birthDate.slice(-4))
        if ((birthYear % 2) != 0) {
            console.log(`${person.firstName} was born in the odd year ${birthYear}.`)
        }
    }
}

getOddballs(arrayOfPersons)



// 7. Use .map() to map over the arrayOfPersons and console.log() their information.

const personMap = arrayOfPersons.map(x => x)
console.log(personMap)


// 8. Use .filter() to filter the persons array and console.log only males in the array.

const onlyMales = arrayOfPersons.filter(person => person.gender == "male")
console.log(onlyMales)


// 9. Create a function that returns true if the value of birthDate is before Jan 1, 1990.

const bornBefore = (array, date) => {
    let beforeDate = Number(date.slice(-4))
    for (let person of array) {
        let birthYear = Number(person.birthDate.slice(-4))
        if(birthYear < beforeDate) {
            console.log(`${person.firstName} was born in ${birthYear}, which is before ${date}`)
            // return true
        }
    }
}

bornBefore(arrayOfPersons, 'Jan 1, 1990')


// 10. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const before1990 = arrayOfPersons.filter(person => Number(person.birthDate.slice(-4)) < 1990)
console.log(before1990)


// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

const legalDrinkingYear = (date) => {
    let today = new Date()
    let twetyOneYearsAgo = today.setFullYear(today.getFullYear() - 21)
    let beforeDate = new Date(date)
    if (beforeDate <= twetyOneYearsAgo) {
        // console.log(`${date} was 21 or more years ago from today.`)
        return true
    } else {
        // console.log(`${date} was less than 21 years ago.`)
        return false
    }
}

legalDrinkingYear('Nov 6, 1999')




// BONUS - .filter() out the people in the array who are younger than 21.

const notLegalPeople = arrayOfPersons.filter(person => !legalDrinkingYear(person.birthDate))
console.log(notLegalPeople)

