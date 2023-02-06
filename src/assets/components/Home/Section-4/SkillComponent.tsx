import { SkillIcon } from "../../../interfaces/SkillIconInterface"

const SkillComponent = ({iconImage}: SkillIcon) => 
    <img className="h-12 hover:scale-90 duration-300" src = {iconImage}></img>

export default SkillComponent;