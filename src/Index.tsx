import gsap from "gsap";

export default function Home() {
	// GSAP Version
	console.log(`GSAP ${gsap.version}`);
	return <main className="p-24 flex flex-col gap-y-64"></main>;
}
