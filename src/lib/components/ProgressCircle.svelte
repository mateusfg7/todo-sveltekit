<script lang="ts">
	export let total: number;
	export let completed: number;

	$: progress = completed / total || 0;

	$: angle = 360 * progress;

	// Adapt the logic according to the approach
	$: background = `radial-gradient(#1a1a1a 50%, transparent 50.5%),
    conic-gradient(#FF3E00 0deg ${angle}deg, #2E2E2E ${angle}deg 360deg);`;
	//

	$: cssVarStyles = `--background:${background}`;
</script>

<div
	id="progress-circle"
	style={cssVarStyles}
	data-is-empty={total < 1}
	class="flex items-center justify-center text-xs text-neutral-500 data-[is-empty='true']:opacity-0"
>
	{#if total}
		{completed}/{total}
	{/if}
</div>

<style>
	#progress-circle {
		background: var(--background);
		border-radius: 50%;
		width: 40px;
		height: 40px;
		transition: all 500ms ease-in;
		will-change: transform;
	}
</style>
