<template>
	<div
			class="img-wrapper parallax-img shadow-2xl"
			:class="imgClass"
			:style="`--depth: ${depth};`"
	>
		<img :src="src" :alt="alt" loading="lazy"/>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	src: string
	alt: string
	depth: number
	imgClass?: string
}>()
</script>

<style>
@import '@/assets/module/Hero.module.css';
</style>