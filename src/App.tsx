import { useState } from 'react'
import { ProjectCard } from './components/ProjectCard/ProjectCard'
import { JobId } from './components/ProjectCard/ProjectCardModel';
import { projects } from './data';


function App() {
    const [activePage, setActivePage] = useState('resume');
    const [expandedJobs, setExpandedJobs] = useState({
        sfr: true,
        carrefour: true,
        orange: true
    });



    const showPage = (page: string) => {
        setActivePage(page);
    };

    const toggleJob = (jobId: JobId) => {
        setExpandedJobs(prev => ({
            ...prev,
            [jobId]: !prev[jobId]
        }));
    };

    return (
        <>
            <div className="max-w-7xl mx-auto">
                <nav className="flex justify-center items-center mb-8 bg-white p-2 rounded-xl shadow-md sticky top-5 z-50 mx-auto w-fit px-8">
                    <a href="#"
                        className={`px-6 py-3 mx-1 text-gray-700 font-medium rounded-xl transition-all duration-300 ${activePage === 'resume'
                            ? 'bg-blue-100 text-blue-800'
                            : 'hover:bg-blue-50'
                            }`}
                        onClick={() => showPage('resume')}>Resume</a>
                    <a href="#"
                        className={`px-6 py-3 mx-1 text-gray-700 font-medium rounded-xl transition-all duration-300 ${activePage === 'projects'
                            ? 'bg-blue-100 text-blue-800'
                            : 'hover:bg-blue-50'
                            }`}
                        onClick={() => showPage('projects')}>Projects</a>
                </nav>

                {/* Resume Page */}
                <div id="resume" className={`${activePage === 'resume' ? 'block animate-fadeIn' : 'hidden'}`}>
                    <div className="bg-white rounded-xl p-8 mb-5 text-center shadow-md">
                        <h1 className="text-3xl font-bold mb-2 text-gray-800">SOKOBA Aboubakar Christian</h1>
                        <p className="text-lg text-gray-600 mb-4">Senior Fullstack Developer</p>
                        <div className="flex justify-center flex-wrap gap-4">
                            <p className="text-gray-600">sokobachristian@yahoo.fr</p>
                            <p className="text-gray-400">•</p>
                            <p className="text-gray-600">+33 7 81 65 74 90</p>
                        </div>

                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            With 6 years of web development experience in agile environments, I've acquired strong technical and soft skills.
                            Staying on top of technical good practices ensures the relevance of my skills. I'm ready to contribute to future projects,
                            bringing my knowledge, rigor and drive to help build reliable applications and have a good impact on my team.
                        </p>

                        <button
                            className="cursor-pointer inline-block bg-blue-100 text-gray-800 px-6 my-5 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-purple-100 hover:-translate-y-0.5 hover:shadow-lg"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/assets/Aboubakar_Resume_Fullstack_ENG_GD.pdf';
                                link.download = 'Aboubakar_Resume_Fullstack_ENG_GD.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            Download Resume PDF
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="space-y-5">
                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-100">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Skills</h2>
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-blue-100 text-blue-800">Angular</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-green-100 text-green-800">Java</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-green-100 text-green-800">NodeJS</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-blue-100 text-blue-800">HTML</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-blue-100 text-blue-800">CSS</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-blue-100 text-blue-800">TypeScript</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-purple-100 text-purple-800">Critical thinker</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-purple-100 text-purple-800">Fast learner</span>
                                    <span className="inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 bg-purple-100 text-purple-800">Clear communicator</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-100">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Education</h2>
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-2">2019</p>
                                    <p className="font-semibold mb-1">Diploma of Telecommunication and Network Engineer</p>
                                    <p className="italic text-gray-600">Institut Sup Galilée, Paris</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-100">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Languages</h2>
                                <p className="mb-2"><span className="font-semibold">English</span> - Proficient, TOEIC 720</p>
                                <p><span className="font-semibold">French</span> - Native</p>
                            </div>
                        </div>

                        <div className="md:col-span-2 space-y-5">
                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-100">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Experience</h2>
                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-2">June 2024 - Present</p>
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => toggleJob('sfr')}
                                    >
                                        <p className="font-semibold mb-1">Senior Frontend Developer</p>
                                        <svg
                                            className={`w-5 h-5 ml-2 transform transition-transform ${expandedJobs.sfr ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <p className="italic text-gray-600 mb-2">SFR, Paris</p>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedJobs.sfr ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            <li>UI enhancements, feature implementation, and bug fixes</li>
                                            <li>Development of the purchase/rental journey for video-on-demand (VOD) and the video player</li>
                                            <li>Implementation of audience analytics tools for players (Live, VOD, trailers, etc.)</li>
                                            <li>Refactoring and framework updates</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">Technical Environment: Angular 18, Nx, RxJS, Jenkins, Atlassian Suite</p>
                                </div>

                                <div className="mb-6">
                                    <p className="text-sm text-gray-500 mb-2">2021 - 2024</p>
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => toggleJob('carrefour')}
                                    >
                                        <p className="font-semibold mb-1">Senior Fullstack Software Engineer</p>
                                        <svg
                                            className={`w-5 h-5 ml-2 transform transition-transform ${expandedJobs.carrefour ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <p className="italic text-gray-600 mb-2">Carrefour, Paris</p>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedJobs.carrefour ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            <li>Front and back-end development of features and customer journeys. +10M € of invoicing and thousands of invoices per day in production</li>
                                            <li>Coordination with partner API teams, complexity evaluation and participation in architecture design</li>
                                            <li>Backend development on several microservices with Java 11 and Spring boot, code review, improvement of developer experience</li>
                                            <li>Improvement of application performance by solving network and architecture bottlenecks</li>
                                            <li>Participation in writing user stories specifications and grooming</li>
                                            <li>Planning and supervision of Pre-production and Production releases with the DevOps</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">Technical environment: Angular 14+, Java 11 + Reactor, Spring Boot, Kubernetes, Postgres, GitLab, Cypress, Jenkins, Jira, Confluence</p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500 mb-2">2019 - 2021</p>
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => toggleJob('orange')}
                                    >
                                        <p className="font-semibold mb-1">Fullstack Software Engineer</p>
                                        <svg
                                            className={`w-5 h-5 ml-2 transform transition-transform ${expandedJobs.orange ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <p className="italic text-gray-600 mb-2">Orange, Paris</p>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedJobs.orange ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                                            <li>Development of 15+ several high business value customer pages for a 15+ Millions unique visits per month website</li>
                                            <li>Development in a modular micro frontend architecture feature teams organization, angular updates and code migrations</li>
                                            <li>Backend development of REST microservices in NodeJS</li>
                                            <li>Refactoring, improvement of existing code, implementation of integration, unit and end-to-end tests</li>
                                            <li>Facilitating the professional growth and skill enhancement of interns through structured guidance and support</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">Technical environment: Angular 11, NodeJS 14, Javascript, Typescript, Git, HTML, CSS, Bootstrap, Jenkins, VS Code, Jest, Jasmine, Mocha, Protractor, Jira, Confluence, Postman</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-100">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800">Certifications</h2>
                                <div className="space-y-2">
                                    <p className="mb-2">
                                        <span className="font-semibold">AWS Cloud Practitioner</span>
                                        <span className="text-sm text-gray-500 ml-2">2023</span>
                                    </p>
                                    <p>
                                        <span className="font-semibold">UX-PM1</span>
                                        <span className="text-sm text-gray-500 ml-2">2022</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Page */}
                <div id="projects" className={`${activePage === 'projects' ? 'block animate-fadeIn' : 'hidden'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <h1 className="text-3xl font-bold mb-6 text-gray-800">Projects</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    imageUrl={project.imageUrl}
                                    websiteUrl={project.websiteUrl}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
