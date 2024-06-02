import { skillsArrayFrontend } from '../data/skillsHome.js'
import { skillsArrayBackend } from '../data/skillsHome.js'
import { libreriesTollsFrontend } from '../data/skillsHome.js'
import { libreriesTollsBackend } from '../data/skillsHome.js'
import { othersSkills } from '../data/skillsHome.js'
import { cmsTolls } from '../data/skillsHome.js'
import useLanguage from '../hooks/useLanguage.jsx'

const Skills = () => {

    const { lang } = useLanguage()

    return (
        <div>
            <div id="skills" className="flex flex-col gap-5 py-5 justify-center border border-gray-700/50 w-[100%]">
                <p className="text-2xl md:text-3xl md:mb-4 text-center">{lang === 'english' ? 'Skills & Tolls' : 'Habilidades y Herramientas'}</p>

                <div className='flex flex-col items-start justify-around gap-3'>

                    <div className='flex flex-col box-border md:flex-row gap-3 md:gap-0 justify-start items-center w-[100%]'>
                        <p className='text-center lg:text-2xl mb-2 md:w-[25%] xl:w-[35%]'>Frontend</p>
                        <div className='flex gap-2 flex-wrap md:gap-3 w-auto justify-center items-center'>
                            {skillsArrayFrontend.map(skill => (
                                <div
                                    key={skill.id}
                                    className={`flex border-box p-1 md:p-2 gap-1 items-center border rounded-xl min-w-fit`}
                                >
                                    <img className='h-[.7rem] md:h-[1.7rem]' src={skill.logo} alt={`logo de ${skill.name}`} />
                                    <p className='text-sm'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col box-border md:flex-row gap-3 md:gap-0 justify-start items-center w-[100%]'>
                        <p className='text-center lg:text-2xl mb-2 md:w-[25%] xl:w-[35%]'>{lang === 'english' ? 'Libreries / Tolls' : 'Librerias / Herramientas'}</p>
                        <div className='flex gap-2 flex-wrap md:gap-3 w-auto justify-center items-center'>
                            {libreriesTollsFrontend.map(skill => (
                                <div
                                    key={skill.id}
                                    className={`flex border-box p-1 md:p-2 gap-1 items-center border rounded-xl min-w-fit`}
                                >
                                    <img className='h-[.7rem] md:h-[1.7rem]' src={skill.logo} alt={`logo de ${skill.name}`} />
                                    <p className='text-sm'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col box-border md:flex-row gap-3 md:gap-0 justify-start items-center w-[100%]'>
                        <p className='text-center lg:text-2xl mb-2 md:w-[25%] xl:w-[35%]'>Backend</p>
                        <div className='flex gap-2 flex-wrap md:gap-3 w-auto justify-center items-center'>
                            {skillsArrayBackend.map(skill => (
                                <div
                                    key={skill.id}
                                    className={`flex border-box p-1 md:p-2 gap-1 items-center border rounded-xl min-w-fit opacity-50`}
                                >
                                    <img className='h-[.7rem] md:h-[1.7rem]' src={skill.logo} alt={`logo de ${skill.name}`} />
                                    <p className='text-sm'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col box-border md:flex-row gap-3 md:gap-0 justify-start items-center w-[100%]'>
                        <p className='text-center lg:text-2xl mb-2 md:w-[25%] xl:w-[35%]'>{lang === 'english' ? 'Libreries / Tolls' : 'Librerias / Herramientas'}</p>
                        <div className='flex gap-2 flex-wrap md:gap-3 w-auto justify-center items-center'>
                            {libreriesTollsBackend.map(skill => (
                                <div
                                    key={skill.id}
                                    className={`flex border-box p-1 md:p-2 gap-1 items-center border rounded-xl min-w-fit`}
                                >
                                    <img className='h-[.7rem] md:h-[1.7rem]' src={skill.logo} alt={`logo de ${skill.name}`} />
                                    <p className='text-sm'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col box-border md:flex-row gap-3 md:gap-0 justify-start items-center w-[100%]'>
                        <p className='text-center lg:text-2xl mb-2 md:w-[25%] xl:w-[35%]'>{lang === 'english' ? 'Others' : 'Otros'}</p>
                        <div className='flex gap-2 flex-wrap md:gap-3 w-auto justify-center items-center'>
                            {othersSkills.map(skill => (
                                <div
                                    key={skill.id}
                                    className={`flex border-box p-1 md:p-2 gap-1 items-center border rounded-xl min-w-fit`}
                                >
                                    <img className='h-[.7rem] md:h-[1.7rem]' src={skill.logo} alt={`logo de ${skill.name}`} />
                                    <p className='text-sm'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col box-border md:flex-row gap-3 md:gap-0 justify-start items-center w-[100%]'>
                        <p className='text-center lg:text-2xl mb-2 md:w-[25%] xl:w-[35%]'>{lang === 'english' ? 'CMS / Tolls' : 'CMS / Herramientas'}</p>
                        <div className='flex gap-2 flex-wrap md:gap-3 w-auto justify-center items-center'>
                            {cmsTolls.map(skill => (
                                <div
                                    key={skill.id}
                                    className={`flex border-box p-1 md:p-2 gap-1 items-center border rounded-xl min-w-fit`}
                                >
                                    <img className='h-[.7rem] md:h-[1.7rem]' src={skill.logo} alt={`logo de ${skill.name}`} />
                                    <p className='text-sm'>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills