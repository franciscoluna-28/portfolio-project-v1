import LandingSection from "./Section-1/LandingSection";
import Image from "../../../../public/images/img.jpg";
import ProjectsSection from "./Section-2/ProjectsSection";
import SkillsSection from "./Section-3/AboutMeSection";
import AboutMeSection from "./Section-4/SkillsSection";
import ContactMe from "./Section-5/ContactMe";

const Home = () => {
  return (
    <>
      <LandingSection image={Image}></LandingSection>
      <ProjectsSection />
      <SkillsSection />
      <AboutMeSection />
      <ContactMe />
    </>
  );
};

export default Home;


//for animations will be using framer motion *sighs 