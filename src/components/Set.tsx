import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Set = () => {
	useGSAP(() => {
		gsap.set("#set", { rotation: 45 });
	}, []);
	return (
		<div
			id="set"
			className="card gradient-teal self-center"
		/>
	);
};

export default Set;
