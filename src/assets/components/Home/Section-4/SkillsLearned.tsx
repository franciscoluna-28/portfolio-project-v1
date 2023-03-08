import SkillComponent from "./SkillComponent";
import ReactIcon from "../../../../images/skills-icons/react.png";
import TSIcon from "../../../../images/skills-icons/ts.png";
import NodeJSIcon from "../../../../images/skills-icons/nodejs.png"
import ExpressIcon from "../../../../images/skills-icons/express.png"
import JSIcon from "../../../../images/skills-icons/js.png";
import HTMLIcon from "../../../../images/skills-icons/html.png";
import CSSIcon from "../../../../images/skills-icons/css.png";
import SASSIcon from "../../../../images/skills-icons/sass.png";
import TailwindIcon from "../../../../images/skills-icons/tailwind.png";
import MongoDBIcon from "../../../../images/skills-icons/mongodb.png";
import FigmaIcon from "../../../../images/skills-icons/figma.png";
import PythonIcon from "../../../../images/skills-icons/python.png";
import GitHubIcon from "../../../../images/skills-icons/github.png";
import ViteIcon from "../../../../images/skills-icons/vite.png";
import TaskadeIcon from "../../../../images/skills-icons/taskade.png";
import Skill from "./Skill";

export const learnedSkillsIcons = [
  {
    id: 1,
    icon: ReactIcon,
    name: "React"
  },
  {
    id: 2,
    icon: TSIcon,
    name: "TypeScript"
  },
  {
    id: 3,
    icon: NodeJSIcon,
    name: "NodeJS"
  },
  {
    id: 4,
    icon: ExpressIcon,
    name: "ExpressJS"
  },
  {
    id: 5,
    icon: JSIcon,
    name: "JavaScript"
  },
  {
    id: 6,
    icon: HTMLIcon,
    name: "HTML"
  },
  {
    id: 7,
    icon: CSSIcon,
    name: "CSS"
  },
  {
    id: 8,
    icon: SASSIcon,
    name: "SASS"
  },
  {
    id: 9,
    icon: TailwindIcon,
    name: "Tailwind"
  },
  {
    id: 10,
    icon: MongoDBIcon,
    name: "MongoDB"
  },
  {
    id: 11,
    icon: FigmaIcon,
    name: "Figma"
  },
  {
    id: 12,
    icon: PythonIcon,
    name: "Python"
  },
  {
    id: 13,
    icon: GitHubIcon,
    name: "GitHub"
  },
  {
    id: 14,
    icon: ViteIcon,
    name: "Vite"
  },
  {
    id: 15,
    icon: TaskadeIcon,
    name: "Taskade"
  }
];

const LearnedSkills = () => {
  return (
    <>
      {learnedSkillsIcons.map(skill => (
        <Skill id={skill.id} icon={skill.icon} name={skill.name} />
      ))}
    </>
  );
}




export default LearnedSkills;




