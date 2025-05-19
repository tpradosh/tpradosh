import ProjectCard from "./ProjectCard"
import Test from "./assets/test.png"


function ProjectSection() {

    const Map: Record<string, string> = {
        blue: 'text-blue', 
        green: 'text-green',
    };



    return(
        <>
            <div className = "text-green text-4xl font-bold pt-[15px]"> 
                💻 Projects
            </div>
            <div className = "flex flex-wrap justify-center">
                <ProjectCard 
                    img = {Test}
                    title = "Boundary Remote Sensing Systems"
                    time = "Jan. 2025 - Present"
                    descr = "Created Wifi Mappings leveraging RF RSSI Wifi data to map out a geospatial area"
                    url = "klgajds;f.com"
                />
                <ProjectCard 
                    img = {Test}
                    title = "Boundary Remote Sensing Systems"
                    time = "Jan. 2025 - Present"
                    descr = "Created Wifi Mappings leveraging RF RSSI Wifi data to map out a geospatial area"
                    url = "klgajds;f.com"
                /> 
            </div>
        </>

    )
} 
export default ProjectSection