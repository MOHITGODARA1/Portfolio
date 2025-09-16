function Introduction(){
  const language=[
    "C",
    "CPP",
    "Java",
    "Javascript",
    "Ocean",
    "Node.js",
    "React.js",
    "Tailwind CSS",
    "Vs Code"
  ]
  return(
    <>
      <div className="bg-[#000814] w-full h-auto">
        <div className="w-full h-auto flex justify-center items-center">
          <h1 className="text-white mt-3 md:text-8xl text-5xl">
            Mohit Godara
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <h1 className="text-[#FFD60A] mt-4 text-3xl font-semibold">
            Full stack developer
          </h1>
        </div>
        <div className="w-full h-auto flex justify-center items-center">
          <p className="text-gray-200 text-center ml-41 mr-41 mt-4">I craft modern, responsive, and efficient web applications.
            Combining design, logic, and innovation to deliver impactful solutions.
            Always learning, improving, and pushing ideas into reality through code.</p>
        </div>
        <div className="w-full h-auto flex justify-center items-center gap-5 mt-9">
          {
            language.map((item,index)=>(
              <div className="rounded-4xl h-9 w-25 bg-gray-300/60 flex justify-center items-center cursor-default transition-transform duration-300 hover:translate-y-1" key={index}>
                <h1 className="text-white">{item}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}
export default Introduction