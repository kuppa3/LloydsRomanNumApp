/*
 * @FileName: index.js
 * @Author: Konark Uppal
 * @Description: all routes land here in index.js file.
*/

module.exports = (app) => {

	/* GET home page. */
	app.get('/', (req, res, next) => {
	  res.render('index', { title: 'Konark Uppal: Roman To Decimal Convertor' });
	});

	require('./romanToDecimal')(app);
}
