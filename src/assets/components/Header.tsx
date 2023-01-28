import TranslateIcon from "@mui/icons-material/Translate";
import "../styles/navbar.css";

const Header = () => {
  return (
    <>
      <div className="py-6 flex justify-center
      w-full m-0">

          <ul className="ulNav">
            <li className="liNav">
              <a href="#">
                <span className="link link-underline link-underline-black text-gray">
                  skills
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#">
                <span className="link link-underline link-underline-black text-gray">
                  contact
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#">
                <span className="link link-underline link-underline-black text-gray">
                  about me
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#">
                <span className="link link-underline link-underline-black text-gray">
                  work
                </span>
              </a>
            </li>
            <li className="liNav">
              <a href="#">
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
