import ArticleIcon from '@mui/icons-material/Article';




const AboutMeSection = () => {
  return (
    <div className="w-full h-full bg-main-extra-dark-blue m-auto min py-8" id="about">
      <h2 className="pt-8 font-extrabold text-white uppercase text-4xl tracking-wider main-title main-title-glow">
        About Me
      </h2>
      <div className="py-12 px-32 max-639:px-16">
        <ol className="relative border-l border-gray-200 dark:border-gray-700 max-639:justify-center">
          <div className="flex justify-center">
            <li className="mb-10">
              <time className="text-md mb-1 font-normal leading-none text-gray-400 dark:text-gray-500 flex text-left">
                Introduction
              </time>
              <div className="flex">
                <h3 className="font-bold text-left flex text-white pt-2 text-2xl">
                  Who Am I?
                </h3>
                <span className="font-bold text-white border-solid border-2 border-main-cyan rounded-full w-6 h-6 text-center flex items-center justify-center glow-secondary mt-2.5 ml-2 max-639:hidden">
                  1
                </span>
              </div>
              
              <p className="mb-4 text-base leading-loose font-normal text-gray-400 w-full pt-2 text-left">
{/*                 Greetings, my name is Francisco Luna, and I am an 18-year-old
                computer science student and self taught front-end developer
                from Venezuela. In this portfolio, I will share my journey and
                experiences with web development. */}
              </p>
{/*               <img
                className="pt-6 overflow-hidde shadow-md hover:scale-105 duration-500 h-96 m-auto"
                src={frontEnd}
              /> */}
            </li>
          </div>

          <div className="flex justify-center">

            <li className="mb-10 pt-4">

              <time className="mb-1 flex text-sm font-normal leading-none text-gray-500 dark:text-gray-500 text-left">
                July 2021 - December 2022
              </time>

              <div className="flex">
                <h3 className="font-bold flex text-white pt-2 text-2xl text-left">
                  My Story with Coding
                </h3>
                <span className="font-bold text-white border-solid border-2 border-main-cyan rounded-full w-6 h-6 text-center flex items-center justify-center ambience mt-2.5 ambience ml-2 max-639:hidden">
                  2
                </span>
              </div>

              <p className="text-base text-left leading-loose font-normal text-gray-400 dark:text-gray-400 w-full pt-2 m-auto">
{/*                 My journey in coding began at the age of 16 when I discovered my
                passion for creating things. In mid-2021, I began learning
                Python and quickly grasped the fundamentals of coding, using
                this knowledge to create several simple projects. However, it
                wasn't until the beginning of 2022 when I started to delve into
                JavaScript and subsequently CSS and HTML. With a solid
                foundation in web development, I continued to challenge myself
                by experimenting with new frameworks and tools, such as ReactJS,
                Vite, MongoDB, TailwindCSS, TypeScript, and others. This allowed
                me to further enhance my skills and broaden my understanding of
                web development. */}
              </p>
{/*               <img
                className="pt-12 overflow-hidden shadow-md hover:scale-105 duration-500 h-96 w-fit m-auto"
                src={codingBg}
              /> */}
            </li>
          </div>

          <div className="flex justify-center">
            <li className="pt-8 max-767:pt-4 mb-10">
              <time className="mb-1 flex text-sm text-left font-normal leading-none text-gray-400 dark:text-gray-500">
                December 2022 - Currently
              </time>
              <div className="flex justify-start">
                <h3 className="font-bold flex text-white pt-2 text-2xl text-left">
                  Current Goals and Aspirations
                </h3>
                <span className="font-bold text-white border-solid border-2 border-main-cyan rounded-full w-6 h-6 text-center flex items-center justify-center ambience mt-2.5 ambience ml-2 max-639:hidden">
                  3
                </span>
              </div>
              <p className="text-base text-left leading-loose font-normal text-gray-400 m-auto w-full dark:text-gray-400 pt-2">
{/*                 Currently, my main goal is to collaborate with new people and
                companies to expand my knowledge and skills in both Front End
                and Back End development. I aspire to work with the MERN
                (MongoDB, Express.JS, ReactJS, and NodeJS) stack and improve my
                technical proficiency in areas such as clean architecture, code,
                diverse testing methods, and team collaboration. By working with
                other professionals in the industry, I aim to broaden my
                horizons and gain valuable experience in developing real-world
                applications. I am eager to contribute to projects and to learn
                from experienced developers, and I believe that working
                collaboratively is the best way to achieve these goals. */}
              </p>
{/*               <img
                className="pt-12 overflow-hidde shadow-md hover:scale-105 duration-500 h-96 m-auto"
                src={mernStack}
              /> */}
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default AboutMeSection;
