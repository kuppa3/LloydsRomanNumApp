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


//checks input string for roman numeral correctness.
let checkInput = (str) => {
    let flag = true;

    //checks that all symbols are valid roman numeral characters
    if(! /^[I,V,X,L,C,D,M]+$/.test(str)) {
        flag = false;
    }

    //check for 4 or more consequtive symbols
    else if(/(.)\1\1\1/.test(str)) {
        flag = false;
    }

    //check that V,L,D should never be repeated.
    else if(/([V,L,D]).*?\1/.test(str)) {
        flag = false;
    }

    return flag;

};


// Converts Roman number to Decimal
let convertor = (str, callback) => {

    //convert to uppercase
    str = str.toUpperCase();
    
    let errFlag = false;

    if(checkInput(str)){
        // Initialize result
        let result = 0;
        let v1 = 999999; //very high decimal number
        let v2 = 0;
             
        // Traverse given input
        for (let i=0; i<str.length; i++) {

            // Getting value of symbol at position i
            let s1 = value(str.charAt(i));
            v2 = s1;
            if(v1 >= v2) {

                if (i+1 < str.length) {

                    // Getting value of symbol at i+1
                    let s2 = value(str.charAt(i+1));
                    v2 = s2;

                    // Comparing both values
                    if (s1 >= s2) {

                        // Value of current symbol is greater
                        // or equal to the next symbol
                        result = result + s1;
                        v1 = s1;
                    }
                    else {

                        // Value of current symbol is
                        // less than the next symbol
                        result = result + s2 - s1;
                        v1 = s2 - s1;

                        //throw error if third symbol is same. Example: IXI
                        if(i+2 < str.length) {
                            let thirdSymbol = value(str.charAt(i+2));
                            if(s1 === thirdSymbol) {
                                errFlag = true;
                                break;
                            }
                        }

                        i++;                 
                    }
                }
                else {
                    result = result + s1;
                    v1 = s1;
                    i++;
                }
            }
            //Throws error is symbols are not in descending order. Example: XIXX
            else {
                errFlag = true;
                break;
            }
        }

        if(!errFlag) {
            callback(null, result.toString());
        }
    }
    else {
        errFlag = true;
    }

    if(errFlag) {
        let error = {
                        "error": "Incorrect input."
                    };
        callback(error, null);
    }
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