var pgp = require('pg-promise')();

var connection = {
 host: 'localhost',
 port: 5432,
 database: 'bundle_packages'

}
var db = pgp(connection);

const findNetflixBundle = () => {
	var promise = db.any(`select first_name, last_initial, cc_holder from netflixbundle where matched = false LIMIT 3 `)

	return promise;
}

module.exports = findNetflixBundle;