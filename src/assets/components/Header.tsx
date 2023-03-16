import TranslateIcon from "@mui/icons-material/Translate";
import "../styles/navbar.css";

const Header = () => {

  const scrollToDiv = (divID: string) => (event: React.MouseEvent<HTMLSpanElement>): void => {
    const divElement = document.getElementById(divID);
    if (divElement) divElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="py-6 flex justify-center
      w-full m-0 sticky top-0 overflow-auto self-start z-20 bg-main-extra-dark-blue shadow-md">

          <ul className="ulNav max-1023:hidden">
          <li className="liNav">
              <a href="#home">
                <span className="text-gray">
              home
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#skills">
                <span className="link link-underline link-underline-black text-gray"onClick={scrollToDiv("skills")} >
                  skills and resume
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#contact">
                <span className="link link-underline link-underline-black text-gray" >
                  contact
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#about">
                <span className="link link-underline link-underline-black text-gray" onClick={scrollToDiv("about")}>
                  about me
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#projects">
                <span className="link link-underline link-underline-black text-gray" onClick={scrollToDiv("projects")}>
                  projects
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#translate">
                <span className="text-gray">
                  <TranslateIcon />
                </span>
              </a>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Header;
