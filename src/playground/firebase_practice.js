

// // child_removed event
// database.ref ( 'expenses' ).on ( 'child_removed', ( snapshot ) => {
//     console.log ( snapshot.key, snapshot.val() )
// } )

// // child_changed event
// database.ref ( 'expenses' ).on ( 'child_changed', ( snapshot ) => {
//     console.log ( snapshot.key, snapshot.val() )
// } )

// // child_added
// database.ref ( 'expenses' ).on ( 'child_added', ( snapshot ) => {
//     console.log ( snapshot.key, snapshot.val() )
// } )

// database.ref( 'expenses' ).on ( 'value', ( snapshot ) => {
//     const expenses = []

//     snapshot.forEach ( ( childSnapshot ) => {
//         expenses.push ( {
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         } )
//     } )

//     console.log ( expenses )
// } )

// database.ref( 'expenses' )
//     .once ( 'value' )
//     .then ( ( snapshot ) => {
//         const expenses = []

//         snapshot.forEach ( ( childSnapshot ) => {
//             expenses.push ( {
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             } )
//         } )

//         console.log ( expenses )
//     } )





// database.ref( 'expenses' ).push ( {
//     description: 'Gum',
//     note: '',
//     amount: 345,
//     createdAt: 0
// } )

// database.ref( 'expenses' ).push ( {
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: moment(0).subtract( 4, 'days' ).valueOf()
// })

// database.ref( 'expenses' ).push ( {
//     description: 'Credit Card',
//     note: '',
//     amount: 4500,
//     createdAt: moment(0).add( 4, 'days' ).valueOf()
// } )


// database.ref( 'notes/-LTxBSciZ0PDL8bBxqtG' ).update( {
//     body: 'Buy food'
// } )

// database.ref( 'notes' ).push ( {
//     title: 'Courses',
//     body: 'ES6, React, NodeJS'
// } )



// database.ref().set ( {
//     name: 'Khushdeep Sidhu',
//     stressLevel: 7,
//     job: {
//         title: 'Software Tester',
//         company: 'Dormakaba'
//     },
//     age: 33,
//     isSingle: false,
//     location: {
//       city: 'Vaudreuil-Dorion',
//       country: 'Canada'
//     }
// } ).then ( () => {
//     console.log ( 'Data is saved successfully!' )
// } ).catch ( ( error ) => {
//     console.log ( `This failed. ${ error }` )
// } )

// database.ref ( 'attributes' ).set ( {
//         height: 182,
//         weight:196
//     } 
// ).then ( () => {
//     console.log ( 'Data is saved successfully!!!' )
// } ).catch ( ( error ) => {
//     console.log ( `This failed !!!. ${ error }` )
// } )

// database.ref ( 'isSingle' ).remove ().then( () => {
//     console.log ( "Remove succeeded. !!" )
//   })
//   .catch( ( error ) => {
//     console.log( `Remove failed: ${ error.message }` )
//   });

// database.ref ().update ( {
//     'job/title': 'Software Developer',
//     'job/company': 'Amazon',
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'location/country': 'US'
// } ).then( () => {
//     console.log ( "Update succeeded. !!" )
//   })
//   .catch( ( error ) => {
//     console.log( `Update failed: ${ error.message }` )
//   });

// database.ref( 'location/city' )
//     .once( 'value' )
//     .then ( ( snapshot ) => {
//         const val = snapshot.val()
//         console.log ( val )
//     } )
//     .catch ( ( error ) => {
//         console.log ( 'Error fetching data ', error )
//     } )

// const onValueChange = database.ref().on( 'value', ( snapshot ) => {
//     const val = snapshot.val()
//     console.log ( val )
// }, ( error ) => {
//     console.log ( 'Error with data fetching', error )
// } )

// setTimeout( () => {
//     database.ref( 'age' ).set ( 35 )
// }, 5000 );

// setTimeout( () => {
//     database.ref().off( 'value', onValueChange )
// }, 10000 );

// setTimeout( () => {
//     database.ref( 'age' ).set ( 39 )
// }, 15000 );

// const onValueChange = database.ref().on( 'value', ( snapshot ) => {
//     const val = snapshot.val()
//     console.log ( `${ val.name } is a ${ val.job.title } at ${ val.job.company }.` )
// } )

// setTimeout( () => {
//     database.ref().update ( {
//         name: 'Arshdeep Sidhu',
//         age: 28,
//         'job/company': 'Morgan Stanley'
//     })
// }, 5000 )