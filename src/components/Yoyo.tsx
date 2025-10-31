import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Yoyo = () => {
	useGSAP(() => {
		gsap.to("#yoyo", {
			scale: 0.5,
			opacity: 0.5,
			repeat: -1,
			repeatDelay: -0.25,
			duration: 0.9,
			yoyo: true,
			ease: "expo.inOut",
		});
	}, []);
	return (
		<div
			id="yoyo"
			className="card gradient-lime self-center"
		/>
	);
};

export default Yoyo;
