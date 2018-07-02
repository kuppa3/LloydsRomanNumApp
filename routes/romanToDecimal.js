/*
 * @FileName: romanToDecimal.js
 * @Author: Konark Uppal
 * @Description: API to convert roman numerals to decimal.
*/

let decimalService = require('../services/getDecimalValue');

module.exports = (app) => {

	/* POST Roman To Decimal Number. */
	app.post('/romanToDecimal', (req, res) => {

		/* Best way is to use async and await.
		 * However, could not use it because gulp-istanbul
		 * used to get code coverage does not recognise async-await functionality.
		 * Therefore, using promises.
		 */ 
	  	
		if(req.body.roman) {

		    let str = req.body.roman;
		    decimalService.convert(str).then((value) => {
		    	
			    let output = {
			  		"roman":str,
					"decimal": value
			  	};
			  	res.send(output);
		    })
		    .catch((err) => {
		    	res.status(400).send(err);
		    });
		}
		else {
			res.status(400).send({error:"Input is missing."});
		}

	});
}

