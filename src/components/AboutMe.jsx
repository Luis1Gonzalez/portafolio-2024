
import useLanguage from "../hooks/useLanguage"

const AboutMe = () => {

  const { lang } = useLanguage()

  return (
    <div className="flex flex-col lg:flex-row gap-5 md:gap-0 p-5 justify-center items-center border border-gray-700/50">
      <p className="text-2xl md:text-3xl md:w-[25%] md:mb-4 text-center">{lang === 'english' ? 'About Me' : 'Sobre Mi'}</p>

      <div className="flex flex-col md:w-[75%] gap-4">
        <p className="flex text-lg  sm:text-justify justify-center">{lang === 'english' ? (
          'I am an industrial maintenance engineer with extensive experience in the workplace, specializing in occupational risk prevention and project execution of various kinds. Passionate about technology, especially the IT world, I am self-taught, adaptable, and resourceful. I am accustomed to working both as part of a team and independently, and I firmly believe in continuous improvement as a driver of personal, professional and organiuzational growth.'
        ) : (
          'Soy un ingeniero en mantenimiento industrial con una amplia experiencia en el ámbito laboral, especializado en prevención de riesgos laborales y ejecución de proyectos de diversas índoles. Apasionado por la tecnología, especialmente el mundo IT, soy autodidacta, adaptable y resolutivo. Estoy acostumbrado a trabajar tanto en equipo como de manera independiente, y creo firmemente en la mejora continua como motor de crecimiento personal, profesional y organizacional.'
        )}</p>

        <div className="flex text-lg md:w-[75%] text-justify justify-center">{lang === 'english' ? (
          <ul>
          <p className="font-bold mb-1">Currently I am:</p>
          <li>Learning TypeScript</li>
          <li>Improving my english level</li>
          <li>Reading the book: Métodos Ágiles, Scrum, Kanban, Lean <span className="italic text-green-600">de Carmen Lasa Gómez, Alfonso Álvarez García y Rafael de las Heras del Dedo. Editorial ANAYA</span></li>
        </ul>
        ) : (
          <ul>
            <p className="font-bold mb-1">Actualmente estoy:</p>
            <li>Aprendiendo TypeScript</li>
            <li>Mejorando mi nivel de inglés</li>
            <li>Leyendo el Libro: Métodos Ágiles Scrum, Kanban, Lean <span className="italic text-green-600">de Carmen Lasa Gómez, Alfonso Álvarez García y Rafael de las Heras del Dedo. Editorial ANAYA</span></li>
          </ul>
        )}</div>

      </div>
    </div>
  )
}

export default AboutMe