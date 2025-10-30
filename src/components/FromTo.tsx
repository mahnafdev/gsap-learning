import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FromTo = () => {
	useGSAP(() => {
		gsap.fromTo(
			"#from-to",
			{
				x: -500,
				rotation: 360,
				opacity: 0.25,
			},
			{
				x: 0,
				rotation: 0,
				opacity: 1,
			},
		);
	}, []);
	return (
		<div
			id="from-to"
			className="card gradient-blue self-center"
		/>
	);
};

export default FromTo;
