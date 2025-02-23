// testimonial data
const testimonialData = [
  {
    image: '/t-avt-5.jpg',
    name: 'Chayan Ghosh',
    position: 'Peer',
    message:
      'She is an exceptional frontend developer. Her attention to detail and ability to translate ideas into visually stunning designs make her a great asset to any project. Working with her has always been a seamless and insightful experience.',
  },
  {
    image: '/t-avt-4.png',
    name: 'Shamindra Sen',
    position: 'Senior Software Developer',
    message:
      'A passionate developer with a keen eye for design. She has a unique ability to blend creativity with functionality, ensuring that every project she works on is both aesthetically pleasing and highly efficient.',
  },
  {
    image: '/t-avt-1.png',
    name: 'Anita Sinha',
    position: 'User',
    message:
      'Her work exceeded my expectations! The user interface was not only beautiful but also highly intuitive. She truly understands how to create a seamless and engaging user experience.',
  },
];


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Navigation, Pagination } from "swiper/modules";

// Icons
import { FaQuoteLeft} from "react-icons/fa";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation,Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
            px-16'>
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center items-center'>
                  {/* avatar*/}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt=''/>
                    </div>
                  {/* name*/}
                  <div className='text-lg'>{person.name}</div>
                  {/* position*/}
                  <div className='text-[12px] uppercase font-extralight
                  tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* message*/}
              <div className='flex-1 flex flex-col justify-center
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
              xl:before:h-[200px] relative xl:pl-20 '>
                {/* quote icon*/}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20
                  mx-auto md:mx-0' />
                </div>
                {/* message*/}
                <div className='xl:text-lg text-center md:text-left'>
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default TestimonialSlider;

