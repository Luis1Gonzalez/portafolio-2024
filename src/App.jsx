import { LanguageProvider } from "./context/LanguageProvider"
import Core from "./Core.jsx"



function App() {
 
  return (
    <>
    <LanguageProvider>
      <div className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-sky-600 to-gray-900 flex justify-center w-screen h-auto text-white px-5">
        <Core />
      </div>
      </LanguageProvider>
    </>
  )
}

export default App
