<script setup lang="ts">
import { Quote } from "lucide-vue-next";
</script>

<template>
	<section
		class="min-h-screen w-full grid grid-cols-4 grid-rows-6 md:grid-cols-4 md:grid-rows-5 gap-4 bg-base-200 overflow-hidden"
	>
		<!-- WORK Title -->
		<div class="col-span-2 col-start-2 flex items-end justify-center">
			<h1 class="text-9xl font-sans text-primary leading-none">WORK</h1>
		</div>

		<!-- Image Frame -->
		<div
			class="col-span-4 row-span-3 row-start-2 md:col-span-3 md:row-span-3 md:row-start-2 flex justify-center items-center md:p-4"
		>
			<div
				class="w-[80%] h-full rounded-xl overflow-hidden bg-base-100 shadow-lg md:w-full"
			>
				<img
					src="/images/project1.jpg"
					alt="Project"
					class="w-full h-full object-cover"
				/>
			</div>
		</div>

		<!-- Description -->
		<div
			class="col-span-4 row-span-2 row-start-5 flex items-start justify-center mx-auto md:row-span-4 md:col-start-4 md:row-start-2 md:justify-start md:mx-0"
		>
			<p
				class="max-w-md text-base-content/80 text-base md:text-2xl font-bold text-start px-4 md:p-2 md:max-w-full md:text-justify"
			>
				<Quote :suze="48" class="text-primary hidden md:flex" />
				City of Angels is a bold 160-page portrait of Los Angeles street
				style, captured through the lens of photographer and stylist Jasmine
				Benjamin.
			</p>
		</div>
	</section>
</template>
