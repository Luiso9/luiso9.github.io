<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Hero from "@/components/Hero.vue";
</script>

<template>
	<div class="transition-colors">
		<header class="px-4 py-2">
			<NavBar/>
		</header>
		<main>
			<slot/>
			<Hero/>
		</main>
	</div>
</template>

<style scoped>

</style>