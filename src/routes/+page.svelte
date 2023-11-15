<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: user = data.data;
	const deleteUser = async (userId: string) => {
		user = user.filter((e: any) => e.id != userId);
		const response = await fetch('/', {
			method: 'DELETE',
			body: JSON.stringify(userId),
			headers: {
				'content-type': 'application/json'
			}
		});
		return response.json();
	};
</script>

<main>
	<form class="form" action="?/addUser" method="POST">
		<label for="name"> Name: </label>
		<input type="text" name="name" id="name" />
		<label for="age"> Age: </label>
		<input type="number" name="age" id="age" />

		<button type="submit">Send</button>
	</form>
	{#each user as users}
		<div class="user">
			<p>
				{users.name}
			</p>
			<p>
				{users.age}
			</p>
			<button on:click={() => deleteUser(users.id)}>X</button>
		</div>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
	}
	.user {
		background-color: rgb(77, 77, 77);
		color: rgb(255, 255, 255);
		margin: 10px 0;
		align-items: center;
		padding: 1px 10px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 10px;
		border-radius: 10px;
	}
	.user button {
		height: 20px;
		width: 20px;
		padding: 3px;
		justify-self: end;
	}
</style>
