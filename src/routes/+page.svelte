<script lang="ts">
	import TodoItem from '$lib/components/TodoItem.svelte';

	let todos: Todo[] = [];

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

		window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
	}

	function removeTodo(id: string) {
		todos = todos.filter((todo) => todo.id !== id);
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (e.key !== 'Enter') return;

		addTodo();
	}
</script>

<div class="flex justify-center w-screen">
	<div class="relative pt-5 pb-32 w-[26rem]">
		{#each todos as todo (todo.id)}
			<TodoItem {todo} {removeTodo} />
		{/each}
	</div>
	<div class="fixed flex items-stretch gap-2 w-[26rem] bottom-8">
		<input
			class="flex-1 p-2 leading-none text-white border border-transparent bg-foreground focus:ring-accent focus:border-accent"
			type="text"
			placeholder="Do something..."
			bind:value={currentTodoContent}
		/>
		<button
			class="px-4 py-2 text-xl leading-none cursor-pointer bg-foreground hover:bg-accent active:bg-accent/80 focus:ring-accent focus:border-accent"
			on:click={addTodo}>+</button
		>
	</div>
</div>

<svelte:window on:keypress={handleKeyPress} />

<style lang="postcss">
</style>
