import { start_db } from '$db/db';


// starting up up the DB
start_db()
	.then(() => console.log('DB Started'))
	.catch((e) => console.log(e));
