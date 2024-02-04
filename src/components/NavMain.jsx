import { Link } from 'react-router-dom'
import translate from '../assets/general/translate.svg'
import useLanguage from "../hooks/useLanguage"

const NavMain = () => {
    const { lang, setLang, translation } = useLanguage()
  return (
    <div>
                    <nav className='bg-gray-800 flex justify-evenly mt-2 py-3 font-semibold text-md md:text-xl'>
                <div className=''><Link to='/'>{lang === 'english' ? 'Home' : 'Inicio'}</Link></div>
                <div><Link to='/projects'>{lang === 'english' ? 'Projects' : 'Proyectos'}</Link></div>
                <div><Link to='/'>{lang === 'english' ? 'Formation' : 'Formación'}</Link></div>
                <div
                onClick={() => translation(setLang)}
                className='bg-sky-300 p-1 rounded-md shadow-xl cursor-pointer hover:bg-sky-500'>
                    <img className='h-[1rem] md:h-[1.2rem]' src={translate} alt="licono de traducción" />
                </div>
            </nav>
    </div>
  )
}

export default NavMain