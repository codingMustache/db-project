import { start_db } from '$db/db';

start_db()
	.then(() => console.log('DB Started'))
	.catch((e) => console.log(e));
