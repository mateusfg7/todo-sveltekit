<script lang="ts">
	import Trash from 'phosphor-svelte/lib/Trash';

	export let todo: Todo;
	export let removeTodo: (id: string) => void;
</script>

<div class="flex items-center justify-between w-full gap-2">
	<label for={todo.id} class="flex items-center w-full gap-10 p-1 overflow-hidden cursor-pointer">
		<input
			class="w-6 h-6 text-xl cursor-pointer text-accent focus:border-transparent bg-foreground/60 hover:bg-foreground focus:ring-0 focus:ring-offset-0 focus:outline-1 focus:outline-offset-2 focus:outline-accent"
			type="checkbox"
			aria-details="Complete to-do"
			id={todo.id}
			bind:checked={todo.completed}
		/>
		<p
			data-is-completed={todo.completed}
			title={todo.content}
			class="data-[is-completed='true']:line-through text-ellipsis w-full overflow-hidden text-lg leading-tight cursor-pointer data-[is-completed='true']:opacity-50"
		>
			{todo.content}
		</p>
	</label>
	<button class="text-neutral-600/10 hover:text-red-600" on:click={() => removeTodo(todo.id)}>
		<Trash size={25} weight="duotone" />
	</button>
</div>
