import Image from "next/image";
import arrowBlack from '../../public/assets/icons/arrow.png'
import headerBg from '../../public/assets/bgImages/headerImage.png'
import bitmapBg from '../../public/assets/bgImages/bitmap.png'
import underline from '../../public/assets/icons/underline.png'
import check from '../../public/assets/icons/check.png'

const Header = () => {
  return (
    <div className="relative">
      
      <div className="fixed md:absolute z-50 bg-[#FAF9F4] w-full py-[.5rem]">
        <section className="flex items-center justify-center md:gap-x-10">
          <p className="font-[700] text-[10px] md:text-[14px] w-[224px] md:w-[441px]">TRY OUR PRODUCTS TODAY - 15% OFF USING CODE: NAUT15</p>

          <section className="flex items-center gap-x-1">
            <p className="font-[600] text-[10px] lg:text-[16px] underline">Use now </p>
            <Image src={arrowBlack}  alt="arrow"/>
          </section>
          
        </section>
      </div>

      <div className="bg-gradient-to-r from-[#3A7449] to-[#12401E] rounded-b-[2rem] relative min-[1440px]:overflow-hidden">
        <div className="absolute z-0 ">
          <Image src={bitmapBg}  alt="headerBg" />
        </div>
        <div className="flex flex-col md:flex-row justify-between z-10 ">
          <div className="flex flex-col items-center min-[1440px]:items-start gap-y-5 min-[1440px]:pt-[4rem] pl-2 min-[1440px]:pl-[8rem]  text-[#FFFF] ">
            <section>
            <p className="text-[17px] min-[1440px]:text-[24px] pt-[3rem] pb-[1rem] font-[700] tracking-[5px]">The Bio Soil Company</p>
            <section>
            <p className="text-[21px] font-[600] "># I a m N a u t</p>
            <Image src={underline} alt="underline"/>
            </section>
            <p className="text-[22px] lg:text-[27px] min-[1440px]:text-[45px] w-[308px] lg:w-[470px] font-[900]">Nature Inspired, Science-Supported Consumables </p>
            </section>
            <section className="flex flex-col gap-y-5 h-[121px] w-[314px] lg:w-[420px] text-[16px] lg:text-[20px] font-[600] lg:pl-4">
              <section className="flex items-center gap-x-2">
                <Image src={check} alt="check"/>
                <p> Science supported products </p>
              </section>
              <section className="flex items-center gap-x-2">
                <Image src={check} alt="check"/>
                <p> Natural enhanced ingredients</p>
              </section>
              <section className="flex items-center gap-x-2">
                <Image src={check} alt="check"/>
                <p> American made & family owned </p>
              </section>
            </section>
            <div className="md:hidden lg:block">
              <section className="flex items-center justify-center justify-items-center gap-x-2 h-[51px] w-[191px] bg-[#FFFF]">
                <button className="font-[600] text-[#202020]">Use now </button>
                <Image src={arrowBlack} alt="img"/>
              </section>
            </div>
            
          </div>
          <section >
            <Image src={headerBg}  alt="headerBg"/>
          </section>
        </div>
      </div>

    </div>
  )
}
export default Header