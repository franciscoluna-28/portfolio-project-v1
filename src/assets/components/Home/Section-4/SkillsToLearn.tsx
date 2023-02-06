import NodeJSIcon from "../../../../images/skills-icons/nodejs.png";
import MySQLIcon from "../../../../images/skills-icons/mysql.png";
import BoostrapIcon from "../../../../images/skills-icons/boostrap.png";
import NextJSIcon from "../../../../images/skills-icons/nextjs.png";
import SkillComponent from "./SkillComponent";

const SkillsToLearn = () => {
  return (
    <div className="w-1/2 h-36 bg-gradient-to-r from-main-extra-dark-blue to-main-++dark-blue m-auto my-8 rounded overflow-hidden flex hover:scale-105 duration-500 ease-in-out">
      <div className="flex justify-center m-auto gap-4 w-auto">
        <SkillComponent iconImage={NodeJSIcon} />
        <SkillComponent iconImage={MySQLIcon} />
        <SkillComponent iconImage={BoostrapIcon} />
        <div className="h-full w-32 bg-white px-2 rounded justify-center flex"></div>
        <SkillComponent iconImage={NextJSIcon} />
      </div>
    </div>
  );
};

export default SkillsToLearn;
