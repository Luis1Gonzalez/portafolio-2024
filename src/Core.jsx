import Index from '../src/pages/Index.jsx'
import Footer from './components/Footer.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'
import ProjectsList from './pages/ProjectsList.jsx'
import Lobby from './pages/Lobby.jsx'
import { Routes, Route, BrowserRouter, } from 'react-router-dom'
import './styles/portafolio.css'
import QrCode from './pages/QrCode.jsx'


const Core = () => {
    return (
        <div className='flex flex-col max-w-[1100px] min-w-[320px] w-[90%] h-[100%] p-5 bg-gray-900/50 gap-y-5 md:gap-14'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />}></Route>
                    <Route path='/projects' element={<ProjectsList />}></Route>
                    <Route path='/project/:name/' element={<ProjectDetails/>}></Route>
                    <Route path='/lobby/' element={<Lobby/>}></Route>
                    <Route path='/qr' element={<QrCode />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Core
