import { useState } from 'react'
import { ProjectCard } from './components/ProjectCard/ProjectCard'
import { projects } from './data';
import { Resume } from './components/Resume/Resume';

function App() {
    const [activePage, setActivePage] = useState('resume');

    const showPage = (page: string) => {
        setActivePage(page);
    };

    return (
        <>
            <div className="max-w-[75rem] mx-auto">
                <nav className="flex justify-center items-center mb-8 bg-white p-2 rounded-xl shadow-md sticky top-5 z-50 mx-auto w-fit px-8">
                    <a href="#"
                        className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${activePage === 'resume' ? 'bg-blue-100 text-blue-800' : ''}`}
                        onClick={() => showPage('resume')}>Resume</a>
                    <a href="#"
                        className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${activePage === 'projects' ? 'bg-blue-100 text-blue-800' : ''}`}
                        onClick={() => showPage('projects')}>Projects</a>
                </nav>

                {/* Resume Page */}
                <div id="resume" className={`${activePage === 'resume' ? 'block animate-fadeIn' : 'hidden'} mx-5 md:mx-0 mb-5`}>
                    <Resume />
                </div>

                {/* Projects Page */}
                <div id="projects" className={`${activePage === 'projects' ? 'block animate-fadeIn' : 'hidden'}`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 md:mx-0 mb-5">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                imageUrl={import.meta.env.BASE_URL + project.imageUrl}
                                websiteUrl={project.websiteUrl}
                                tasks={project.tasks}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
