exports.charCount = function(initialString) {
    let finalArray = [];
    
    //Object with each letter
    let alphabet = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0,
    }
    //Allows me to check easily access each letter
    let alphabetArray = Object.keys(alphabet);
    
    // Increases the count of each value for the corresponding letter
    for (let i = 0; i < initialString.length; i++){
        if (alphabet.hasOwnProperty(initialString[i])){
            alphabet[initialString[i]] += 1;
        }
    }
    
    // Final check for each time a letter occured, and then pushes it to an array
    for (let i = 0; i < alphabetArray.length; i++){
        if (alphabet[alphabetArray[i]] > 0){
            finalArray.push([alphabetArray[i], alphabet[alphabetArray[i]]]);
        }

        

    }
    finalArray.sort(function(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
        if (a == b) return 0;




    })

    // console.log(alphabet);
    console.log(finalArray);
    return finalArray;
};
// exports.charCount("adwab");
