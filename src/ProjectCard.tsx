interface ProjectCard{
    img: string;
    title: string;
    time: string;
    descr: string;
    url: string;
    //color: string;
}


function ProjectCard({ img, title, time, descr, url }: ProjectCardProps) {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 p-4">
        <div className="border border-white rounded-md shadow-lg bg-black flex flex-col h-full">
          <img src={img} className="w-full h-48 object-cover rounded-t-md" />
  
          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-xl font-bold text-blue">{title}</h3>
              <p className="text-white mt-2 text-timberwolf">{descr}</p>
            </div>
            <p className="text-sm text-timberwolf italic mt-4">{time}</p>
          </div>
        </div>
      </div>
    );
  }
  

export default ProjectCard