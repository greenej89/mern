//This function simulates coin flipping
function tossCoin() {
    return Math.random() > 0.5? "heads" : "tails"
}

//This function determines how long it will take to have a coin land on "heads" five times in a row.
//This will take an indeterminate amount of time. 
//If we run the synchronous function above, it will prevent any code that comes after from running while this is taking place.
function fiveHeadSync() {
    let headsCount = 0
    let attempts = 0
    while(headsCount < 5) {
        attempts++
        let result = tossCoin()
        console.log(`${ result } was flipped`)
        if(result === "heads") {
            headsCount++
        } else {
            headsCount = 0
        }
    }
    return `It took ${ attempts } tries to flip five "heads"`
}
console.log( fiveHeadSync() )
console.log( "This is run after the fiveHeadsSync function completes" )

//Challenge:  Rewrite the above function using Promises.  
//The fiveHeads function should call the resolve function when the coin has flipped "heads" five tiems in a row.

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0
        let attempts = 0
        while (headsCount < 5 && attempts <= 100) {
            attempts++
            let result = tossCoin()
            console.log(`${ attempts }: ${ result } was flipped `)
            if(result === "heads") {
                headsCount++
            } else {
                headsCount = 0
            }
        }
        if(attempts <= 100) {
            resolve(`It took ${ attempts } tries to flip five "heads"`)
        } else {
            reject("It took more than 100 attempts")
        }
    })
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err))
console.log( "When does this run now?" );