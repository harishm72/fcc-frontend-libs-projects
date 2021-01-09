<script>
	import { onMount } from "svelte";

	export let quote;

	function handleNext() {
		fetch("https://api.quotable.io/random")
			.then((response) => response.json())
			.then((data) => {
				quote.text = data.content;
				quote.author = data.author;
			});
	}

	onMount(() => {
		fetch("https://api.quotable.io/random")
			.then((response) => response.json())
			.then((data) => {
				quote.text = data.content;
				quote.author = data.author;
			});
	});
</script>

<main>
	{#if quote.text}
		<div id="quote-box" class="card card2">
			<div class="flex column">
				<div id="text">{quote.text}</div>
				<div id="author">- {quote.author}</div>
			</div>
			<div class="flex controls">
				<button id="new-quote" on:click={handleNext}>New Quote</button>
				<a
					target="_blank"
					rel="noopener noreferrer"
					id="tweet-quote"
					href={`https://twitter.com/intent/tweet?text="${encodeURI(quote.text)}"%20-${encodeURI(quote.author)}`}>
					<i class="fa fa-twitter" />
				</a>
			</div>
		</div>
	{/if}
</main>
