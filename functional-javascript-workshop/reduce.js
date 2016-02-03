"use strict";

// result
// =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

// you can also take 
// http://stackoverflow.com/questions/24252305/using-array-reduce-method-to-count-duplicate-elements 
// for reference

function countWords(inputWords) {
    // please take care with the last param {}, which is the init value to set, it is important!!!
    const c = inputWords
        .reduce((set, curr) => {
            if (set[curr]) {
                set[curr] = set[curr] + 1;
            }
            else {
                set[curr] = 1
            }
            return set;
        }, {})

    return c;
}      
    
module.exports = countWords

