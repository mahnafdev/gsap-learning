import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Timeline = () => {
	useGSAP(() => {
		const tl = gsap.timeline({ delay: 0.5 });
		const defaults = { duration: 1.5, ease: "expo.inOut" };
		// Go to 400px Right and transform to Circle
		tl.to("#timeline", {
			x: 400,
			borderRadius: "4rem",
			...defaults,
		});
		// Go to Base position and transform back
		tl.to("#timeline", {
			x: 0,
			borderRadius: "1rem",
			...defaults,
		});
		// Go to 400px Left and rotate to Diamond
		tl.to("#timeline", {
			x: -400,
			rotation: -135,
			...defaults,
		});
		// Go to Base position and rotate back
		tl.to("#timeline", {
			x: 0,
			rotation: 0,
			...defaults,
		});
		// Exit with Zoom-In animation
		tl.to("#timeline", {
			scale: 0.1,
			opacity: 0,
			...defaults,
		});
	}, []);
	return (
		<div
			id="timeline"
			className="card gradient-white self-center"
		/>
	);
};

export default Timeline;
