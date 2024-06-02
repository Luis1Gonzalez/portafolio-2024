import { Typewriter } from "react-simple-typewriter"
import logoLinkedin from '../assets/general/logo-linkedin.svg'
import logoGithub from '../assets/general/logo-github.svg'
import logoEmail from '../assets/general/logo-email.svg'
import logoCv from '../assets/general/logo-cv.svg'
import cv from '../assets/cvLuisGonzalez.pdf'
import foto_portafolio_2024 from '../assets/general/foto_portafolio_2024.jpg'
import translate from '../assets/general/translate.svg'
import useLanguage from "../hooks/useLanguage"
import { Link } from "react-router-dom"




const Header = () => {

const { lang, setLang, translation } = useLanguage()

    return (
        <div>

            <nav className='bg-gray-800 flex justify-evenly mt-2 py-3 font-semibold text-md md:text-xl'>
                <div className=''><Link to='/'>{lang === 'english' ? 'Home' : 'Inicio'}</Link></div>
                <div><a href="#projects">{lang === 'english' ? 'Projects' : 'Proyectos'}</a></div>
                <div><a href="#formation">{lang === 'english' ? 'Education' : 'Formación'}</a></div>
                <div
                onClick={() => translation(setLang)}
                className='bg-sky-300 p-1 rounded-md shadow-xl cursor-pointer hover:bg-sky-500'>
                    <img className='h-[1rem] md:h-[1.2rem]' src={translate} alt="licono de traducción" />
                </div>
            </nav>

            <div className='flex flex-col items-center mt-9 md:mt-12 md:flex-row md:justify-evenly'>
                <div className='w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:order-2'>
                    <img className='rounded-full' src={foto_portafolio_2024} alt="foto de Luis Antonio" />
                </div>

                <div className='mt-5 md:order-1'>
                    <p className='text-xl text-emerald-500 font-semibold sm:text-2xl xl:text-4xl'>Hello</p>
                    <h1 className=' sm:text-3xl italic xl:text-4xl xl:font-bold md:my-1'><Typewriter
                        words={['I`m Luis', 'I`m Luis González']}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={200}
                        deleteSpeed={150}
                        delaySpeed={1000}
                    /></h1>
                    <h2 className='text-xl text-emerald-500 font-semibold sm:text-2xl xl:text-4xl'>Frontend Developer</h2>

                    <div className='flex justify-center items-start gap-5 mt-10 text-sm md:text-md'>
                        <div>
                            <a href={cv} target="_blank" rel="noreferrer">
                            <img title="Download my CV" className='h-[1.5rem]' src={logoCv} alt="descargar CV" />
                            </a>
                        </div>
                        <div>
                            <a href="http://www.linkedin.com/in/luis1gonzalez" target="_blank" rel="noreferrer">
                                <img title="my Linkedin" className='h-[1.5rem]' src={logoLinkedin} alt="logo de linkedin" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/Luis1Gonzalez" target="_blank" rel="noreferrer">
                                <img title="my Github" className='h-[1.5rem]' src={logoGithub} alt="logo de github" />
                            </a>
                        </div>
                        <div className='flex gap-3'>
                            <a href="mailto:luis1gonzalez@hotmail.com">
                                <img title="Send Email" className='h-[1.5rem]' src={logoEmail} alt="logo de email" />
                            </a>
                            <p className='hidden md:flex'>luis1gonzalez@hotmail.com</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header