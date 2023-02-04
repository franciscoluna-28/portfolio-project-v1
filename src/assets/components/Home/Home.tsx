import LandingSection from "./Section-1/LandingSection";
import Image from "../../../../public/images/img.jpg";
import ProjectsSection from "./Section-2/ProjectsSection";
import SkillsSection from "./Section-3/AboutMeSection";
import AboutMeSection from "./Section-4/SkillsSection"

const Home = () => {
  return (
    <>
      <LandingSection image={Image}></LandingSection>
      <ProjectsSection />
      <AboutMeSection/>
      <SkillsSection />
    </>
  );
};

export default Home;
