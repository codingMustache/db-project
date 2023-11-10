import { json } from '@sveltejs/kit';
import { Users } from '$db/users.model';


// setting up the api endpoint for deleting
export const DELETE = async ({ request }) => {
	const id = await request.json();
	const response = await Users.deleteOne({ _id: id })
		.then((data) => {
			return data.deletedCount === 1
				? json({ id }, { status: 201 })
				: json({ id }, { status: 409 });
		})
		.catch((err) => {
			return json({ err }, { status: 201 });
		});

	return response;
};
