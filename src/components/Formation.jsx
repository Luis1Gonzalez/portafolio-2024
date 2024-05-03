import { useState } from "react"
import useLanguage from "../hooks/useLanguage"
import neoland from '../assets/general/neoland.jpg'
import udemy from '../assets/general/udemy.png'
import ugma from '../assets/general/ugma.png'
import salle from '../assets/general/salle.png'

const Formation = () => {

    const { lang } = useLanguage()

    const [showHidden, setShowHidden] = useState('hidden')
    const [read, setRead] = useState('more')
    const [leer, setLeer] = useState('mas')

    const handleShowHidden = () => {
        if (showHidden === 'hidden') {
            setShowHidden('flex')
            setRead('less')
            setLeer('menos')
        } else {
            setShowHidden('hidden')
            setRead('more')
            setLeer('mas')
        }
    }

    return (
        <div id="formation" className="flex flex-col gap-5 md:gap-0 py-5 justify-center items-center border border-gray-700/50">
            <p className="text-2xl md:text-3xl md:w-[25%] md:mb-4 text-center">{lang === 'english' ? 'Education' : 'Educación'}</p>

            <div className="flex flex-col md:w-[97%]">
                <div className=" w-[100%] md:w-[100%] flex flex-col gap-3 justify-center items-center">

                    <p className="text-xl font-semibold mb-2">{lang === 'english' ? 'University' : 'Universitaria'}</p>

                    <div className="w-[100%] max-w-[300px] flex flex-col items-center justify-center  text-white rounded-xl h-auto gap-3">
                    <div className="p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex flex-col gap-3 border-box h-[70px] overflow-hidden hover:overflow-visible hover:h-auto">
                            <p className="text-lg font-semibold text-center text-gray-300">{lang === 'english' ? 'Ingeniero de Mantenimiento Industrial' : 'Ingeniero de Mantenimiento Industrial'}</p>
                            <p className="text-lg font-medium text-gray-300 text-center">Universidad Nororiental Gran Mariscal de Ayacucho</p>
                            <div className="w-[100%] flex justify-center">
                            <img
                                src={ugma}
                                className="w-[60px] h-[60px]" />
                                </div>
                            <p className="text-center">2006-2009</p>
                        </div>

                        <div className="p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex flex-col gap-3 border-box h-[70px] overflow-hidden hover:overflow-visible hover:h-auto">
                            <p className="text-lg font-semibold text-center text-gray-300">{lang === 'english' ? 'TSU en Prevención de Riesgos Laborales' : 'TSU en Prevención de Riesgos Laborales'}</p>
                            <p className="text-lg font-medium text-gray-300 text-center">IUTEMAR - Fundación la Salle</p>
                            <div className="w-[100%] flex justify-center">
                            <img
                                src={salle}
                                className="w-[60px] h-[60px]" />
                                </div>
                            <p className="text-center">2001-2004</p>
                        </div>

                    </div>

                    <p className="text-xl font-semibold mt-2">{lang === 'english' ? 'Courses/Certifications' : 'Cursos/Certificaciones'}</p>

                    <div className="w-[100%] flex flex-col xl:flex-row items-center justify-center lg:justify-around text-white h-auto gap-1 xl:items-start">

                        <div className="p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex flex-col gap-3 border-box h-[50px] overflow-hidden hover:overflow-visible hover:h-auto">
                            <p className="text-lg font-semibold text-center text-gray-300">Full Stack Bootcamp </p>
                            <div className="flex justify-around items-center">
                                <div>
                                    <p className="text-lg font-medium text-gray-300">NEOLAND</p>
                                    <p>480 horas</p>
                                    <p>2022</p>
                                </div>
                                <img
                                src={neoland}
                                className="w-[60px] h-[60px]" />
                            </div>
                        </div>


                        <div className={`p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex-col gap-3 border-box h-[50px] overflow-hidden hover:overflow-visible hover:h-auto ${showHidden}`}>
                            <p className="text-lg font-semibold text-center text-gray-300">React - La Guía Completa</p>
                            <p className="text-lg font-medium italic text-center text-gray-300">Hooks, Context, Redux, MERN +15 Apps</p>
                            <div className="flex justify-around items-center">
                                <div>
                            <p className="text-lg font-medium text-gray-300">UDEMY</p>
                            <p>66.5 horas</p>
                            <p>2024</p>
                            </div>
                            <img
                                src={udemy}
                                className="w-[60px] h-[60px]" />
                            </div>
                        </div>

                        <div className={`p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex-col gap-3 border-box h-[50px] overflow-hidden hover:overflow-visible hover:h-auto ${showHidden}`}>
                            <p className="text-md md:text-lg font-semibold text-center text-gray-300">Curso Completo de Wordpress</p>
                            <p className="text-lg font-medium italic text-center text-gray-300">Wordpress, Divi y Woocommerce</p>
                            <div className="flex justify-around items-center">
                                <div>
                            <p className="text-lg font-medium text-gray-300">UDEMY</p>
                            <p>40.5 horas</p>
                            <p>2024</p>
                            </div>
                            <img
                                src={udemy}
                                className="w-[60px] h-[60px]" />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="mt-3 w-[100%] px-2">
                    <p className="text-end">{lang === 'english' ? `See ${read}, click` : `Ver ${leer}, has click`}
                        <span
                            onClick={() => handleShowHidden()}
                            className="text-green-600 font-semibold text-xl cursor-pointer pl-2">{lang === 'english' ? 'Here' : 'Aqui'} </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Formation