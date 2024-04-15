import Image from 'next/image'
import arrowWhite from '../../../public/assets/icons/arrowWhite.png'
import AdvantagesCard from './AdvantagesCard'


const Advantages = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <section className="flex items-center justify-center gap-x-4 h-[51px] w-[230px] bg-[#202020]">
        <button className="font-[600] text-[#FFFF]">Get them now </button>
        <Image src={arrowWhite} alt="img"/>
      </section>
      <section className='flex flex-col md:flex-row text-center gap-x-8 mt-[4rem] md:text-[22px] text-[19px] text-[#FF8A00] font-[900] '>
        <p># I a m N a u t </p>
        <p> # T h e B i o S o i l W a y</p>
      </section>
      <section className='mt-[5rem]'>
        <AdvantagesCard/>
      </section>
    </div>
    )
}
export default Advantages