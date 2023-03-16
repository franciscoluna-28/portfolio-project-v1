import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ContactUs from './EmailForm';

const ContactMe = () => {
    return(
        <div className="w-full h-full bg-main-extra-dark-blue m-auto min py-16 px-32" id="contact">
 <h2 className="pt-8 font-extrabold text-white uppercase text-4xl tracking-wider main-title main-title-glow">
          Contact Me
        </h2>

{/*         <section className='flex gap-4 justify-center'>
        <button className="mt-12 bg-transparent flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-white font-bold font-regular bg-cyan-400 w-auto px-4 rounded">
        Twitter<TwitterIcon className='ml-1'/>
            </button>
        <button className="mt-12 bg-transparent flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-white font-bold font-regular bg-slate-800 w-auto px-4 rounded">
        GitHub<GitHubIcon className='ml-1'/>
            </button>
        <button className="mt-12 bg-transparent flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-white font-bold font-regular bg-blue-800 w-auto px-4 rounded">
        LinkedIn<LinkedInIcon className='ml-1'/>
            </button>
        <button className="mt-12 bg-transparent flex justify-items-start justify-center items-center duration-300 ease-in h-14 text-white font-bold font-regular bg-green-400 w-auto px-4 rounded">
        WhatsApp<WhatsAppIcon className='ml-1'/>
            </button>
            </section> */}
            
            <ContactUs/>
</div>
    )
}

export default ContactMe;