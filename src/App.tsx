
import Intro from './Intro.tsx'
import Taskbar from './NavigationBar.tsx'
import ExperienceSection from './ExperienceSection.tsx'
import ProjectSection from './ProjectsSection.tsx'
import Contact from './Contact.tsx'

function App() {

  return (
    <>
      <div className = "bg-black text-white text-center">
        <div>
          <Taskbar />
        </div>

        <section id = "Home">
          <div className = "min-h-screen">
            <Intro />
          </div>
        </section>

        <div className = "fade-down">
          <section id = "Experience">

            <div className = "py-12">
              <ExperienceSection />
            </div>
          </section>

          <div className = "h-[20vh] text-black">
            this is for spacing
          </div>

          <section id = "Projects">
            <div className = "py-12 ml-[6vw] mr-[6vw]">
              <ProjectSection />
            </div>
          </section>


          <div className = "h-[20vh] text-black">
            this is for spacing
          </div>

          <section id = "Contact">
            <div className = "h-[20vh]">
              <Contact />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
