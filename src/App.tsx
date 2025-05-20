
import Intro from './Intro.tsx'
import Taskbar from './NavigationBar.tsx'
import ExperienceSection from './ExperienceSection.tsx'
import ProjectSection from './ProjectsSection.tsx'

function App() {

  return (
    <>
      <div className = "bg-black text-white text-center">
        <div>
          <Taskbar />
        </div>

        <div className = "min-h-screen">
          <Intro />
        </div>
        <div className = "py-12">
          <ExperienceSection />
        </div>

        <div className = "h-[20vh] text-black">
          this is for spacing
        </div>

        <div className = "py-12 ml-[6vw] mr-[6vw]">
          <ProjectSection />
        </div>


        <div className = "h-[20vh] text-black">
          this is for spacing
        </div>


      </div>
    </>
  )
}

export default App
