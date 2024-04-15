import Image from 'next/image'
import advantageOne from '../../../public/assets/advantageCard/advantageOne.svg'
import advantageTwo from '../../../public/assets/advantageCard/advantageTwo.svg'
import advantageThree from '../../../public/assets/advantageCard/advantageThree.svg'

const AdvantagesCard = () => {
  return (
    <div className='flex flex-col lg:flex-row'>

      <section className='flex flex-col items-center text-center '>
        <Image src={advantageOne} alt='advantages'/>
        <p className='w-[300px] md:w-[330px] text-[17px] font-thin pt-5'>Each product is specially handcrafted with natural enhanced ingredients of the highest quality.</p>
      </section>

      <section className='flex flex-col  items-center min-[1440px]:mx-10 lg:px-1 min-[1440px]:px-10 my-10 lg:my-0 text-center lg:border-x border-[#D8D8D8] '>
        <Image src={advantageTwo} alt='advantages'/>
        <p  className='w-[300px] md:w-[330px] text-[17px] font-thin pt-5'>Proudly formulated in Pennsylvania, our products are research-driven, incorporating the lowest effective dosages of inputs and complimentary natural products to support desired benefits.</p>
      </section>

      <section className='flex flex-col items-center text-center '>
        <Image src={advantageThree} alt='advantages'/>
        <p  className='w-[300px] md:w-[354px] text-[17px] font-thin pt-5'>We are a family owned and operated business supporting community resilience.</p>
      </section>
    </div>
  )
}
export default AdvantagesCard