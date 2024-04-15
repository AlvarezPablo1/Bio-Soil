import ReasonCard from "./ReasonCard"

const Reason = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center pt-[10.5rem] h-[130px] ">
        <h1 className="text-[#187B32] text-[14px] md:text-[24px] font-[900] tracking-[5px]">4 REASONS WHY</h1>
        <p className="text-[21px] md:text-[30px] font-[700] w-[312px] md:w-[721px] text-[#202020]">our full spectrum mints & gummies are <span className="text-[#FF8A00] font-[900] font-[montserratItalic]">NAUT</span>  your typical plant-based health treats</p>
      </div>
      <div className="mt-[10rem] w-full">
        <ReasonCard/>
      </div>
    </>
    
  )
}
export default Reason