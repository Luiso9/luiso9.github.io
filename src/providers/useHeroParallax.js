import { onMounted, onBeforeUnmount } from "vue";
import { animate } from "animejs";
import { useImagePreload } from "@/providers/useImagePreload";

export function useHeroParallax() {
	const { preloadImages } = useImagePreload();
	let layers = null;
	let handleMove = null;

	const isMobile = window.matchMedia("(pointer: coarse)").matches;

	onMounted(() => {
		if (isMobile) return;

		const heroText = document.querySelector(".hero-text");
		layers = document.querySelectorAll(".parallax-img");
		const img1 = document.querySelector(".img-1");
		const img2 = document.querySelector(".img-2");

		preloadImages([
			"https://cdn.driannsa.my.id/project1.webp",
			"https://cdn.driannsa.my.id/project1.webp",
		]);

		if (heroText) {
			animate(heroText, {
				translateY: [100, 0],
				opacity: [0, 1],
				easing: "easeOutExpo",
				duration: 1200,
				delay: 300,
			});
			heroText.classList.add("fade-in-up");
		}

		if (img1) {
			animate(img1, {
				translateX: [-80, 0],
				translateY: [40, 0],
				scale: [0.9, 1],
				opacity: [0, 0.6],
				easing: "spring(1, 90, 10, 0)",
				duration: 1000,
				delay: 500,
			});
		}

		if (img2) {
			animate(img2, {
				translateX: [80, 0],
				translateY: [40, 0],
				scale: [0.9, 1],
				opacity: [0, 0.6],
				easing: "spring(1, 90, 10, 0)",
				duration: 1000,
				delay: 500,
			});
		}

		layers.forEach((el, idx) => {
			setTimeout(() => el.classList.add("fade-in-layer"), 100 + idx * 100);
		});

		handleMove = (e) => {
			const x = e.clientX / window.innerWidth - 0.5;
			const y = e.clientY / window.innerHeight - 0.5;

			layers.forEach((el) => {
				const depth = parseFloat(el.style.getPropertyValue("--depth") || "1");
				const moveX = x * depth * 20;
				const moveY = y * depth * 20;
				const rotX = y * depth * 20;
				const rotY = x * depth * -20;

				let baseRotY = 0;
				if (el.classList.contains("img-1")) baseRotY = 15;
				if (el.classList.contains("img-2")) baseRotY = -15;

				el.style.transform = `
					perspective(800px)
					translate(${moveX}px, ${moveY}px)
					rotateX(${rotX}deg)
					rotateY(${rotY + baseRotY}deg)
				`;
			});
		};

		window.addEventListener("mousemove", handleMove);
	});

	onBeforeUnmount(() => {
		if (handleMove) window.removeEventListener("mousemove", handleMove);
		layers = null;
		handleMove = null;
	});
}
