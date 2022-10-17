/**
 * The program shows how to get input
 *   and deal with numbers.
 *
 * By:      Ethan Prieur
 * Version: 1.0
 * Since:   2022-09-15
 */

import promptSync from 'prompt-sync'


const prompt = promptSync()
let lengthInt: number

const ageString = prompt('What is your age? ')
let ageNumber = parseInt(ageString)
ageNumber = ageNumber - 10
console.log(`Age is >  ${ageNumber}`)


console.log('\nDone.')
