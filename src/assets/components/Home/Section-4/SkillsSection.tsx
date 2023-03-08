import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SkillsToLearn from "./SkillsToLearn";
import LearnedSkills from "./SkillsLearned";

const SkillsSection = () => {
  return (
    <div className="w-full h-full bg-main-dark-extra-blue m-auto min py-16 px-32 max-639:px-16">
      <div className="glow-text">
        <h2 className="pt-8 font-extrabold text-white uppercase text-4xl tracking-wider main-title main-title-glow">
          tech stack
        </h2>
      </div>
      <br />
      <div>
        <p className="text-left pt-12 w-full m-auto text-md text-gray-400 leading-loose">
          I have gained proficiency in several technologies through my
          experience as a front-end developer and have utilized them in creating
          numerous projects. Some of these technologies include but are not
          limited to: I also have experience using various tools for UI design,
          such as Figma, and for productivity, such as Taskade and Vite.
        </p>

        <section className="flex flex-wrap gap-4 pt-12">
          <LearnedSkills></LearnedSkills>
        </section>

        <p className="pt-12 w-full m-auto text-md text-gray-400 leading-loose text-left">
          Also, those are the technologies that I'm either learning or I'm keen
          on learning these months, according to my goal of being a MERN stack
          developer and create more CRUD applications with complex features.
        </p>

        <section className="flex flex-wrap gap-4 pt-6">
          <SkillsToLearn></SkillsToLearn>
        </section>
      </div>
    </div>
  );
};

export default SkillsSection;
