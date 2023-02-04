import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="w-full h-full bg-main-dark-blue m-auto min">
      <div>
        {" "}
        {/* box 2 container */}
        <p
          className="pt-8 font-bold text-silver uppercase text-2xl liNav link link-underline link-underline-black
max-w-fit w-full flex justify-center m-auto"
        >
          last projects
        </p>
        <div className="w-full px-12 grid-flow-row col-auto grid justify-center pt-2">
          {/* projects container */}
          <ProjectCard
            projectImageURL="../../../../../public/images/weatherApp.png"
            projectName="Weather App"
            projectDescription="Project made for learning
          purposes with React, Vite,
          TailwindCSS, TypeScript,
          ES6 and fetch API."
          />
          <ProjectCard
            projectImageURL="../../../../../public/images/blog.png"
            projectName="Personal Blog"
            projectDescription="Project made as a hobbie 
            using TypeScript, SASS,
            JavaScript, Gulp and
            ES6."
          />
          <ProjectCard projectImageURL="../../../../../public/images/water-intake-calculator.png" projectName="Water Intake Calculator" projectDescription="Project made experimenting with Vite and ReactJS. This was my first time experimenting with hooks."/>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
