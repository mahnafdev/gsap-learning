import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const From = () => {
	useGSAP(() => {
		gsap.from("#from", {
			delay: 0.5,
			scale: 0,
			rotation: 360,
			opacity: 0.2,
		});
	}, []);
	return (
		<div
			id="from"
			className="card gradient-purple self-center"
		/>
	);
};

export default From;
