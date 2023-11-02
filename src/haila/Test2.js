import data from './data.js';

const Test2 = () => {
  return (
    <div>
        {data.projects.map((project, index)=>(
            <div
          className='hover:transform hover:translate-x-2 hover:-translate-y-2 duration-500 hover:bg-slate-600  h-80 pt-10 rounded-lg bg-white shadow-2xl shadow-black'
          data-aos={project.motion}
          key={index}
        >
          <a href={project.link}>
            <img src={project.image} alt={project.name} className='w-full h-40' />
          </a>
          <h1 className='text-black font-bold text-xl text-center pt-6'>
            <a
              href={project.git}
              className='hover:border-green-500 hover:border-b-4 duration-500 ease-in-out'
            >
              {project.name}
            </a>
          </h1>
          <p className='text-black text-center'>Using Api to fetch Data</p>
        </div>
        ))}
    </div>
  )
}

export default Test2