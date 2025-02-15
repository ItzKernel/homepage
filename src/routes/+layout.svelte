<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="relative" id="content">
	<nav class="absolute w-full flex gap-2 p-2 bg-gray-100 rounded-lg z-10 shadow">
		<a href="/">/</a>
		<a href="/me">/me</a>
		<a href="/projects">/projects</a>
		<a href="/blog">/blog</a>
	</nav>

	{@render children()}
</div>

<style lang="scss">
@use '../typography.scss';

#content {
	@apply max-w-[1200px] mx-auto p-4;
}

nav a {
	@apply rounded-md py-2 px-3 hover:bg-gray-200/50 transition-colors font-ibm-model3x;
}
</style>
