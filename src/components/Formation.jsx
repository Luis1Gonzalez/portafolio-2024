import { useState } from "react"
import useLanguage from "../hooks/useLanguage"

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
            <p className="text-2xl md:text-3xl md:w-[25%] md:mb-4 text-center">{lang === 'english' ? 'Formation' : 'Formación'}</p>

            <div className="flex flex-col md:w-[80%]">
                <div className=" w-[100%] md:w-[100%] flex flex-col gap-3 justify-center items-center">

                    <p className="text-xl font-semibold mb-2">{lang === 'english' ? 'University' : 'Universitaria'}</p>

                    <div className="w-[100%] max-w-[300px] flex flex-col items-center justify-center bg-sky-500/15 text-white rounded-xl h-auto">
                        <div className="p-2 px-4 mt-3 text-gray-400 sm:p-3 sm:w-[80%] sm:mb-4 flex flex-col gap-3 border-box h-[70px] overflow-hidden hover:overflow-visible hover:h-auto">
                            <p className="text-lg font-semibold text-center text-gray-300">{lang === 'english' ? 'Industrial Maintenance Engineer' : 'Ingeniero de Mantenimiento Industrial'}</p>
                            <p className="text-lg font-medium text-gray-300">Universidad Nororiental Gran Mariscal de Ayacucho</p>
                            <p className="">2006-2009</p>
                        </div>
                    </div>

                    <p className="text-xl font-semibold mt-2">{lang === 'english' ? 'Courses/Certifications' : 'Cursos/Certificaciones'}</p>

                    <div className="w-[100%] flex flex-col xl:flex-row items-center justify-center lg:justify-around text-white h-auto gap-1 ">

                        <div className="p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex flex-col gap-3 border-box h-[50px] overflow-hidden hover:overflow-visible hover:h-auto">
                            <p className="text-lg font-semibold text-center text-gray-300">Full Stack Bootcamp </p>
                            <p className="text-lg font-medium text-gray-300">NEOLAND</p>
                            <p>480 horas</p>
                            <p>2022</p>
                        </div>


                        <div className={`p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex-col gap-3 border-box h-[50px] overflow-hidden hover:overflow-visible hover:h-auto ${showHidden}`}>
                            <p className="text-lg font-semibold text-center text-gray-300">React - La Guía Completa</p>
                            <p className="text-lg font-medium italic text-center text-gray-300">Hooks, Context, Redux, MERN +15 Apps</p>
                            <p className="text-lg font-medium text-gray-300">UDEMY</p>
                            <p>66.5 horas</p>
                            <p>2024</p>
                        </div>

                        <div className={`p-2 px-4 mt-3 text-gray-400 bg-sky-500/15 rounded-xl sm:p-3 w-[100%] max-w-[300px] sm:mb-4 flex-col gap-3 border-box h-[50px] overflow-hidden hover:overflow-visible hover:h-auto ${showHidden}`}>
                            <p className="text-lg font-semibold text-center text-gray-300">Master en CSS</p>
                            <p className="text-lg font-medium italic text-center text-gray-300">Responsive, Sass, Flexbox, Grid y Bootstrap</p>
                            <p className="text-lg font-medium text-gray-300">UDEMY</p>
                            <p>20.5 horas</p>
                            <p>2022</p>
                        </div>

                    </div>
                </div>

                <div className="mt-3 w-[100%] px-2">
                    <p className="text-end">{lang === 'english' ? `See ${read}, click` : `Ver ${leer}, has click`}
                        <span
                            onClick={() => handleShowHidden() }
                            className="text-green-600 font-semibold text-xl cursor-pointer pl-2">{lang === 'english' ? 'Here' : 'Aqui'} </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Formation