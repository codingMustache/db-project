import { start_db } from '$db/db';


// starting up up the DB
start_db()
	.then(() => console.log('DB Started'))
	.catch((e) => console.log(e));



	/**
	 * If you nee more than one function to run in here
	 * Import sequence and run pass the order of functions
	 * in order of operation
	 */