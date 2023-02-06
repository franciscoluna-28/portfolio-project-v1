import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SkillsToLearn from "./SkillsToLearn";
import SkillsLearned from "./SkillsLearned";

const SkillsSection = () => {
  return (
    <div className="w-full h-full bg-main-dark-blue m-auto min py-16">
      <h2
        className="pt-8 font-bold text-silver uppercase text-2xl liNav link link-underline link-underline-black
max-w-fit w-full flex justify-center m-auto"
      >
        Skills
      </h2>{" "}
      <br />
      <div>
        <p className="text-silver text-justify max-w-2xl m-auto leading-normal text-lg">
          Those are the technologies that I'm currently profficient with and I
          created several projects with them. You'll also be able to see tools
          for UI design, like Figma and others for productivity, such as Vite:
        </p>
        <SkillsLearned />

        <p className="text-silver text-justify max-w-2xl m-auto leading-normal text-lg">
          Also, those are the technologies that I'm either learning or I'm keen
          on learning these months, according to my goal of being a MERN stack
          developer and create more CRUD applications with complex features.
        </p>

        <SkillsToLearn />

        <p className="text-silver text-justify max-w-2xl m-auto leading-normal text-lg">
          Additionally, this is my resume (2023). Which is available in both
          Spanish and English. You can download it for learning more about me:
        </p>
        <div
          className="flex flex-col
         gap-4 pt-6"
        >
          <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 m-auto text-silver font-regular hover:text-main-extra-dark-blue mt-4 w-1/2 border border-main-cyan hover:border-transparent rounded  max-1023:h-16">
            Resume (EN) <FontAwesomeIcon className="pl-2" icon={faDownload} />
          </button>
          <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 m-auto text-silver font-regular hover:text-main-extra-dark-blue mt-4 w-1/2 border border-main-cyan hover:border-transparent rounded  max-1023:h-16">
            Resume (ES) <FontAwesomeIcon className="pl-2" icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
