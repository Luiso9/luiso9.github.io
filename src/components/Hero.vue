<script setup lang="ts">
import {onMounted, onBeforeUnmount} from 'vue'

onMounted(() => {
	const layers = document.querySelectorAll('.parallax-img') as NodeListOf<HTMLElement>

	const handleMove = (e: MouseEvent) => {
		const x = e.clientX / window.innerWidth - 0.5
		const y = e.clientY / window.innerHeight - 0.5

		layers.forEach((el) => {
			const depth = parseFloat(el.style.getPropertyValue('--depth') || '1')
			const moveX = x * depth * 20
			const moveY = y * depth * 20
			const rotX = y * depth * 20
			const rotY = x * depth * -20

			el.style.transform = `
				perspective(800px)
				translate(${moveX}px, ${moveY}px)
				rotateX(${rotX}deg)
				rotateY(${rotY}deg)
			`
		})
	}

	window.addEventListener('mousemove', handleMove)
	onBeforeUnmount(() => window.removeEventListener('mousemove', handleMove))
})
</script>

<template>
	<div class="hero min-h-screen relative bg-base-200 overflow-hidden">
		<!-- Parallax container -->
		<div class="absolute inset-0 z-0 pointer-events-none">
			<!-- pattern first, with parallax-img class -->
			<div class="pattern parallax-img" style="--depth: 0.5;"></div>

			<!-- image layers -->
			<div class="img-wrapper parallax-img img-1" style="--depth: 2;">
				<img src="/images/project1.png" alt="Project 1"/>
			</div>
			<div class="img-wrapper parallax-img img-2" style="--depth: 1.5;">
				<img src="/images/project2.jpg" alt="Project 2"/>
			</div>
		</div>

		<!-- other visuals -->
		<div class="absolute top-0 w-full h-24 bg-gradient-to-b from-base-100 to-transparent z-10"></div>
		<div class="absolute -bottom-24 right-0 w-96 h-96 bg-accent opacity-20 rounded-full blur-[120px] z-0"></div>

		<!-- hero content -->
		<div class="hero-content relative z-10 text-center px-4">
			<div class="max-w-lg">
				<h1 class="text-5xl font-extrabold mb-4 leading-tight">
					Keep in <span class="text-primary">mind</span> & Calm
				</h1>
				<p class="py-4 text-lg text-base-content/70 mb-6">
					Code, design, and pixels—shaped into something worth using.
				</p>
				<button class="btn btn-primary btn-lg">
					This is Me
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.pattern {
	position: absolute;
	inset: 0;
	background: radial-gradient(circle, white 1px, transparent 1px);
	background-size: 20px 20px;
	opacity: 0.07;
	will-change: transform;
}

.img-wrapper {
	width: 180px;
	height: 300px;
	overflow: hidden;
	position: absolute;
	border-radius: 1rem;
	z-index: 5;
}

.img-wrapper img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
	filter: blur(2px);
}

.parallax-img {
	transform-style: preserve-3d;
	transition: transform 0.2s ease-out;
	will-change: transform;
}

.hero-content {
	z-index: 10;
}

.img-1 {
	top: 10%;
	left: 20%;
	width: 200px;
	opacity: 0.2;
}

.img-2 {
	bottom: 15%;
	right: 10%;
	width: 250px;
	opacity: 0.2;
}
</style>
