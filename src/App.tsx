
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
        <div className = "h-[80vh]">
          <ExperienceSection />
        </div>
        <div className = "h-[100vh]">
          <ProjectSection />
        </div>
      </div>
    </>
  )
}

export default App
