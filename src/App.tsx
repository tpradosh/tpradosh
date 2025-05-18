
import Intro from './Intro.tsx'
import Taskbar from './NavigationBar.tsx'
function App() {

  return (
    <>
      <div className = "min-h-screen bg-black text-white text-center">
        <div>
          <Taskbar />
        </div>

        <div>
          <Intro />
        </div>
        
      </div>
    </>
  )
}

export default App
