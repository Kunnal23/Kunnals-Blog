import CallToAction from "../components/CallToAction";

export default function About() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="max-w-2xl mx-auto p-3 text-center">
				<div>
					<h1 className="text-3xl font font-semibold text-center my-7">
						<span className="px-2 py-1 bg-gradient-to-r bg-clip-text text-transparent from-green-500 via-blue-500 to-purple-500 rounded-lg font-bold">
							About Kunnal's Blog
						</span>
					</h1>
					<div className="text-justify text-md text-gray-500 flex flex-col gap-6">
						<p>
							Welcome to Kunnal's Blog! Hi, I'm Kunnal Kant Lal. I started this
							blog as a personal project to share my thoughts, experiences, and
							insights with the world. As a passionate developer, I love writing
							about technology, coding, and everything that falls in between.
						</p>

						<p>
							Here, you'll find weekly articles and tutorials on topics like web
							development, software engineering, and programming languages. I'm
							always learning and experimenting with new technologies, so
							there's always fresh content to explore.
						</p>

						<p>
							This blog isn't just about me- it's about building a community of
							curious minds and lifelong learners. Feel free to leave comments,
							like and reply to others, and join the conversation. Let's grow
							together by sharing knowledge and helping one another improve.
						</p>
					</div>
				</div>
				<div className="mt-10">
					<CallToAction />
				</div>
			</div>
		</div>
	);
}
