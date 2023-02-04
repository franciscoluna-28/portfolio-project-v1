import { Card } from "../../../interfaces/CardInterface";

const ProjectCard = ({
  projectImageURL,
  projectName,
  projectDescription,
}: Card) => {
  return (
    <>
      <div className="h-auto bg-gradient-to-r from-main-dark-blue to-main-extra-dark-blue flex rounded-md overflow-hidden my-8 shadow-lg hover:scale-105 duration-300 justify-center">
        <div className="w-1/2 h-auto py-8 px-8">
          <h2 className="text-silver font-bold text-xl flex justify-start">
            {projectName}
          </h2>
          <p className="pt-2 text-silver leading-relaxed text-justify">
            {projectDescription}
          </p>
          <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-silver font-regular hover:text-main-extra-dark-blue mt-4 w-1/2 border border-main-cyan hover:border-transparent rounded  max-1023:h-16">
            Learn More
          </button>
        </div>

        <div
          className="w-full h-auto bg-cover bg-no-repeat bg-center max-w-md"
          style={{ backgroundImage: `url(${projectImageURL})` }}
        ></div>
      </div>
    </>
  );
};

export default ProjectCard;
