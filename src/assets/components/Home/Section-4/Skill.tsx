import { Skill as skillInterface } from "./SkillInterface";
import React from "react";

const Skill = ({ id, icon, name }: skillInterface) => {
    return (
        <React.Fragment key={id}>
            <button className="bg-transparent flex justify-center items-center ease-in h-14 text-gray-300 font-regular w-auto px-4 font-semibold border border-main-cyan rounded glow-secondary-2 hover:border-transparent duration-200 hover:text-gray-800">
                <img className="h-8 mr-2" src={icon}></img>
                {name}</button>
        </React.Fragment>
    )
}

export default Skill;