import { Link, useParams } from "react-router-dom"
import NavMain from "../components/NavMain"
import useLanguage from "../hooks/useLanguage"
import { details } from "../data/projectsDetails"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import click from '../assets/general/click.svg'

const ProjectDetails = () => {

    const { lang } = useLanguage()
    const { name } = useParams()
    const [selectedProject, setSelectedProject] = useState([])


    useEffect(() => {
        const getDetails = () => {
            const filterDetails = details.filter(detail => detail.name === name);
            setSelectedProject(filterDetails[0])
        }
        getDetails()
    }, [])
    console.log(details)
    return (
        <div className="flex flex-col w-[100%] min-h-screen items-center">
            <div className="w-[95%]">
                <NavMain />
            </div>

            <div className='flex flex-col max-w-[1100px] min-w-[320px] w-[95%] h-[100%] p-5 bg-gray-900/50 gap-y-5 md:gap-14'>

                <div className="flex flex-col md:gap-0 mt-4 justify-center items-center">
                    <p className="text-2xl md:text-3xl md:w-[25%] text-center">{lang === 'english' ? 'Projects' : 'Proyectos'}</p>
                </div>
                {selectedProject ?

                    (
                        <div className="flex flex-col gap-10 md:gap-0 p-5 justify-center items-center border border-gray-700/50">

                            <div className="p-5 justify-center items-center w-[100%] md:mb-8">
                                <h1 className="text-2xl md:text-3xl  w-[100%] text-center">{selectedProject.name}</h1>
                            </div>



                            <div className='flex flex-col items-center text-stone-200 text-justify lg:flex-row flex-wrap justify-evenly'>
                                <p className='mb-5  lg:w-[45%]'>{lang === 'spanish' ? selectedProject.spanish1 : selectedProject.english1}</p>



                                <div className='mb-5  lg:w-[45%]'>
                                    <img src={selectedProject.image1} alt={`imagen 1 del proyecto ${selectedProject.name}`} />
                                </div>

                                <p className='mb-5  lg:w-[45%]'>{lang === 'spanish' ? selectedProject.spanish2 : selectedProject.english2}</p>

                                <div className='mb-5  lg:w-[45%]'>
                                    <img src={selectedProject.image2} alt={`imagen 2 del proyecto ${selectedProject.name}`} />
                                </div>

                                <div className='mb-2 p-2 flex flex-col items-center lg:items-end lg:w-[45%] gap-3'>
                                    <img className='' src={selectedProject.image3} alt={`imagen 3 del proyecto ${selectedProject.name}`} />
                                    <div className="flex gap-2">
                                        <a target={'_blank'} rel="noreferrer" className='pointer block text-end italic text-yellow-500 capitalize' href={selectedProject.lighthouse}>{lang === 'spanish' ? 'Medición según LightHouse' : 'Measurement according to LightHouse'}</a>
                                        <img className="h-7" src={click} alt="icono de un click" />
                                    </div>
                                </div>

                                <div className='flex flex-col justify-end w-100'>

                                    <div className="flex gap-2 justify-center">
                                        {selectedProject?.tecnologies?.map((tech, index) => (
                                            <div
                                                className="w-6 mb-5"
                                                key={index}>
                                                <img src={tech} />
                                            </div>

                                        ))}
                                    </div>

                                    <div className="flex gap-2">
                                        <a target={'_blank'} rel="noreferrer" className='pointer text-end italic text-yellow-500 capitalize' href={selectedProject.web}>{selectedProject.name}</a>
                                        <img className="h-7" src={click} alt="icono de un click" />
                                    </div>

                                    <div className="flex gap-2">
                                        <a target={'_blank'} rel="noreferrer" className='pointer text-end italic text-yellow-500 capitalize' href={selectedProject.github}>GitHub</a>
                                        <img className="h-7" src={click} alt="icono de un click" />
                                    </div>

                                </div>

                            </div>

                        </div>
                    ) : (
                        <div><Loading /></div>
                    )}

                <p className='font-bold text-emerald-300 text-end pr-6'><span className='hover:text-yellow-500 hover:cursor-pointer'><Link to='/projects'>{lang === 'english' ? 'Back' : 'Volver'}</Link></span></p>
            </div>

        </div>
    )
}

export default ProjectDetails