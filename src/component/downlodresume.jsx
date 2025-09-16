function Downlode(){
  return(
    <>
      <div className="w-full h-auto bg-[#000814]">
          <div className="h-28 flex justify-center items-center gap-6 pt-6">
              <a href="/MohitCV.pdf" target="blank" className=" bg-[#FFD60A] rounded-xl md:h-12 md:w-64 w-64 h-11 flex gap-1.5  cursor-pointer justify-center items-center">   
                <img src="https://img.icons8.com/?size=100&id=83159&format=png&color=000000" alt="downlod icon" className="h-6" />
                <p className="md:text-2xl text-lg">Downlod Resume</p>
              </a>
            <button className="h-11 w-44 cursor-pointer hover:bg-white transition-colour duration-300 rounded-xl">
              <a href="https://github.com/MOHITGODARA1">
                <p className="text-white md:text-2xl text-lg hover:text-black">Project</p>
              </a>
            </button>
          </div>
      </div>
    </>
  )
}
export default Downlode