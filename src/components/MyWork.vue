<script setup lang="ts">
import { onMounted, ref, onUnmounted } from "vue";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Quote } from "lucide-vue-next";

gsap.registerPlugin(ScrollTrigger);

const workContainer = ref<HTMLElement>();
const currentSlideIndex = ref(0);

const workItems = [
	{
		src: "https://cdn.driannsa.my.id/wZXiM61njzTbyAmG.png",
		alt: "Project 1",
		desc: "Automatic Gate System Arduino using HC-SR04 and Servo 9G",
	},
	{
		src: "https://cdn.driannsa.my.id/AYd7Ddnv972fvcWF.webp",
		alt: "Project 2",
		desc: "Automation tool for SoccerGuru hourly card claiming in Go ",
	},
	{
		src: "https://cdn.driannsa.my.id/TsTokI-GvpgZ8O1u.webp",
		alt: "Project 3",
		desc: "Copycat website to learn about grid system and flexbox, I LOVE SWISS DESIGN.",
	},
];

let workScrollHandler: (e: WheelEvent) => void;
let isWorkScrolling = false;

const animateToSlide = (index: number) => {
	if (index === currentSlideIndex.value) return;

	const slides = workContainer.value?.querySelectorAll(".work-slide");
	if (!slides) return;

	gsap.to(slides[currentSlideIndex.value], {
		opacity: 0,
		y: -30,
		duration: 0.4,
		ease: "power2.out",
	});

	gsap.fromTo(
		slides[index],
		{
			opacity: 0,
			y: 30,
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.4,
			ease: "power2.out",
			delay: 0.2,
		}
	);

	currentSlideIndex.value = index;
};

onMounted(() => {
	if (!workContainer.value) return;

	workScrollHandler = (e: WheelEvent) => {
		const rect = workContainer.value!.getBoundingClientRect();
		if (rect.top > 50 || rect.bottom < window.innerHeight - 50) return;

		if (isWorkScrolling) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}

		const direction = e.deltaY > 0 ? 1 : -1;
		const nextIndex = currentSlideIndex.value + direction;

		if (nextIndex >= 0 && nextIndex < workItems.length) {
			e.preventDefault();
			e.stopPropagation();
			isWorkScrolling = true;

			animateToSlide(nextIndex);

			setTimeout(() => {
				isWorkScrolling = false;
			}, 600);
		}
	};

	workContainer.value.addEventListener("wheel", workScrollHandler, {
		passive: false,
		capture: true,
	});

	const slides = workContainer.value.querySelectorAll(".work-slide");
	slides.forEach((slide, index) => {
		gsap.set(slide, {
			opacity: index === 0 ? 1 : 0,
			y: 0,
		});
	});
});

onUnmounted(() => {
	if (workContainer.value && workScrollHandler) {
		workContainer.value.removeEventListener("wheel", workScrollHandler, true);
	}
});
</script>

<template>
	<div
		ref="workContainer"
		class="work-gallery min-h-screen w-full grid grid-cols-4 grid-rows-6 md:grid-cols-4 md:grid-rows-5 gap-4 bg-base-200 overflow-hidden relative"
	>
		<!-- Title -->
		<div class="col-span-2 col-start-2 flex items-end justify-center z-50">
			<h1 class="text-9xl font-sans text-primary leading-none">WORK</h1>
		</div>

		<!-- Content -->
		<div
			v-for="(item, index) in workItems"
			:key="index"
			class="work-slide absolute inset-0 grid grid-cols-4 grid-rows-6 md:grid-cols-4 md:grid-rows-5 gap-4"
		>
			<!-- Image Frame  -->
			<div
				class="col-span-4 row-span-3 row-start-2 md:col-span-3 md:row-span-3 md:row-start-2 flex justify-center items-center md:p-4"
			>
				<div
					class="w-[80%] h-full rounded-xl overflow-hidden bg-base-100 shadow-lg md:w-full"
				>
					<img
						:src="item.src"
						:alt="item.alt"
						class="imageWork w-full h-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Description -->
			<div
				class="col-span-4 row-span-2 row-start-5 flex items-start justify-center mx-6 md:row-span-4 md:col-start-4 md:row-start-2 md:justify-start md:mx-0"
			>
				<p
					class="max-w-md text-base-content/80 text-base md:text-2xl font-bold text-start px-4 md:p-2 md:max-w-full md:text-justify"
				>
					<Quote :size="48" class="text-primary hidden md:flex" />
					{{ item.desc }}
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.work-slide {
	opacity: 0;
}

.work-slide:first-child {
	opacity: 1;
}
</style>
