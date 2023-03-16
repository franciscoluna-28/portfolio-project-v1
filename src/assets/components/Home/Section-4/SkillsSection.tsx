import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SkillsToLearn from "./SkillsToLearn";
import LearnedSkills from "./SkillsLearned";
import ArchitectureIcon from "@mui/icons-material/Architecture";

const SkillsSection = () => {
  return (
    <div
      className="w-full h-full bg-main-dark-extra-blue m-auto min py-8 px-32 max-639:px-16"
      id="skills"
    >
      <div className="glow-text">
        <h2 className="pt-8 font-extrabold text-white uppercase text-4xl tracking-wider main-title main-title-glow">
          tech stack and resume
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

        <div className="flex py-6 items-center">
          <p className="inline-block text-white font-bold ml-2 text-left">
            My current tech stack:
          </p>
        </div>

        <section className="flex mt-4 duration-500 flex-wrap gap-4 py-10 px-4 project-skill-card shadow-lg rounded items-center">
          <LearnedSkills></LearnedSkills>
        </section>

        <p className="pt-12 w-full m-auto text-md text-gray-400 leading-loose text-left">
          As a MERN stack developer, my primary goal is to build dynamic web
          applications with complex features. To achieve this goal, I am
          constantly learning and keeping up-to-date with the latest
          technologies and frameworks. Currently, I am focusing on learning or
          enhancing my skills in several technologies that are essential for
          MERN stack development. These include MongoDB, Express.js, React, and
          Node.js. As a MERN stack developer, I understand the importance of
          being proficient in both front-end and back-end development. To
          further my skills in back-end development, I am keen on learning
          several new technologies.
        </p>

        <div className="flex py-6 items-center">
          <p className="inline-block text-white font-bold ml-2 leading-loose text-left">
            Technologies that I'll be learning:
          </p>
        </div>

        <section className="flex mt-4 flex-wrap gap-4 w-auto py-10 px-4 project-skill-card shadow-lg rounded items-center">
          <SkillsToLearn></SkillsToLearn>
        </section>

        <div className="flex pt-8 items-center">
          <p className="inline-block text-white font-bold ml-2 leading-loose text-left">
            My resume and professional profile:
          </p>
        </div>

        <p className="w-full pt-4 m-auto text-md text-gray-400 leading-loose text-left">
          As a bilingual MERN stack developer, I understand the importance of
          effective communication in the industry. That's why I am proud to
          offer my resume in both Spanish and English for your convenience.
        </p>
        <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-silver font-regular hover:text-main-extra-dark-blue w-full mt-6 border border-main-cyan hover:border-transparent rounded glow-secondary">
          Resume (Spanish)
        </button>
        <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-silver font-regular hover:text-main-extra-dark-blue w-full mt-6 border border-main-cyan hover:border-transparent rounded glow-secondary">
          Resume (English)
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
