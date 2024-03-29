import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ImageAndText } from "../../../interfaces/LandingSectionProps";
import myPhoto from "../../../../images/projects-images/img.jpg";
import "../../../style-utils/utils.css";

const LandingSection = () => {
  return (
    <div className="primary-div-up min-h-screen flex text-center justify-center items-center max-639:px-16 clamp" id="home">
      <div className="grid grid-cols-2 gap-10 max-1279:flex max-1279:grid-cols-none max-1279:flex-col-reverse">
        <div className="order-last flex justify-center items-center max-1279:flex max-1279:justify-center">
          <img
            className="h-72 w-72 rounded-full max-1279:h-48 max-1279:w-48 glow-main border-white border-2 border-double main-image p-1 floating max-767:h-32 max-767:w-32"
            src={myPhoto}
          ></img>
        </div>
        <div className="max-639:px-5">
          <h1 className="text-white font-bold text-5xl flex py-2 max-639:justify-center max-639:text-4xl">
            Hi, I am Francisco Luna
          </h1>
          <h2 className="text-main-cyan font-bold text-4xl flex py-2 glow-text max-639:justify-center max-639:text-3xl">
            Front End Developer
          </h2>
          <div>
            <p className="text-silver leading-loose py-2 text-left w-96 max-639:w-72 max-639:m-auto max-639:text-center text-xl">
              18 years old Front End Developer from Venezuela. Currently
              studying a Computer Science Major and working on personal
              projects.
            </p>
          </div>

          <div className="flex items-center gap-4 m-0 py-4 max-639:justify-center">
            <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-silver font-regular hover:text-main-extra-dark-blue w-1/2 border border-main-cyan hover:border-transparent rounded glow-secondary">
              Contact Me
            </button>
                   <a href="https://github.com/franciscoluna-28"><GitHubIcon className="text-white scale-110"></GitHubIcon></a>
                   <a href="https://www.linkedin.com/in/franciscoluna28/"><LinkedInIcon className="text-white scale-110"></LinkedInIcon></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
