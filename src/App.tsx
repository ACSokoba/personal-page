import { useState } from 'react'
import { ProjectCard } from './components/ProjectCard/ProjectCard'
import { JobId } from './components/ProjectCard/ProjectCardModel';
import { projects } from './data';
import './App.css';


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
            <div className="container">
                <nav className="nav">
                    <a href="#"
                        className={`nav-link ${activePage === 'resume' ? 'active' : ''}`}
                        onClick={() => showPage('resume')}>Resume</a>
                    <a href="#"
                        className={`nav-link ${activePage === 'projects' ? 'active' : ''}`}
                        onClick={() => showPage('projects')}>Projects</a>
                </nav>

                {/* Resume Page */}
                <div id="resume" className={`${activePage === 'resume' ? 'block animate-fadeIn' : 'hidden'}`}>
                    <div className="header">
                        <h1 className="header-title">SOKOBA Aboubakar Christian</h1>
                        <p className="header-subtitle">Senior Fullstack Developer</p>
                        <div className="contact-info">
                            <p className="contact-text">sokobachristian@yahoo.fr</p>
                            <p className="separator">•</p>
                            <p className="contact-text">+33 7 81 65 74 90</p>
                        </div>

                        <p className="bio">
                            With 6 years of web development experience in agile environments, I've acquired strong technical and soft skills.
                            Staying on top of technical good practices ensures the relevance of my skills. I'm ready to contribute to future projects,
                            bringing my knowledge, rigor and drive to help build reliable applications and have a good impact on my team.
                        </p>

                        <button
                            className="resume-button"
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

                    <div className="grid">
                        <div className="column-space">
                            <div className="card card-blue-border">
                                <h2 className="card-title">Skills</h2>
                                <div>
                                    <span className="tag tag-blue">Angular</span>
                                    <span className="tag tag-green">Java</span>
                                    <span className="tag tag-green">NodeJS</span>
                                    <span className="tag tag-blue">HTML</span>
                                    <span className="tag tag-blue">CSS</span>
                                    <span className="tag tag-blue">TypeScript</span>
                                    <span className="tag tag-purple">Critical thinker</span>
                                    <span className="tag tag-purple">Fast learner</span>
                                    <span className="tag tag-purple">Clear communicator</span>
                                </div>
                            </div>

                            <div className="card card-purple-border">
                                <h2 className="card-title">Education</h2>
                                <div className="mb-6">
                                    <p className="job-date">2019</p>
                                    <p className="job-title">Diploma of Telecommunication and Network Engineer</p>
                                    <p className="job-company">Institut Sup Galilée, Paris</p>
                                </div>
                            </div>

                            <div className="card card-green-border">
                                <h2 className="card-title">Languages</h2>
                                <p className="mb-2"><span className="font-semibold">English</span> - Proficient, TOEIC 720</p>
                                <p><span className="font-semibold">French</span> - Native</p>
                            </div>
                        </div>

                        <div className="column-space">
                            <div className="card card-blue-border">
                                <h2 className="card-title">Experience</h2>
                                <div className="job">
                                    <p className="job-date">June 2024 - Present</p>
                                    <div
                                        className="job-header"
                                        onClick={() => toggleJob('sfr')}
                                    >
                                        <p className="job-title">Senior Frontend Developer</p>
                                        <svg
                                            className={`job-toggle ${expandedJobs.sfr ? 'expanded' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <p className="job-company">SFR, Paris</p>
                                    <div className={`job-details ${expandedJobs.sfr ? 'expanded' : ''}`}>
                                        <ul className="job-list">
                                            <li>UI enhancements, feature implementation, and bug fixes</li>
                                            <li>Development of the purchase/rental journey for video-on-demand (VOD) and the video player</li>
                                            <li>Implementation of audience analytics tools for players (Live, VOD, trailers, etc.)</li>
                                            <li>Refactoring and framework updates</li>
                                        </ul>
                                    </div>
                                    <p className="job-tech">Technical Environment: Angular 18, Nx, RxJS, Jenkins, Atlassian Suite</p>
                                </div>

                                <div className="job">
                                    <p className="job-date">2021 - 2024</p>
                                    <div
                                        className="job-header"
                                        onClick={() => toggleJob('carrefour')}
                                    >
                                        <p className="job-title">Senior Fullstack Software Engineer</p>
                                        <svg
                                            className={`job-toggle ${expandedJobs.carrefour ? 'expanded' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <p className="job-company">Carrefour, Paris</p>
                                    <div className={`job-details ${expandedJobs.carrefour ? 'expanded' : ''}`}>
                                        <ul className="job-list">
                                            <li>Front and back-end development of features and customer journeys. +10M € of invoicing and thousands of invoices per day in production</li>
                                            <li>Coordination with partner API teams, complexity evaluation and participation in architecture design</li>
                                            <li>Backend development on several microservices with Java 11 and Spring boot, code review, improvement of developer experience</li>
                                            <li>Improvement of application performance by solving network and architecture bottlenecks</li>
                                            <li>Participation in writing user stories specifications and grooming</li>
                                            <li>Planning and supervision of Pre-production and Production releases with the DevOps</li>
                                        </ul>
                                    </div>
                                    <p className="job-tech">Technical environment: Angular 14+, Java 11 + Reactor, Spring Boot, Kubernetes, Postgres, GitLab, Cypress, Jenkins, Jira, Confluence</p>
                                </div>

                                <div className="job">
                                    <p className="job-date">2019 - 2021</p>
                                    <div
                                        className="job-header"
                                        onClick={() => toggleJob('orange')}
                                    >
                                        <p className="job-title">Fullstack Software Engineer</p>
                                        <svg
                                            className={`job-toggle ${expandedJobs.orange ? 'expanded' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <p className="job-company">Orange, Paris</p>
                                    <div className={`job-details ${expandedJobs.orange ? 'expanded' : ''}`}>
                                        <ul className="job-list">
                                            <li>Development of 15+ several high business value customer pages for a 15+ Millions unique visits per month website</li>
                                            <li>Development in a modular micro frontend architecture feature teams organization, angular updates and code migrations</li>
                                            <li>Backend development of REST microservices in NodeJS</li>
                                            <li>Refactoring, improvement of existing code, implementation of integration, unit and end-to-end tests</li>
                                            <li>Facilitating the professional growth and skill enhancement of interns through structured guidance and support</li>
                                        </ul>
                                    </div>
                                    <p className="job-tech">Technical environment: Angular 11, NodeJS 14, Javascript, Typescript, Git, HTML, CSS, Bootstrap, Jenkins, VS Code, Jest, Jasmine, Mocha, Protractor, Jira, Confluence, Postman</p>
                                </div>
                            </div>

                            <div className="card card-purple-border">
                                <h2 className="card-title">Certifications</h2>
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
                    <div className="projects-grid">
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
