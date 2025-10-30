import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const QuickTo = () => {
	useGSAP(() => {
		gsap.set("#quick-to", { xPercent: 0, yPercent: 0 });
		const toX = gsap.quickTo("#quick-to", "x", { duration: 0.75, ease: "power4.inOut" });
		const toY = gsap.quickTo("#quick-to", "y", { duration: 0.75, ease: "power4.inOut" });
		window.addEventListener("mousemove", (e) => {
			toX(e.clientX - 155);
			toY(e.clientY - 660);
		});
	}, []);
	return (
		<div
			id="quick-to"
			className="card gradient-black pointer-events-none"
		></div>
	);
};

export default QuickTo;
