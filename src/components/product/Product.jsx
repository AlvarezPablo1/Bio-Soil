import Image from "next/image";
import arrowWhite from '../../../public/assets/icons/arrowWhite.png'
import check from '../../../public/assets/icons/check.png'
import bitmapBg from '../../../public/assets/bgImages/bitmap.png'
import product from '../../../public/assets/product/product.png'

const Product = () => {

  return (
    <div className="relative mt-[8rem] pb-10 min-[1440px]:overflow-hidden bg-[#FFFF]">
        <div className="absolute z-0">
          <Image src={bitmapBg}  alt="headerBg" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center z-10">
          <div className="flex flex-col gap-y-5 lg:pt-[4rem] pl-5 lg:pl-[8rem] text-[#202020]">
            <section>
            <p className="text-[12px] lg:text-[24px] font-[700] tracking-[5px] pt-[4rem] pb-[1rem]">TRY OUR PRODUCTS TODAY</p>
            <p className="text-[40px] lg:text-[45px] font-[900] lg:w-[470px]">15% OFF USING CODE: <span className="text-[#187B32]">NAUT15</span></p>
            </section>
            <section className="flex flex-col gap-y-5 h-[121px] w-[294px] lg:w-[420px] text-[16px] lg:text-[20px] font-[600] lg:pl-4">
            <section className="flex items-center gap-x-2">
                <Image src={check} alt="check"/>
                <p> Lift your day </p>
              </section>
              <section className="flex items-center gap-x-2">
                <Image src={check} alt="check"/>
                <p>Decompress & recharge </p>
              </section>
              <section className="flex items-center gap-x-2">
                <Image src={check} alt="check"/>
                <p>Deep, rejuvenating sleep</p>
              </section>
              <section className="flex items-center gap-x-2">
                <Image src={check} alt="check"/>
                <p>Better mood & health</p>
              </section>
            </section>
            <div className="hidden lg:block">
              <section className="flex items-center gap-x-2 justify-center h-[51px] w-[191px] mt-[4rem] bg-[#187B32] ">
                <button className="font-[600] text-[#FFFF]">Use now </button>
                <Image src={arrowWhite}  alt="img"/>
              </section>
            </div>
          </div>
          <section className="pt-10">
            <Image src={product}  alt="headerBg"/>
          </section>
        </div>
      </div>
  )
}
export default Product