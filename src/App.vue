<script setup lang="ts">
import {onMounted, onUnmounted, ref, watch} from 'vue'
import {animate} from 'animejs'
import NavBar from '@/components/NavBar.vue'
import Hero from "@/components/Hero.vue"
import MyWork from "@/components/MyWork.vue"

const navBarRef = ref<HTMLElement | null>(null)
const myWorkSectionRef = ref<HTMLElement | null>(null)
const isNavHidden = ref(false)

let observer: IntersectionObserver | null = null

onMounted(() => {
	observer = new IntersectionObserver(
			([entry]) => {
				isNavHidden.value = entry.isIntersecting
			},
			{threshold: 0.8}
	)
	if (myWorkSectionRef.value) {
		observer.observe(myWorkSectionRef.value)
	}
})

onUnmounted(() => {
	observer?.disconnect()
})

// useless animation to hide the navbar xD well it only hide when user snap into my work section
watch(isNavHidden, (hidden) => {
	if (!navBarRef.value) return
	if (hidden) {
		animate(
				navBarRef.value, {
					opacity: 0,
					translateY: -40,
					duration: 300,
					easing: 'easeInOutQuad',
					complete: () => {
						navBarRef.value!.style.pointerEvents = 'none'
					}
				}
		)
	} else {
		animate(navBarRef.value, {
			opacity: 1,
			translateY: 0,
			duration: 300,
			easing: 'easeInOutQuad',
			begin: () => {
				navBarRef.value!.style.pointerEvents = ''
			}
		})
	}
})
</script>

<template>
	<div class="transition-colors">
		<header
				class="fixed top-0 left-0 right-0 z-50"
				ref="navBarRef"
				style="opacity:1; transform:translateY(0); transition:none"
		>
			<NavBar/>
		</header>

		<main class="h-screen overflow-y-scroll snap-y snap-mandatory">
			<slot/>

			<section class="h-screen snap-start snap-always">
				<Hero/>
			</section>

			<section
					class="h-screen w-full snap-start snap-always"
					ref="myWorkSectionRef"
			>
				<MyWork/>
			</section>
		</main>
	</div>
</template>
