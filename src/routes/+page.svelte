<script lang="ts">
	import TodoItem from '$lib/components/TodoItem.svelte';
	import ProgressCircle from '$lib/components/ProgressCircle.svelte';

	let todos: Todo[] = $state([]);
	let currentTodoContent = $state<string>('');

	let completed = $derived(todos.filter((todo) => todo.completed).length);
	let total = $derived(todos.length);

	function addTodo() {
		if (currentTodoContent.length < 3) return;

		todos.push({
			content: currentTodoContent,
			completed: false,
			id: crypto.randomUUID().slice(0, 5)
		});
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

<svelte:head>
	<title>To-do on SvelteKit</title>
</svelte:head>

<div class="flex justify-center w-screen">
	<div class="relative pt-5 pb-32 w-[26rem]">
		{#each todos as todo (todo.id)}
			<TodoItem bind:todo {removeTodo} />
		{/each}
	</div>
	<div class="fixed w-[26rem] bottom-8">
		<div class="relative flex items-stretch w-full gap-2">
			<div class="absolute -translate-x-[115%] -translate-y-1/2 top-1/2">
				<ProgressCircle {completed} {total} />
			</div>
			<input
				class="flex-1 p-2 leading-none text-white border border-transparent bg-foreground focus:ring-accent focus:border-accent"
				type="text"
				placeholder="Do something..."
				bind:value={currentTodoContent}
			/>
			<button
				class="px-4 py-2 text-xl leading-none cursor-pointer bg-foreground hover:bg-accent active:bg-accent/80 focus:ring-accent focus:border-accent"
				onclick={addTodo}>+</button
			>
		</div>
	</div>
</div>

<svelte:window on:keypress={handleKeyPress} />
