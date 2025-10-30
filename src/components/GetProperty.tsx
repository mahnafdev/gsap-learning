import gsap from "gsap";

const GetProperty = () => {
	const cardWidth = gsap.getProperty("#get-property", "width", "rem");
	return (
		<div
			id="get-property"
			className="card gradient-blue self-center"
		>
			<h6 className="text-lg font-semibold">{cardWidth}</h6>
		</div>
	);
};

export default GetProperty;
