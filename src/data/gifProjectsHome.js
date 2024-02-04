import kioskoApp from '../assets/gif-projects/kiosko-app.gif'
import projectsManager from '../assets/gif-projects/projects-manager.gif'
import sysControl from '../assets/gif-projects/sys-control.gif'

const gifProjects = [
    { id: 1, name: 'Projects - Manager', gif: projectsManager, githubUrl: 'https://github.com/Luis1Gonzalez/projects_admin_frontend', url: 'https://projects-admin.vercel.app/' },
    { id: 2, name: 'KioskoApp', gif: kioskoApp, githubUrl: 'https://github.com/Luis1Gonzalez/kioskoapp_deployment.git', url: 'https://kioskoappdeployment-production.up.railway.app/' },    
    { id: 3, name: 'LG - SysControl', gif: sysControl, githubUrl: 'https://github.com/Luis1Gonzalez/lg-sysControl', url: 'https://lg-syscontrol-production.up.railway.app/' },
]
export { gifProjects }