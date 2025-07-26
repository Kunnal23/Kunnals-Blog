import CallToAction from "../components/CallToAction";

export default function Articles() {
	return (
		<div className="min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6">
			<h1 className="text-4xl font-bold text-center">Explore Our Articles</h1>
			<p className="text-lg text-gray-600 text-center max-w-3xl text-justify">
				Dive into a growing library of insightful articles and tutorials crafted
				to help you grow as a developer. Whether you're just starting out or
				have years of experience, you'll find content that challenges your
				thinking, sharpens your skills, and sparks creativity. Explore topics
				like Python, AI, JavaScript, and more - all written with clarity and
				practical examples.
			</p>
			<div className="w-full flex flex-col gap-6">
				<section className="bg-gray-200 dark:bg-slate-300 p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold dark:text-gray-900">
						Why Read Articles?
					</h2>
					<p className="text-gray-700 mt-2">
						Reading well-crafted articles is one of the most effective ways to
						deepen your programming knowledge. Articles help you connect theory
						with real-world application, explore practical solutions, and stay
						updated with industry best practices. They also give you insights
						that can strengthen your skills and prepare you for real development
						challenges.
					</p>
				</section>
				<section className="bg-gray-200 dark:bg-slate-300 p-6 rounded-lg shadow-md">
					<h2 className="text-2xl font-semibold dark:text-gray-900">
						Stay Ahead with Industry Trends
					</h2>
					<p className="text-gray-700 mt-2">
						Our articles don't just cover the fundamentals- they also keep you
						up to date with the latest trends in tech, including:
					</p>
					<ul className="list-disc list-inside text-gray-700 mt-2">
						<li>Emerging tools and frameworks in web development</li>
						<li>The rise of AI in everyday applications</li>
						<li>Trends in Python-based data science and machine learning</li>
						<li>Debugging and problem-solving techniques</li>
						<li>Evolving standards for responsive and user-first design</li>
						<li>Best practices for responsive and accessible web design</li>
					</ul>
				</section>
			</div>
			<CallToAction />
		</div>
	);
}
