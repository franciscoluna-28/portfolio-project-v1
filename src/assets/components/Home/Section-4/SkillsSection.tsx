import ReactIcon from "../../../../../public/skills-icons/react.png"
import TSIcon from "../../../../../public/skills-icons/ts.png"
import JSIcon from "../../../../../public/skills-icons/js.png"
import HTMLIcon from "../../../../../public/skills-icons/html.png"
import CSSIcon from "../../../../../public/skills-icons/css.png"
import SassIcon from "../../../../../public/skills-icons/sass.png"
import TailwindIcon from "../../../../../public/skills-icons/tailwind.png"
import MongoDBIcon from "../../../../../public/skills-icons/mongodb.png"
import FigmaIcon from "../../../../../public/skills-icons/figma.png"
import PythonIcon from "../../../../../public/skills-icons/python.png"
import GitHubIcon from "../../../../../public/skills-icons/github.png"
import NodeJSIcon from "../../../../../public/skills-icons/nodejs.png"
import ExpressJSIcon from "../../../../../public/skills-icons/express.png"
import NextJSIcon from "../../../../../public/skills-icons/nextjs.png"
import MYSQLIcon from "../../../../../public/skills-icons/mysql.png"
import BoostrapIcon from "../../../../../public/skills-icons/boostrap.png"
import ViteIcon from "../../../../../public/skills-icons/vite.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

const SkillsSection = () => {

    return(
        <div className="w-full h-full bg-main-dark-blue m-auto min py-16">
            <h2 className="pt-8 font-bold text-silver uppercase text-2xl liNav link link-underline link-underline-black
max-w-fit w-full flex justify-center m-auto">Skills</h2> <br />
<div>
   <p className="text-silver text-justify max-w-2xl m-auto leading-normal text-lg">Those are the technologies that I'm currently profficient with and I created several projects with them. You'll also be able to see tools for UI design, like Figma and others for productivity, such as Vite:</p>
  </div>
  <div className="w-1/2 h-80 bg-gradient-to-r from-main-dark-blue to-main-extra-dark-blue m-auto my-8 rounded overflow-hidden flex hover:scale-105 duration-500 ease-in-out">
        <div className="flex justify-center m-auto gap-4 w-full flex-wrap">
            <img className="h-12 hover:scale-90 duration-300" src = {ReactIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {TSIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {JSIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {HTMLIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {CSSIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {SassIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {TailwindIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {FigmaIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {MongoDBIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {PythonIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {GitHubIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {ViteIcon}></img>
        </div>
  </div>

  <p className="text-silver text-justify max-w-2xl m-auto leading-normal text-lg">Also, those are the technologies that I'm either learning or I'm keen on learning these months, according to my goal of being a MERN stack developer and create more CRUD applications with complex features.</p>
  <div className="w-1/2 h-36 bg-gradient-to-r from-main-extra-dark-blue to-main-++dark-blue m-auto my-8 rounded overflow-hidden flex hover:scale-105 duration-500 ease-in-out">
        <div className="flex justify-center m-auto gap-4 w-auto">
            <img className="h-12 hover:scale-90 duration-300" src = {NodeJSIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {ExpressJSIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {MYSQLIcon}></img>
            <img className="h-12 hover:scale-90 duration-300" src = {BoostrapIcon}></img>
            <div className="h-full w-32 bg-white px-2 rounded justify-center flex">
            <img className="h-12 hover:scale-90 duration-300" src = {NextJSIcon}></img>
            </div>
        </div>
        
  </div>

  <p className="text-silver text-justify max-w-2xl m-auto leading-normal text-lg">Additionally, this is my resume (2023). Which is available in both Spanish and English. You can download it for learning more about me.</p>
        <div className="flex flex-col
         gap-4 pt-6">
        <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 m-auto text-silver font-regular hover:text-main-extra-dark-blue mt-4 w-1/2 border border-main-cyan hover:border-transparent rounded  max-1023:h-16">
            Resume (EN) <FontAwesomeIcon className="pl-2" icon={faDownload}/></button>
        <button className="bg-transparent hover:bg-main-cyan flex justify-items-start justify-center items-center duration-300 ease-in h-14 m-auto text-silver font-regular hover:text-main-extra-dark-blue mt-4 w-1/2 border border-main-cyan hover:border-transparent rounded  max-1023:h-16">
            Resume (ES) <FontAwesomeIcon className="pl-2" icon={faDownload} /></button>
        </div>
        </div>
        
        

    )

    

}

export default SkillsSection;