// const person = {
//     name: 'Khushdeep',
//     age: 33,
//     location: {
//         city: 'Vaudreuil-Dorion',
//         temp: -15
//     }
// }

// // Object Destructuring
// const { name: firstName = 'Anonymous', age } = person

// console.log ( `${firstName} is ${age}` )

// const { city, temp: temperature } = person.location

// if ( temperature && city ) {
//     console.log ( `It's ${temperature} in ${city}` )
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {}
// }

// const { name: publisherName = 'Self Publish' } = book.publisher

// console.log ( publisherName )



// Array Destructuring
const address = [ '2720 Rue Du Manoir', 'Vaudreuil-Dorion', 'Quebec', 'J7V8Y2' ]

const [ , , state ] = address

console.log( `You are in ${state}` )

const menu = [ 'Coffee-iced', '$3.00', '$3.50', '$3.75' ] 

const [ item, , mediumPrice ] = menu

console.log ( `A medium ${item} costs ${mediumPrice}` )