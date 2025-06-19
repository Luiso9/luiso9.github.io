<script setup>
import { useHeroParallax } from "@/providers/useHeroParallax";
import ParallaxImage from "@/composables/ParallaxImage.vue";

const project1 = `https://cdn.driannsa.my.id/wallhaven-vpmmk5-ezgif.com-png-to-webp-converter.webp`;
const project2 = `https://cdn.driannsa.my.id/project2.webp`;
// ghpages force me to do this
useHeroParallax();
</script>

<template>
	<div class="hero min-h-screen relative bg-base-200 overflow-hidden">
		<!-- Parallax container -->
		<div class="absolute inset-0 z-1 pointer-events-none md:block">
			<div
				class="absolute block inset-0 pointer-events-none pattern dont-move z-0 opacity-25"
			></div>
			<div class="invisible md:visible absolute inset-0 z-0">
				<ParallaxImage
					:src="project1"
					alt="Project 1"
					:depth="1.5"
					imgClass="img-1"
				/>
				<ParallaxImage
					:src="project2"
					alt="Project 2"
					:depth="1.5"
					imgClass="img-2"
				/>
			</div>
		</div>
		<div
			class="absolute -bottom-24 right-0 w-96 h-96 md:w-2xl md:h-2xl bg-accent opacity-30 rounded-full blur-[120px] z-0"
		></div>

		<!-- hero content -->
		<div
			class="hero-content hero-text relative z-10 text-center px-4 transition-colors"
		>
			<div class="max-w-lg">
				<h1 class="text-6xl font-extrabold mb-4 leading-tight">
					Keep in <span class="text-primary">mind</span> & Calm
				</h1>
				<p class="py-4 text-lg text-base-content/70 mb-6">
					Code, design, and pixels—shaped into something worth using.
				</p>
				<button class="btn btn-primary btn-lg">This is Me</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import "@/assets/module/Hero.module.css";
</style>
