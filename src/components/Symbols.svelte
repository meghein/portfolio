<script>
	import { onMount } from 'svelte';

	let frame;
	const symbols = ['>', '...', '&&', '||', '[]', '=', 'let', '@', '#'];

	let syntax = new Array(20).fill()
		.map((_, i) => {
			return {
				symbol: symbols[i % symbols.length],
				x: Math.random() * 100,
				y: -20 - Math.random() * 100,
				r: 0.1 + Math.random() * 1
			};
		})
		.sort((a, b) => a.r - b.r);

		function loop() {
				frame = requestAnimationFrame(loop);
				syntax = syntax.map(dot => {
					dot.y += 0.7 * dot.r;
					if (dot.y > 120) dot.y = -20;
					return dot;
				});
			}

		onMount(() => {
			loop();
			return () => cancelAnimationFrame(frame);
		});
</script>

<style type="text/scss">
@import '../styles/variables';

	span {
		position: absolute;
		font-size: 1.5em;
		color: $orange;
		filter: blur(2px);
		opacity: .5;
		transform: translateY(-10vh);
  	animation-iteration-count: infinite;
  	animation-timing-function: linear;
	}
</style>

{#each syntax as part}
	<span style="left: {part.x}%; bottom: {part.y}%; transform: scale({part.r})">{part.symbol}</span>
{/each}