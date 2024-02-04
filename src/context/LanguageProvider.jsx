import { createContext, useState } from "react";

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {

  const [lang, setLang] = useState('spanish')
  // const [meTranslation, setMeTranslation] = useState(lang)

const translation = () => {
  if(lang === 'spanish') {
    setLang('english')
  }else {
    setLang('spanish')
  }
}

  return (
    <LanguageContext.Provider
      value={{
        setLang, lang,
        translation,
      }}>
      {children}
    </LanguageContext.Provider>
  )
}
export {
  LanguageProvider
}
export default LanguageContext