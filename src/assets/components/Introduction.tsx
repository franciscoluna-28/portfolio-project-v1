import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from '../../../public/images/img.jpg';



const Introduction = () => {
    return(
        <>
        



    <div className='bg-main-extra-dark-blue min-w-fit'> {/* the actual box 1 */}
        <div className="grid-flow-row grid grid-cols-2 items-center max-1023:grid-cols-none grid-rows-none flex-none"> {/*box 1 grid system for positioning both the image and the content*/}

        <div className="box-1 flex justify-end items-center py-32 max-1023:items-center max-1023:justify-center max-639:px-8"> {/*box 1 content*/}
            <div className='flex-1 w-full max-w-max items-start max-1023:m-0'> {/* text and links */}
            
                <span className="text-white font-bold text-2xl hover:text-main-cyan duration-300">
                    Hi, I am Francisco Luna</span>
                <span className="font-bold text-main-cyan text-4xl hover:text-white duration-300 block pt-2">
                    Front End Developer</span>
                <div className="flex justify-center">
                    <p className="text-silver max-w-md leading-normal pt-2 block max-639:max-w-sm max-639:leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Etiam tincidunt egestas odio, a suscipit nunc varius quis.
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    </div>

                    {/* button and icons positioning */}
                    <div className="flex justify-items-start gap-4 items-center pt-4 max-1023:justify-center">
                        <button className="bg-transparent hover:bg-main-cyan duration-300 ease-in h-12 text-silver font-regular hover:text-main-extra-dark-blue py-2 px-4 border border-main-cyan hover:border-transparent rounded ml-4 max-1023:h-16">Contact me</button>
                        <GitHubIcon className='text-white cursor-pointer'/>
                        <LinkedInIcon className='text-white cursor-pointer'/>
                    </div>
                </div>
            </div>

            <div className='flex justify-start items-center'>
            <img className='rounded-full h-64 ml-20 border-main-cyan border-2 shadow-xl hover:scale-110 duration-500 
            ease-out max-1023:hidden' src={Image}/>
            </div>
            </div>
</div>


{/* box 2 content */}
<div className='w-full h-96 bg-main-dark-blue m-auto min-w-full'>

        <div>

        <p className='pt-8 font-bold text-silver uppercase text-2xl liNav link link-underline link-underline-black
        max-w-fit w-full flex justify-center m-auto'>last projects</p>

        </div>

</div>


        </>
    )
}

export default Introduction;