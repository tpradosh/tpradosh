import { useEffect, useState } from 'react';



function NavigationBar(){


    /*
        Nav bar with top, expier, projs, contacts etc

        appears when not at the top of the page
    */
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const currentY = window.scrollY;
        setShow(currentY > 400); // show only when not at top
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); 


    return (
        <div className = {`fixed top-0 w-full z-50 transition-transform duration 300' ${
            show ? 'translate-y-0' : '-translate-y-full'} bg-green text-black shadow-md`}>
            
            
            <div className = "px-4 py-3 flex items-center justify-between">
                <div className = "text-xl font-bold">Pradosh T</div>
                <nav className = "space-x-4 font-bold">
                    <a href = "#Home" className = "hover-box_black">Home</a>
                    <a href = "#Experience" className = "hover-box_black">Experience</a>
                    <a href = "#Projects" className = "hover-box_black">Projects</a>
                    <a href = "#Contact" className = "hover-box_black">Contact</a>

                </nav>
            </div>
        </div>
    );
}

export default NavigationBar