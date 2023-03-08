import ProjectCard from "./ProjectCard";
import "../../../style-utils/utils.css";
import weatherImage from "../../../../images/projects-images/weatherApp.png";
import blogImage from "../../../../images/projects-images/blog.png";
import waterImage from "../../../../images/projects-images/water-intake-calculator.png";
import QRCode from "../../../../images/projects-images/qr-code-app-node.png";

const ProjectsSection = () => {
  return (
    <div className="w-full h-full bg-main-extra-dark-blue m-auto min">
      <div>
        {" "}
        {/* box 2 container */}
        <div className="glow-text">
          <h2 className="pt-8 font-extrabold text-white uppercase text-4xl tracking-wider main-title main-title-glow">
            last projects
          </h2>
        </div>
        <div className="w-full px-12 gap-16 flex flex-wrap justify-center pt-20">
          {/* projects container */}
          <ProjectCard
            projectImageURL={weatherImage}
            projectName="Weather App"
            projectDescription="Project made for learning
          purposes with React, Vite,
          TailwindCSS, TypeScript,
          ES6 and fetch API."
          />
          <ProjectCard
            projectImageURL={blogImage}
            projectName="Personal Blog"
            projectDescription="Project made as a hobbie 
            using TypeScript, SASS,
            JavaScript, Gulp and
            ES6. Learned a lot making this one."
          />
          <ProjectCard
            projectImageURL={waterImage}
            projectName="Water Intake Calculator"
            projectDescription="Project made experimenting with Vite and ReactJS. This was my first time experimenting with hooks and other React features."
          />
          <ProjectCard
            projectImageURL={QRCode}
            projectName="Water Intake Calculator"
            projectDescription="Project made experimenting with Vite and ReactJS. This was my first time experimenting with hooks and other React features."
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
