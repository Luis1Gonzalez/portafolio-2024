import NavMain from "../components/NavMain"
import useLanguage from "../hooks/useLanguage"
import { detailsProjects } from "../data/projectsData"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const ProjectsDetails = () => {
    const { lang } = useLanguage()
    const navigate = useNavigate()
    const [filterProjects, setFilterProjects] = useState([])
    const [filterPractices, setFilterPractices] = useState([])

useEffect(() => {
    const filterProjectsx = detailsProjects.filter(filter => filter.type === 'project');
    setFilterProjects(filterProjectsx)

    const filterPracticesx = detailsProjects.filter(filter => filter.type === 'practice');
    setFilterPractices(filterPracticesx)

},[])

    return (
        <div className="flex flex-col min-h-screen items-center w-[100%]">
            <div className="w-[95%]">
                <NavMain />
            </div>
            <div className='flex flex-col max-w-[1100px] min-w-[320px] w-[95%] h-[100%] p-5 bg-gray-900/50 gap-y-5 md:gap-14'>

                <div className="flex flex-col gap-10 md:gap-0 p-5 justify-center items-center border border-gray-700/50">

                    <div className="flex flex-col items-center gap-3 box-border w-[250px] sm:w-[300px] p-3 lg:flex-row lg:justify-center lg:w-[100%] flex-wrap h-auto">
                    <p className="text-2xl md:text-3xl md:w-[25%] mb-3 md:mb-4 text-center">{lang === 'english' ? 'Projects' : 'Proyectos'}</p>
                        {filterProjects.map(details => (
                            <div
                                className="borderx flex flex-col items-center justify-center rounded-xl shadow-md shadow-slate-50/50 h-[180px] gap-2 p-1 sm:p-4  w-[100%] lg:w-[30%] hover:bg-sky-500/10"
                                key={details.id}
                                onClick={() => navigate(`/project/${details.name}`)}
                            >
                                {/* bg-sky-500/10 */}
                                <p className="text-xl text-center h-[20%]">{details.name}</p>
                                <img className="w-[70%] h-[70%]"
                                    src={details.image}
                                    alt={`logo del proyecto ${details.name}`} />
                            </div>

                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-3 box-border w-[250px] sm:w-[300px] p-3 lg:flex-row lg:justify-center lg:w-[100%] flex-wrap h-auto">
                    <p className="text-2xl md:text-3xl md:w-[25%] mb-3 md:mb-4 text-center">{lang === 'english' ? 'Practices' : 'Practicas'}</p>
                        {filterPractices.map(details => (
                            <div
                                className="borderx flex flex-col items-center justify-center rounded-xl shadow-md shadow-slate-50/50 h-[180px] gap-2 p-1 sm:p-4  w-[100%] lg:w-[30%] hover:bg-sky-500/10"
                                key={details.id}
                                onClick={() => navigate(`/project/${details.name}`)}
                            >
                                {/* bg-sky-500/10 */}
                                <p className="text-xl text-center h-[20%]">{details.name}</p>
                                <img className="w-[70%] h-[70%]"
                                    src={details.image}
                                    alt={`logo del proyecto ${details.name}`} />
                            </div>

                        ))}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ProjectsDetails