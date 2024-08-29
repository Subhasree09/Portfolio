import Project_prop from "./project_prop";
import {
  Portfolio,
  LittleVita,
} from "../constants/Constant";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiDjango,
  SiBootstrap,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSqlite,

} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5  max-sm:text-4xl  ">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          <Project_prop
            title="Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link=""
            github_link=""
            technologies={[
              { name: "React", icon: <SiReact className="dark:text-slate-200 text-black" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="dark:text-slate-200 text-black" /> },
              { name: "Vite", icon: <SiVite className="dark:text-slate-200 text-black" /> },
            ]}
            
          />
          <Project_prop
            title="LittleVita"
            para="A website for digital vaccination card created with Django and Bootstrap CSS"
            img={LittleVita}
            link=""
            github_link=""
            technologies={[
              { name: "HTML5", icon: <SiHtml5 className="dark:text-slate-200 text-black" /> },
              { name: "CSS3", icon: <SiCss3 className="dark:text-slate-200 text-black" /> },
              { name: "JavaScript", icon: <SiJavascript className="dark:text-slate-200 text-black" /> },
              { name: "Django", icon: <SiDjango className="dark:text-slate-200 text-black" /> },
              { name: "Bootstrap CSS", icon: <SiBootstrap className="dark:text-slate-200 text-black" /> },
              { name: "SQLite", icon: <SiSqlite className="dark:text-slate-200 text-black" /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
