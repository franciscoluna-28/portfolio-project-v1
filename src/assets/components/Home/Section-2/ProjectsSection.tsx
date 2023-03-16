import ProjectCard from "./ProjectCard";
import "../../../style-utils/utils.css";
import weatherImage from "../../../../images/projects-images/weatherApp.png";
import blogImage from "../../../../images/projects-images/blog.png";
import waterImage from "../../../../images/projects-images/water-intake-calculator.png";
import QRCode from "../../../../images/projects-images/qr-code-app-node.png";

const ProjectsSection = () => {
  return (
    <div className="w-full h-full primary-div-down bg-contrast-bg m-auto min" id="projects">
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
          projectGitHubLink="https://github.com/franciscoluna-28/Weather-App-React-and-TailwindCSS" 
          projectPublicURL="https://weather-app-tailwind-react.netlify.app"
          />
          <ProjectCard
            projectImageURL={blogImage}
            projectName="Personal Blog"
            projectDescription="Project made as a hobbie 
            using TypeScript, SASS,
            JavaScript, Gulp and
            ES6. Learned a lot making this one."
            projectGitHubLink="https://github.com/franciscoluna-28/Song-Blog-Beta"
            projectPublicURL="https://music-blog-beta-ts-sass.netlify.app"
            
          />
          <ProjectCard
            projectImageURL={waterImage}
            projectName="Water Intake Calculator"
            projectDescription="Project made experimenting with Vite and ReactJS. This was my first time experimenting with hooks and other React features."
            projectGitHubLink="https://github.com/franciscoluna-28/daily-water-intake-calculator"
            projectPublicURL="https://daily-water-intake-calculator.netlify.app"
          />
          <ProjectCard
            projectImageURL={QRCode}
            projectName="QR Code Generator"
            projectDescription="Project made using Node.js, ExpressJS and TypeScript. This was my first time experimenting with backend and fullstack development."
            projectGitHubLink=""
            projectPublicURL=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
