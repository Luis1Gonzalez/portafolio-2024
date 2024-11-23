import Whatsapp from '../assets/general/whatsapp.svg'
import Github from '../assets/general/github.svg'
import Linkedin from '../assets/general/linkedin.svg'
import Phone from '../assets/general/phone.svg'
import Email from '../assets/general/email.svg'
import Web from '../assets/general/site.svg'

const Lobby = () => {
  return (
    <div className="flex justify-center mb-[100px] mt-[50px]">
        <div className="text-white max-w-[400px] w-[100%] mb-12 border border-cyan-50 px-2 py-12 rounded-md">
        <h1 className='text-2xl text-center text-white mb-12'>¿Que quieres hacer?</h1>
        
        <div className='flex flex-col gap-6 text-lg'>

        <div className='flex items-center hover:scale-105'>
        <img src={Web} alt="web-site" className='w-8 h-8 mr-4'/>
                <a href='https://luis1gonzalez.com' className='text-center' target="_blank" rel="noreferrer">Visitar mi Web</a>
            </div>

            <div className='flex items-center hover:scale-105'>
            <img src={Email} alt="email" className='w-8 h-8 mr-4'/>
                <a href="mailto:luis1gonzalez@hotmail.com" className='text-center'>Enviarme un Email</a>
            </div>

            <div className='flex items-center hover:scale-105'>
            <img src={Phone} alt="phone" className='w-8 h-8 mr-4'/>
                <a  href="tel:+34645081201" className='text-center'>Llamarme</a>
            </div>

            <div className='flex items-center hover:scale-105'>
                <img src={Whatsapp} alt="whatsapp" className='w-8 h-8 mr-4'/>
                <a  href="https://wa.me/34645081201" className=''>Enviarme un whatsapp</a>
            </div>

            <div className='flex items-center hover:scale-105'>
            <img src={Linkedin} alt="linkedin" className='w-8 h-8 mr-4 bg-white'/>
                <a href="https://www.linkedin.com/in/luis1gonzalez-web-developer-frontend" className='text-center'>Visitiar mi Linkedin</a>
            </div>

            <div className='flex items-center hover:scale-105'>
            <img src={Github} alt="github" className='w-8 h-8 mr-4'/>
                <a href="https://github.com/Luis1Gonzalez" className='text-center'>Visitiar mi Github</a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Lobby
