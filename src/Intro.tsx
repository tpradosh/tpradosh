import { Typewriter } from 'react-simple-typewriter';
import Intro_txt from './Intro_txt';
import bird from './assets/bird.webp'

function Intro(){

    return (
        <>
            <div className = "h-{15px} bg-green text-green">. </div>
            <div className = "bg-black">
                
                <div className = "max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className = "text-xl font-bold"></div>
                    <nav className = "space-x-4 font-bold">
                        <a href = "#home" className = "hover:underline">Home</a>
                        <a href = "#expierence" className = "hover:underline">Expierence</a>
                        <a href = "#projects" className = "hover:underline">Projects</a>
                        <a href = "#contact" className = "hover:underline">Contact</a>
                    </nav>
                </div>

                <div className = 'flex items-center justify-center m-0 p-0'>
                    <img src= {bird} alt="Profile" className="rounded-full w-32 h-32 object-cover" />
                </div>

                <div className = 'flex items-center justify-center'>
                    <Intro_txt />
                </div>
            </div>
        </>
    )
}


export default Intro;