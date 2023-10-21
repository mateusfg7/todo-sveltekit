<script lang="ts">
	import TodoItem from './TodoItem.svelte';

	let todos: Todo[] = [
		{ completed: false, content: 'Do something', id: 'kja90jda' },
		{ completed: false, content: 'Do another thing', id: 'dasd33q' }
	];

	let currentTodoContent = '';

	function addTodo() {
		if (currentTodoContent.length < 3) return;

		const newTodo: Todo = {
			content: currentTodoContent,
			completed: false,
			id: crypto.randomUUID().slice(0, 5)
		};

		todos = [...todos, newTodo];
		currentTodoContent = '';
	}
</script>

<div class="flex justify-center w-screen h-screen">
	<main class="flex flex-col justify-end py-10 w-96">
		<div class="flex-1 w-full">
			{#each todos as todo (todo.id)}
				<TodoItem {todo} />
			{/each}
		</div>
		<div class="flex items-stretch w-full gap-2">
			<input
				class="flex-1 p-2 leading-none text-white border border-transparent bg-foreground focus:ring-accent focus:border-accent"
				type="text"
				placeholder="Do something..."
				bind:value={currentTodoContent}
			/>
			<button
				class="px-4 py-2 text-xl leading-none cursor-pointer bg-foreground hover:bg-accent active:bg-accent/80"
				on:click={addTodo}>+</button
			>
		</div>
	</main>
</div>

<style lang="postcss">
</style>
