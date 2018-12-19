const promise = new Promise ( ( resolve, reject ) => {
    setTimeout ( () => {
        resolve ( 'This is my resolved data' )
    }, 7000 )
} )

console.log ( 'Before' )

promise.then ( ( data ) => {
    console.log ( data )
    return new Promise ( ( resolve, reject ) => {
        setTimeout ( () => {
            resolve ( 'This is my other promise' )
        }, 7000 )
    } )
} ).then ( ( str ) => {
    console.log ( str )
} ).catch ( ( error ) => {
    console.log ( `Error ${ error }` )
} )

console.log ( 'After' )