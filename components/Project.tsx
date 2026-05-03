import React from "react";

const projects = [
  {
    title: "SplitsBuddy",
    description: "A MERN-based expense-sharing app with Google OAuth, real-time balance tracking, and optimized settle-up logic to minimize transactions",
    link: "https://github.com/Neerajkaushik439/SplitsBuddy",
  },
  {
    title: "WanderLust",
    description: "A MERN-based property listing app with authentication, Cloudinary image uploads, and Mapbox-powered location search",
    link: "https://github.com/Neerajkaushik439/WanderLust",
  },
  {
    title: "Text Expander Extension",
    description: "Chrome extension to expand custom text shortcuts for faster typing and improved productivity",
    link: "https://github.com/Neerajkaushik439/Text-Expander-Extension",
  },
  {
    title: "News App",
    description: "Real-time news app delivering latest headlines via fast API calls",
    link: "https://github.com/Neerajkaushik439/News-App",
  },
 
 

];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-r from-gray-900 to-black px-6 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 font-bold text-white text-4xl">Projects</h2>
        <div className="gap-8 grid md:grid-cols-2">
          {projects.map((proj, i) => (
            <div
              key={i}
              className="bg-gray-800 shadow-lg hover:shadow-xl p-6 border border-gray-700 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <h3 className="mb-2 font-semibold text-blue-500 text-xl">{proj.title}</h3>
              <p className="mb-4 text-gray-400">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 font-medium text-teal-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
