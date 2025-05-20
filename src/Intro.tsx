import Intro_txt from './Intro_txt';
import test from './assets/test.png'

function Intro(){

    return (
        <>
            <div className = "h-{15px} bg-green text-green">. </div>

            <div className = "bg-black m-[15px]">
                <div className = 'fade-down'>
                    <div className = "px-4 py-3 flex items-center justify-between">
                        <nav className = "space-x-4 font-bold text-xl">
                            <a href = "#home" className = "hover-box_green">Home</a>
                            <a href = "#expierence" className = "hover-box_green">Experience</a>
                            <a href = "#projects" className = "hover-box_green">Projects</a>
                            <a href = "#contact" className = "hover-box_green">Contact</a>
                        </nav>
                    </div>
                </div>


                <div className = 'fade-up'>
                    <div className = 'flex items-center justify-center h-[50vh]'>
                        <img src= {test} alt="Profile" className="rounded-full w-[40vh] h-[40vh] object-cover" />
                    </div>
                </div>

                <div className = "fade-down">
                   <div className = 'flex items-center justify-center h-[30vh]'>
                        <Intro_txt />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Intro;