import { onMounted, onUnmounted, type Ref } from "vue";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type NavBar from "@/components/NavBar.vue";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

interface ScrollProviderRefs {
	mainContainer: Ref<HTMLElement | null>;
	navbarRef: Ref<InstanceType<typeof NavBar> | null>;
	workSectionsWrapper: Ref<HTMLElement | null>;
}

/**
 * A Vue composable to handle GSAP-powered scroll-snapping and animations.
 * @param refs An object containing refs to the required DOM elements and components.
 */
export function useScroll(refs: ScrollProviderRefs) {
	console.log("useScroll called with refs:", refs);
	const { mainContainer, navbarRef, workSectionsWrapper } = refs;

	let scrollHandler: (e: WheelEvent) => void;

	onMounted(() => {
		const navElement = navbarRef.value?.$el as HTMLElement | null;

		if (!mainContainer.value || !navElement || !workSectionsWrapper.value) {
			console.error(
				"useScroll Error: One or more target elements are missing from the DOM.",
				{
					mainContainer: mainContainer.value,
					navElement: navElement,
					workSectionsWrapper: workSectionsWrapper.value,
				}
			);
			return;
		}

		const sections = Array.from(
			mainContainer.value.querySelectorAll("section")
		) as HTMLElement[];

		let isScrolling = false;
		scrollHandler = (e: WheelEvent) => {
			e.preventDefault();
			if (isScrolling) return;
			isScrolling = true;

			const direction = e.deltaY > 0 ? 1 : -1;
			const scrollTop = mainContainer.value!.scrollTop;
			const viewHeight = window.innerHeight;

			const currentIndex = Math.round(scrollTop / viewHeight);
			const nextIndex = Math.max(
				0,
				Math.min(currentIndex + direction, sections.length - 1)
			);
			const targetY = nextIndex * viewHeight;

			gsap.to(mainContainer.value, {
				scrollTo: targetY,
				duration: 1,
				ease: "power2.out",
				onUpdate: ScrollTrigger.update,
				onComplete: () => {
					isScrolling = false;
					ScrollTrigger.refresh();
				},
			});
		};

		mainContainer.value.addEventListener("wheel", scrollHandler, {
			passive: false,
		});

		ScrollTrigger.scrollerProxy(mainContainer.value, {
			scrollTop(value) {
				if (arguments.length) {
					mainContainer.value!.scrollTop = value!;
				}
				return mainContainer.value!.scrollTop;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
		});

		const hideNavAnim = gsap.to(navElement, {
			yPercent: -100,
			duration: 0.5,
			ease: "power2.inOut",
			paused: true,
		});

		ScrollTrigger.create({
			scroller: mainContainer.value,
			trigger: workSectionsWrapper.value,
			start: "top center",
			end: "bottom top",
			// markers: true, // debug animation gsap
			onUpdate: (self) => {
				if (self.isActive) {
					hideNavAnim.play();
				} else {
					hideNavAnim.reverse();
				}
			},
		});

		ScrollTrigger.refresh();
	});

	onUnmounted(() => {
		if (mainContainer.value && scrollHandler) {
			mainContainer.value.removeEventListener("wheel", scrollHandler);
		}

		ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

		const navElement = navbarRef.value?.$el;
		if (navElement) {
			gsap.killTweensOf(navElement);
		}
	});
}
