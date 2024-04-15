import Image from 'next/image'
import reasonOne from '../../../public/assets/reasonsCard/reasonOne.png'
import reasonTwo from '../../../public/assets/reasonsCard/reasonTwo.png'
import reasonThree from '../../../public/assets/reasonsCard/reasonThree.png'
import reasonFour from '../../../public/assets/reasonsCard/reasonFour.png'

const ReasonCard = () => {
  return (
    <>
    <div className='flex flex-col md:flex-row min-[2560px]:justify-between bg-[#FFFF]'>
      <section className=''>
        <Image src={reasonOne} alt='example image'/>
      </section>
      <div className='relative md:w-[700px] lg:w-[500px] min-[2560px]:w-[710px]'>
        <section className='absolute text-[#DADADA] text-[100px] lg:text-[140px] min-[1440px]:text-[180px] font-[700] right-0 min-[375px]:right-[.5rem] md:right-[.2rem] min-[1440px]:right-[-9rem] min-[2560px]:right-[1rem] top-[-1rem] md:top-[-2rem] lg:top-[-3rem] font-[DMsans]'>1</section>
        <section className='flex flex-col gap-y-4 w-[320px] lg:w-[500px] min-[1440px]:w-[540px] text-[15px] md:text-[12px] lg:text-[16px] min-[1440px]:text-[20px] font-[400] pt-10 md:pt-2 lg:pt-12 min-[1440px]:pt-16 pl-4 md:pl-8 min-[1440px]:pl-16'>
          <h4 className='text-[#202020] font-[700] text-[30px] min-[1440px]:text-[44px] '>RADIATE</h4>
          <p>Just the right amount of energetic, creative & uplifting sensations radiating from head to toe.</p>
          <p>Our pharmaceutical-grade products are enhanced with natural ingredients.</p>
          <p>Indulge in our premium consumables and experience the difference science and nature can make. </p>
        </section>
      </div>
    </div>

    <div className='flex flex-col-reverse md:flex-row justify-between bg-[#202020] text-[#FFFF]'>
      <div className='relative md:w-[738px] lg:w-[710px]'>
        <section className='absolute text-[#5A5A5A] text-[100px] lg:text-[140px] min-[1440px]:text-[180px] font-[700] right-0 min-[375px]:right-[.5rem] md:right-[.2rem] min-[1440px]:right-[-2rem] top-[-1rem] md:top-[-2rem] lg:top-[-3rem] font-[DMsans]'>2</section>
        <section className='flex flex-col gap-y-4 w-[320px] lg:w-[500px] min-[1440px]:w-[540px] text-[15px] md:text-[12px] lg:text-[16px] min-[1440px]:text-[20px] font-[400] pt-10 md:pt-8 lg:pt-14 min-[1440px]:pt-16 pl-4 md:pl-8 min-[1440px]:pl-16'>
          <h4 className=' font-[700] text-[30px] min-[1440px]:text-[44px]'>RELAX</h4>
          <p>Amid life’s daily pressures, it’s easy to feel swamped and overwhelmed.</p>
          <p>Our specially formulated products invite you to decompress and recharge. With each supplement serving, you are treated to a much-needed break and peace of mind.</p>

        </section>
      </div>
      <div>
        <Image src={reasonTwo} alt='example image'/>
      </div>
    </div>

    <div className='flex flex-col md:flex-row min-[2560px]:justify-between bg-[#FFFF]'>
      <section>
        <Image src={reasonThree} alt='example image'/>
      </section>
      <div className='relative md:w-[700px] lg:w-[500px] min-[2560px]:w-[710px]'>
        <section className='absolute text-[#DADADA] text-[100px] lg:text-[140px] min-[1440px]:text-[180px] font-[700] right-0 min-[375px]:right-[.5rem] md:right-[.2rem] min-[1440px]:right-[-9rem] min-[2560px]:right-[1rem] top-[-1rem] md:top-[-2rem] lg:top-[-3rem] font-[DMsans]'>3</section>
        <section className='flex flex-col gap-y-4 w-[320px] lg:w-[500px] min-[1440px]:w-[540px] text-[15px] md:text-[12px] lg:text-[16px] min-[1440px]:text-[20px] font-[400] pt-10 md:pt-8 lg:pt-14 min-[1440px]:pt-16 pl-4 md:pl-8 min-[1440px]:pl-16'>
          <h4 className='text-[#202020] font-[700] text-[30px] min-[1440px]:text-[44px]'>REST</h4>
          <p>More than just peace of mind -get deep, rejuvenating sleep.</p>
          <p>Incorporate our full spectrum consumables into your nightly sleep routine and bid farewell to restlessness. Wake up feeling energized and prepared for the day ahead.</p>
        </section>
      </div>
    </div>

    <div className='flex flex-col-reverse justify-between md:flex-row bg-[#202020] text-[#FFFF]'>
      <div className='relative md:w-[738px] lg:w-[710px]'>
        <section className='absolute text-[#5A5A5A] text-[100px] lg:text-[140px] min-[1440px]:text-[180px] font-[700] right-0 min-[375px]:right-[.5rem] md:right-[.2rem] min-[1440px]:right-[-2rem] top-[-1rem] md:top-[-2rem] lg:top-[-3rem] font-[DMsans]'>4</section>
        <section className='flex flex-col gap-y-4 w-[320px] lg:w-[500px] min-[1440px]:w-[540px] text-[15px] md:text-[12px] lg:text-[16px] min-[1440px]:text-[20px] font-[400] pt-10 md:pt-10 lg:pt-14 min-[1440px]:pt-16 pl-4 md:pl-8 min-[1440px]:pl-16'>
          <h4 className='font-[700] text-[30px] min-[1440px]:text-[44px]'>RELIEF</h4>
          <p>Elevate your mood, your day, and your health.</p>
          <p>Customers repeatedly share that our enhanced products lift their spirit and body, allowing them to feel lighter, less fatigued, achy, and more mobile in their day-to-day life.</p>
        </section>
      </div>
      <section>
        <Image src={reasonFour} alt='example image'/>
      </section>
    </div>
    
    </>
  )
}
export default ReasonCard