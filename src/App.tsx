import { useState } from "react";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { articles, projects } from "./data";
import { Resume } from "./components/Resume/Resume";
import TalkCard from "./components/TalkCard/TalkCard";
import { talks } from "./data";
import ArticleCard from "./components/ArticleCard/ArticleCard";
function App() {
  const [activePage, setActivePage] = useState("resume");

  const showPage = (page: string) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="">
        <nav className="flex justify-center items-center mb-8 bg-white p-2 rounded-xl shadow-md sticky top-5 z-50 mx-auto md:max-width-[1200px] px-8 overflow-auto scrollbar-hide">
          <a
            id="resumeLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "resume" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              showPage("resume");
              const element = document.getElementById("resumeLink");
              element?.scrollIntoView({ behavior: "smooth", inline: "center" });
            }}
          >
            Resume
          </a>
          <a
            id="projectsLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "projects" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              showPage("projects");
              const element = document.getElementById("projectsLink");
              element?.scrollIntoView({ behavior: "smooth", inline: "center" });
            }}
          >
            Projects
          </a>
          <a
            id="talksLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "talks" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              showPage("talks");
              const element = document.getElementById("talksLink");
              element?.scrollIntoView({ behavior: "smooth", inline: "center" });
            }}
          >
            Talks
          </a>
          <a
            id="articlesLink"
            href="#"
            className={`py-3 px-6 mx-1 text-gray-600 font-medium rounded-xl transition-all duration-300 hover:bg-blue-50 ${
              activePage === "articles" ? "bg-blue-100 text-blue-800" : ""
            }`}
            onClick={() => {
              showPage("articles");
              const element = document.getElementById("articlesLink");
              element?.scrollIntoView({ behavior: "smooth", inline: "center" });
            }}
          >
            Articles
          </a>
        </nav>

        {/* Resume Page */}
        <div
          id="resume"
          className={`${
            activePage === "resume" ? "block animate-fadeIn" : "hidden"
          } mx-5 md:mx-0 mb-5`}
        >
          <Resume />
        </div>

        {/* Projects Page */}
        <div
          id="projects"
          className={`${
            activePage === "projects" ? "block animate-fadeIn" : "hidden"
          }`}
        >
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

        {/* Talks Page */}
        <div
          id="talks"
          className={`${
            activePage === "talks" ? "block animate-fadeIn" : "hidden"
          }`}
        >
          {talks.map((talk, index) => (
            <TalkCard key={index} talk={talk} />
          ))}
        </div>

        {/* Articles Page */}
        <div
          id="articles"
          className={`${
            activePage === "articles" ? "block animate-fadeIn" : "hidden"
          } mx-5 md:mx-32`}
        >
          <h1 className="text-center">
            Here I list some resources and articles that I found useful or
            interesting
          </h1>
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
