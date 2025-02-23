
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

// Icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Project 1",
          path: "/nail4.png",
          link: "https://mbbconsultancy.in/",
        },
        {
          title: "Project 2",
          path: "/nail5.png",
          link: "https://mbbconsultancy.in/",
        },
        {
          title: "Project 3",
          path: "/nail6.png",
          link: "https://mbbconsultancy.in/",
        },
        {
          title: "Project 4",
          path: "/nail7.png",
          link: "https://mbbconsultancy.in/",
        },
      ],
    },
    {
      images: [
        {
          title: "Project 5",
          path: "/nail1.png",
          link: "https://shrey-sheets-frontend.vercel.app/",
        },
        {
          title: "Project 6",
          path: "/nail2.png",
          link: "https://shrey-sheets-frontend.vercel.app/",
        },
        {
          title: "Project 7",
          path: "/nail3.png",
          link: "https://shrey-sheets-frontend.vercel.app/",
        },
        {
          title: "Project 8",
          path: "/nail8.png",
          link: "https://shrey-sheets-frontend.vercel.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[400px] xl:h-[420px]"
    >
      {workSlider.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-2 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                key={imageIndex}
                className="relative overflow-hidden flex items-center justify-center group"
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* Image */}
                  <Image src={image.path} width={400} height={200} alt={image.title} />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  {/* Clickable "LIVE PROJECT" */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                      {/* Title Part 1 */}
                      <div className="delay-100">LIVE</div>

                      {/* Title Part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>

                      {/* Icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
