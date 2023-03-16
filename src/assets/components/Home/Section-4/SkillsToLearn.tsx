import MySQLIcon from "../../../../images/skills-icons/mysql.png";
import BoostrapIcon from "../../../../images/skills-icons/boostrap.png";
import NextJSIcon from "../../../../images/skills-icons/nextjs.png";
import PostgreSQLIcon from "../../../../images/skills-icons/Postgresql.png";
import PHPIcon from "../../../../images/skills-icons/php.png";
import GraphQL from "../../../../images/skills-icons/graphql.png";
import Skill from "./Skill";

const toLearnSkillsIcons = [
  {
    id: 1,
    icon: BoostrapIcon,
    name: "Boostrap",
  },
  {
    id: 2,
    icon: NextJSIcon,
    name: "Nextjs",
  },
  {
    id: 3,
    icon: MySQLIcon,
    name: "MySQL",
  },
  {
    id: 4,
    icon: PostgreSQLIcon,
    name: "PostgreSQL",
  },
  {
    id: 5,
    icon: PHPIcon,
    name: "PHP",
  },
  {
    id: 6,
    icon: GraphQL,
    name: "GraphQL",
  },
];

const SkillsToLearn = () => {
  return (
    <>
      {toLearnSkillsIcons.map((skill) => (
        <Skill id={skill.id} icon={skill.icon} name={skill.name} />
      ))}
    </>
  );
};

export default SkillsToLearn;
