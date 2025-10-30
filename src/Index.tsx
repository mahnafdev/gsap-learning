import gsap from "gsap";

export default function Home() {
	//* GSAP Version
	console.log(`GSAP ${gsap.version}`);
	//* GSAP Config
	gsap.config({
		units: { width: "rem", height: "rem", margin: "rem", padding: "rem" },
	});
	//* GSAP Defaults
	gsap.defaults({
		duration: 1.5,
		ease: "sine.inOut",
	});
	return <main className="p-24 flex flex-col gap-y-64"></main>;
}
