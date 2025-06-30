<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import { useScroll } from "@/providers/useScroll";
import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import Footer from "@/components/Footer.vue";

const MyWork = defineAsyncComponent(() => import("@/components/MyWork.vue"));

const mainContainer = ref<HTMLElement | null>(null);
const navbarRef = ref<InstanceType<typeof NavBar> | null>(null);
const workSectionsWrapper = ref<HTMLElement | null>(null);
useScroll({
	mainContainer,
	navbarRef,
	workSectionsWrapper,
});
</script>

<template>
	<main class="main-scroller" ref="mainContainer">
		<header
			class="fixed top-0 left-0 right-0 z-50"
			style="opacity: 1; transform: translateY(0); transition: none"
		>
			<NavBar ref="navbarRef" />
		</header>

		<slot />

		<section class="h-screen">
			<Hero />
		</section>

		<div ref="workSectionsWrapper" class="relative">
			<section class="work-section h-screen w-full">
				<MyWork />
			</section>
		</div>
	</main>
	
	<footer>
		<Footer />
	</footer>
</template>

<style>
.main-scroller {
	height: 100vh;
	overflow-y: scroll;
}

.main-scroller > section {
	height: 100vh;
	width: 100%;
}

@layer utilities {
	.bg-radial {
		background-image: radial-gradient(circle, var(--tw-gradient-stops));
	}
}
</style>
