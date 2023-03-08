import MySQLIcon from "../../../../images/skills-icons/mysql.png";
import BoostrapIcon from "../../../../images/skills-icons/boostrap.png";
import NextJSIcon from "../../../../images/skills-icons/nextjs.png";
import Skill from "./Skill";

const toLearnSkillsIcons = [{
  id: 1,
  icon: BoostrapIcon,
  name: "Boostrap"
},
{
  id: 2,
  icon: NextJSIcon,
  name: "Nextjs"
},
{
  id: 3,
  icon: MySQLIcon,
  name: "MySQL"
}]

const SkillsToLearn = () => {
  return (
    <>
      {toLearnSkillsIcons.map(skill => (
        <Skill id={skill.id} icon={skill.icon} name={skill.name} />
      ))}
    </>
  );
}









export default SkillsToLearn;
