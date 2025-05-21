interface ExperienceProp{
    img: string;
    company: string;
    role: string;
    time: string;
    descr: string;
    url: string;
    color: string;
}

function Experience({ img, company, role, time, descr, color}: ExperienceProp) {
    const Map: Record<string, string> = {
        blue: 'text-blue', 
        green: 'text-red',
    };
    
    
    return (
            <div className="mt-[5vh] w-full p-4 md:p-6 border border-white rounded-md flex flex-col md:flex-row items-start bg-black">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                    <img src={img} className="w-full h-[150px] object-cover rounded-lg"/>
                </div>

                <div className="flex-1 text-left md:ml-10">
                <h3 className={`text-2xl font-bold ${Map[color]}`}>{role}</h3>
                    <p className="text-white font-semibold">{company}</p>
                    <p className="text-white mt-4 text-timberwolf">{descr}</p>
                    <p className="text-sm text-timberwolf italic mt-6">{time}</p>
                </div>
            </div>
    );
  }

export default Experience