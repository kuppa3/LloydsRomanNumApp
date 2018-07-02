/*
 * @FileName: getDecimalValue.js
 * @Author: Konark Uppal
 * @Description: service to convert roman numbers to decimal. Returns promise.
*/


// This function returns value of a Roman symbol
let value = (alphabet) => {
    
    switch(alphabet) {
    	case 'I': return 1;
    	case 'V': return 5;
    	case 'X': return 10;
    	case 'L': return 50;
    	case 'C': return 100;
    	case 'D': return 500;
    	case 'M': return 1000;
    }
};

let convertor = (str, callback) => {
    // Initialize result
    let result = 0;
         
    // Traverse given input
    for (let i=0; i<str.length; i++) {

        // Getting value of symbol at position i
        let s1 = value(str.charAt(i));
         
        if (i+1 < str.length) {

            // Getting value of symbol at i+1
            let s2 = value(str.charAt(i+1));
         
            // Comparing both values
            if (s1 >= s2) {

            // Value of current symbol is greater
            // or equal to the next symbol
            result = result + s1;
            }

            else {

                // Value of current symbol is
                // less than the next symbol
                result = result + s2 - s1;
                i++; 
                             
            }
        }
        else {
            result = result + s1;
            i++;
        }
    }

    callback(null, result.toString());
};

let convert = (str) => {
    return new Promise ((resolve, reject) => {
        convertor(str, (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};

module.exports = {
    convert
};