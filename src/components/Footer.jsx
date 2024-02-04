import logoLinkedin from '../assets/general/logo-linkedin.svg'
import logoGithub from '../assets/general/logo-github.svg'
import logoEmail from '../assets/general/logo-email.svg'
import qr from '../assets/general/qr.png'
import useLanguage from '../hooks/useLanguage'

const Footer = () => {

    const { lang } = useLanguage()

    return (
        <div className="flex flex-col lg:flex-row gap-5 md:gap-0 p-5 justify-center items-center border border-gray-700/50">
            <p className="text-2xl md:text-3xl md:mb-4 text-center lg:w-[25%]">{lang === 'english' ? 'Contact' : 'Contacto'}</p>

            <div className='lg:w-[75%]'>
                <p className='mb-3 sm:mb-6 text-center'>{lang === 'english' ? 'You can contact me through the following links or by scanning my QR Code' : 'Puedes contactarme a través de los siguientes enlaces o escaneando mi codigo QR.'}</p>

                <div className="lg:w-[100%] sm:px-10 md:flex items-center">
                    <div className='flex flex-col gap-3 md:w-[75%]'>
                        <div className='flex gap-3 flex-col sm:flex-row items-center'>
                            <a href="http://www.linkedin.com/in/luis1gonzalez" target="_blank" rel="noreferrer">
                                <img title="my Linkedin" className='h-[1.5rem]' src={logoLinkedin} alt="logo de linkedin" />
                            </a>
                            <p className='md:flex text-sm text-center'>https://www.linkedin.com/in/luis1gonzalez</p>
                        </div>
                        <div className='flex gap-3 flex-col sm:flex-row items-center'>
                            <a href="https://github.com/Luis1Gonzalez" target="_blank" rel="noreferrer">
                                <img title="my Github" className='h-[1.5rem]' src={logoGithub} alt="logo de github" />
                            </a>
                            <p className='md:flex text-sm text-center'>https://github.com/Luis1Gonzalez</p>
                        </div>
                        <div className='flex gap-3 flex-col sm:flex-row items-center'>
                            <a href="mailto:luis1gonzalez@hotmail.com">
                                <img title="Send Email" className='h-[1.5rem]' src={logoEmail} alt="logo de email" />
                            </a>
                            <p className='md:flex text-sm text-center'>luis1gonzalez@hotmail.com</p>
                        </div>
                    </div>

                    <div className="flex justify-center text-center mt-7 md:w-[25%]">
                        <div className='w-[100%] flex justify-center items-center h-[auto]'>
                            <img src={qr} alt="Enlaces" className='h-[80px]' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer