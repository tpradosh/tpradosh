import Experience from "./ExperienceProp"
import BRSS from "./assets/BRSS.jpeg"


function ExperienceSection(){


    return (
        <>
            <div className = "bg-black">

                <div className = "text-green text-4xl font-bold pt-[15px]"> 
                    💻 Experience 
                </div>

                <div className = "ml-[10vw] mr-[10vw]">
                    <Experience 
                        img = {BRSS}
                        company = "Boundary Remote Sensing Systems"
                        role = "Software Developer"
                        time = "Jan. 2025 - Present"
                        descr = "Created Wifi Mappings leveraging RF RSSI Wifi data to map out a geospatial area"
                        url = "https://www.linkedin.com/company/boundary-remote-sensing-systems/"
                        color = "blue"
                    />
                    {/* <Experience 
                        img = {Test}
                        company = "Boundary Remote Sensing Systems"
                        role = "Software Developer"
                        time = "Jan. 2025 - Present"
                        descr = "Created Wifi Mappings leveraging RF RSSI Wifi data to map out a geospatial area"
                        url = "klgajds;f.com"
                        color = "green"
                    /> */}
                </div>

            </div>
        
        
        </>
    )
}
export default ExperienceSection