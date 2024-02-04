import AboutMe from "../components/AboutMe"
import Formation from "../components/Formation"
import Header from "../components/Header"
import Projects from "../components/Projects"
import Skills from "../components/Skills"



const Core = () => {
    return (
        <div className='flex flex-col w-[100%] h-[100%] p-5 bg-gray-900/50 gap-y-5 md:gap-14'>
            <Header />
            <AboutMe />
            <Projects />
            <Formation />
            <Skills />
        </div>
    )
}

export default Core