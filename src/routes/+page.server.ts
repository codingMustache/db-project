import { Users } from '$db/users.model';
import type { PageServerLoad, Actions } from './$types';


// load function does a get on the DB
export const load: PageServerLoad = (async () => {
	const users: any = (await Users.find({}, 'name age')).map((doc) => {
		const { _id, ...rest } = doc.toObject();
		return { id: _id.toString(), ...rest };
	});

	return {
		data: users
	};
}) satisfies PageServerLoad;


// using form action to add users from the form
export const actions = {
	addUser: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name');
		const age = data.get('age');

		(await Users.create({ name, age })).save();

		return { success: true };
	}
} satisfies Actions;
