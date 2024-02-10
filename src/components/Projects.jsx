import { details } from "../data/projectsDetails"
import logogithubOriginal from '../assets/general/logo-github-original.svg'
import web from '../assets/general/web.svg'
import useLanguage from "../hooks/useLanguage";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Projects = () => {

    const { lang } = useLanguage()
    const navigate = useNavigate()
    const [firstThree, setFirstThree] = useState([]) 
    

    useEffect(() => {    
    const captureFirstThreeElements = () => {
        const theFirst = details.slice(1, 4);
        setFirstThree(theFirst)
    }
    captureFirstThreeElements()
},[])

    return (
        <div id="projects" className="flex flex-col lg:flex-row gap-5 md:gap-0 md:p-5  py-5 justify-center border border-gray-700/50 w-[100%]">
            <p className="text-2xl md:text-3xl lg:w-[25%] md:mb-4 text-center">{lang === 'english' ? 'Latest Projects' : 'Ultimos Proyectos'}</p>

            <div className="flex flex-col w-[97%]">
                <div className="flex flex-wrap  gap-.5 flex-col sm:flex-row sm:justify-center items-center">
                    {firstThree.map(details => (
                        <div
                            key={details.id}
                            className="flex my-3 justify-center"
                        >
                            <div
                                className=" w-[95%] lg:w-[1/3] h-[245px] bg-gray-100/75 text-black p-3"
                            >
                                <p className="text-center mb-3 text-lg md:text-xl">{details.name}</p>
                                <div>
                                    <img className="h-[135px]" src={details.gif} alt={`imagen del proyecto ${details.name}`} />
                                </div>

                                <div className="flex justify-end gap-3 items-center">

                                    <div className="flex items-center">
                                        <a href={details.githubUrl} target="_blank" rel="noreferrer">
                                            <img className="h-[2rem]" src={logogithubOriginal} alt="logo de github" />
                                        </a>
                                    </div>

                                    <div className="flex items-center">
                                        <a href={details.url} target="_blank" rel="noreferrer">
                                            <img className="h-[2rem]" src={web} alt="logo de la web" />
                                        </a>
                                    </div>

                                    <button
                                        onClick={() => navigate(`/project/${details.name}`)}
                                        className="my-3 border border-none rounded-lg py-1 px-4 bg-green-600 hover:bg-green-400 text-white text-md font-semibold shadow-2xl">
                                        {lang === 'english' ? 'Detailss' : 'Detalle'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div>

                    </div>
                </div>

                <div className="mt-3 px-2">
                    <p className="text-end">{lang === 'english' ? 'See more, click' : 'Ver más, has click'}
                        <span className="text-green-600 font-semibold text-xl"> <Link to='/projects'>{lang === 'english' ? 'Here' : 'Aqui'}</Link>
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Projects