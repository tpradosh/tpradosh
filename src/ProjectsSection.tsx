import ProjectCard from "./ProjectCard"
import Test from "./assets/test.png"
import ZOTNostic from './assets/ZOTNostic.png'
import BTC from './assets/btc.png'
import CVOT from './assets/cvot.jpg'

function ProjectSection() {


    return(
        <>
            <div className = "text-green text-4xl font-bold pt-[15px]"> 
            🚀 Projects
            </div>
            <div className = "flex flex-wrap justify-center">
                <ProjectCard 
                    img = {BTC}
                    title = "Bitcoin OHLC Visualizer"
                    time = "May. 2025"
                    descr = "A Visualizer of Bitcoin data in Open Low High Close Charts"
                    url = "https://github.com/tpradosh/btc"
                    color = "lime"

                />
                <ProjectCard 
                    img = {CVOT}
                    title = "Computer Vision Object Tracker"
                    time = "Feb. 2025"
                    descr = "Tracker of Object Movement within Videos"
                    url = "https://github.com/tpradosh/obj-finder"
                    color = "yellow"
                /> 
                <ProjectCard 
                    img = {ZOTNostic}
                    title = "ZOTNostic"
                    time = "Nov. 2024"
                    descr = "An AI Chatbot that helps users with Medical Diagnosis"
                    url = "https://github.com/setripper/ZotNostic"
                    color = "blue"
                /> 
                <ProjectCard 
                    img = {Test}
                    title = "Portfolio Website"
                    time = "Oct. 2024"
                    descr = "My Website to display my current experience and projects"
                    url = "https://github.com/tpradosh/tpradosh.github.io"
                    color = 'red'
                /> 
            </div>
        </>

    )
} 
export default ProjectSection