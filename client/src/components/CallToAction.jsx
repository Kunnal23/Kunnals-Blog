import { Button } from "flowbite-react";

export default function CallToAction() {
	return (
		<div className="flex border-2 border-teal-500 p-3 justify-center items-center rounded-tl-3xl rounded-br-3xl flex-col sm:flex-row text-center">
			<div className="flex-1 justify-center flex flex-col">
				<h2 className="text-2xl">Enjoying this? I'm just getting started</h2>
				<p className="text-gray-500 my-2">
					Follow me to stay in the loop with my latest work, insights, and
					everything I'm building behind the scenes.
				</p>
				<a
					href="https://www.linkedin.com/in/kunnal23/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button
						gradientDuoTone="purpleToBlue"
						className="rounded-tl-xl rounded-bl-none rounded-br-xl w-full"
					>
						Follow me on Linkedin!
					</Button>
				</a>
			</div>
			<div className="flex-1 p-7">
				<img
					src="/blueai.png"
					alt="AI Banner"
					className="w-auto h-auto border-4 border-teal-400 rounded"
				/>
			</div>
		</div>
	);
}
