import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ParseEase = () => {
	useGSAP(() => {
		const back = gsap.parseEase("back.inOut");
		gsap.from("#parse-ease", {
			scale: 0,
			opacity: 0,
			ease: back,
		});
	}, []);
	return (
		<div
			id="parse-ease"
			className="card gradient-yellow self-center"
		/>
	);
};

export default ParseEase;
