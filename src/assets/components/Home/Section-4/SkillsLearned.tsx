import SkillComponent from "./SkillComponent";
import ReactIcon from "../../../../images/skills-icons/react.png";
import TSIcon from "../../../../images/skills-icons/ts.png";
import JSIcon from "../../../../images/skills-icons/js.png";
import HTMLIcon from "../../../../images/skills-icons/html.png";
import CSSIcon from "../../../../images/skills-icons/css.png";
import SassIcon from "../../../../images/skills-icons/sass.png";
import TailwindIcon from "../../../../images/skills-icons/tailwind.png";
import MongoDBIcon from "../../../../images/skills-icons/mongodb.png";
import FigmaIcon from "../../../../images/skills-icons/figma.png";
import PythonIcon from "../../../../images/skills-icons/python.png";
import GitHubIcon from "../../../../images/skills-icons/github.png";
import ViteIcon from "../../../../images/skills-icons/vite.png";

const SkillsLearned = () => {
  return (
    <div className="w-1/2 h-80 bg-gradient-to-r from-main-dark-blue to-main-extra-dark-blue m-auto my-8 rounded overflow-hidden flex hover:scale-105 duration-500 ease-in-out">
      <div className="flex justify-center m-auto gap-4 w-full flex-wrap">
        <SkillComponent iconImage={ReactIcon} />
        <SkillComponent iconImage={TSIcon} />
        <SkillComponent iconImage={JSIcon} />
        <SkillComponent iconImage={HTMLIcon} />
        <SkillComponent iconImage={CSSIcon} />
        <SkillComponent iconImage={SassIcon} />
        <SkillComponent iconImage={TailwindIcon} />
        <SkillComponent iconImage={MongoDBIcon} />
        <SkillComponent iconImage={FigmaIcon} />
        <SkillComponent iconImage={PythonIcon} />
        <SkillComponent iconImage={GitHubIcon} />
        <SkillComponent iconImage={ViteIcon} />
      </div>
    </div>
  );
};

export default SkillsLearned;
