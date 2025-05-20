import ProjectCard from "./ProjectCard"
import Test from "./assets/test.png"
import ZOTNostic from './assets/ZOTNostic.png'

function ProjectSection() {




    return(
        <>
            <div className = "text-green text-4xl font-bold pt-[15px]"> 
                💻 Projects
            </div>
            <div className = "flex flex-wrap justify-center">
                <ProjectCard 
                    img = {Test}
                    title = "Portfolio Website"
                    time = "May. 2025"
                    descr = "My Website to display my current experience and projects"
                    url = "klgajds;f.com"
                    color = 'red'
                /> 
                <ProjectCard 
                    img = {Test}
                    title = "Bitcoin OHLC Visualizer"
                    time = "May. 2025"
                    descr = "A Visualizer of Bitcoin data in Open Low High Close Charts"
                    url = "klgajds;f.com"
                    color = "lime"

                />
                <ProjectCard 
                    img = {Test}
                    title = "Computer Vision Object Tracker"
                    time = "Feb. 2025"
                    descr = "Tracker of Object Movement within Videos"
                    url = "klgajds;f.com"
                    color = "yellow"
                /> 
                <ProjectCard 
                    img = {ZOTNostic}
                    title = "ZOTNostic"
                    time = "Nov. 2024"
                    descr = "An AI Chatbot that helps users with Medical Diagnosis"
                    url = "klgajds;f.com"
                    color = "blue"
                /> 

            </div>
        </>

    )
} 
export default ProjectSection