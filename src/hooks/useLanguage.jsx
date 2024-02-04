import { useContext } from 'react'
import LanguageContext from '../context/LanguageProvider'

export default function useLanguage() {
  return useContext(LanguageContext)
}
