import { Card } from "../../../interfaces/CardInterface";
import "../../../style-utils/utils.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

const ProjectCard = ({
  projectImageURL,
  projectName,
  projectDescription,
}: Card) => {
  return (
    <div>
      <div className="h-auto project-card w-80 rounded-md hover:scale-105 duration-500 shadow-md">
        <div className="flex justify-center">
          <img
            className="h-56 w-auto border-5 border-solid border-white shadow-md rounded-t-md relative"
            src={projectImageURL}
          ></img>
        </div>

        <div className="flex px-8 py-6 flex-col">
          <h3 className="text-white font-bold text-lg text-left">
            {projectName}
          </h3>
          <p className="text leading-loose text-silver pt-2 text-left">
            {projectDescription}
          </p>

          <div className="flex gap-6 py-6">
            <GitHubIcon className="text-white translate-y-3 glow-text" />
            <LanguageIcon className="text-main-cyan translate-y-3 glow-text" />
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div
className="w-full h-auto bg-cover bg-no-repeat bg-center max-w-md max-1023:hidden"
style={{ backgroundImage: `url(${projectImageURL})` }}
></div> */
}

export default ProjectCard;
