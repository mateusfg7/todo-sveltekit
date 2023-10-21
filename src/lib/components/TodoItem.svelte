<script lang="ts">
	export let todo: Todo;
</script>

<div class="flex justify-between gap-10">
	<label
		data-is-completed={todo.completed}
		for={todo.id}
		class="data-[is-completed='true']:line-through data-[is-completed='true']:opacity-50"
	>
		{todo.content}
	</label>
	<input
		class="p-2 text-xl cursor-pointer text-accent focus:ring-accent focus:border-white bg-foreground focus:ring-offset-0"
		type="checkbox"
		id={todo.id}
		bind:checked={todo.completed}
	/>
</div>
