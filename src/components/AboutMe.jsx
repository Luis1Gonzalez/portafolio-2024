
import useLanguage from "../hooks/useLanguage"

const AboutMe = () => {

    const { lang } = useLanguage()

  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-0 p-5 justify-center items-center border border-gray-700/50">
        <p className="text-2xl md:text-3xl md:w-[25%] md:mb-4 text-center">{lang === 'english' ? 'About Me' : 'Sobre Mi'}</p>
        <p className="flex text-lg md:w-[75%] text-justify justify-center">{lang === 'english' ? (
            'I am Industrial Maintenance Engineer with more than 14 years of work experience in the area of Occupational Risk Prevention and in the execution of projects of various kinds. I consider myself passionate about technology in general, but especially for the IT world.'
        ) : (
            'Soy Ingeniero en Mantenimiento Industrial con más de 14 años de experiencia laboral en el área de Prevención de Riesgos Laborales y en ejecución de proyectos de diversa índole. Me considero un apasionado de la tecnología en general, pero sobre todo por el mundo IT.'
        )}</p>
    </div>
  )
}

export default AboutMe