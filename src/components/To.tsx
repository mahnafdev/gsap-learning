import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const To = () => {
	useGSAP(() => {
		gsap.to("#to", {
			delay: 0.75,
			scale: 1.5,
			rotation: 360,
		});
	}, []);
	return (
		<div
			id="to"
			className="card gradient-teal self-center"
		/>
	);
};

export default To;
