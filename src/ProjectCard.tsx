interface ProjectCard{
    img: string;
    title: string;
    time: string;
    descr: string;
    url: string;
    color: string;
}


function ProjectCard({ img, title, time, descr, color, url}: ProjectCard) {
    const Map: Record<string, string> = {
      blue: 'text-blue', 
      lgreen: 'text-dgreen',
      yellow : 'text-yellow',
      lime : 'text-lime',
      indigo : 'text-indigo',
      red : 'text-red'
  };


    return (
          <div className="hover-large w-full sm:w-1/2 md:w-1/3 p-4">
            <a href = {url}>

            <div className="border border-white rounded-md bg-black flex flex-col h-full">
              <img src={img} className="w-full h-48 object-cover rounded-t-md" />
      
              <div className="p-4 flex flex-col">
                <div>
                  <h3 className={`text-xl font-bold ${Map[color]}`}>{title}</h3>
                  <p className="text-white mt-2 text-timberwolf">{descr}</p>
                </div>
                <p className="text-sm text-timberwolf italic mt-4">{time}</p>
              </div>
            </div>
            </a>
          </div>
    );
  }
  

export default ProjectCard