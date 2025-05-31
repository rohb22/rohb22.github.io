import projectsdb from "../projects.json"

const Projects = () => {
    const projects = projectsdb?.projects || [];

    return (
        <section id="projects" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-4xl font-light text-center mb-12">Projects</h2>
            
            {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
                {projects.map((project) => (
                <a
                    href={project.repo}
                    target="_blank"
                    key={project.title}
                    className="border border-gray-200 p-8 transition-all duration-300 cursor-pointer
                            hover:border-indigo-500 hover:-translate-y-2 hover:shadow-lg"
                >
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                        key={tech}
                        className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </a>
                ))}
            </div>
            ) : (
            <div className="max-w-md mx-auto text-center mt-16">
                <div className="mb-6">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                </div>
                </div>
                <h3 className="text-2xl font-light text-gray-800 mb-4">Projects Coming Soon</h3>
                <p className="text-gray-600 mb-6">
                I'm currently working on some things. Check back soon to see what I've been building!
                </p>
                <div className="flex justify-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
                <span className="w-2 h-2 bg-indigo-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                </div>
            </div>
            )}
        </div>
        </section>
    );
};

export default Projects;