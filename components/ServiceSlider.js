import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper/modules";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Hotel Booking App",
    description:
      "Developed a full-stack hotel booking platform using the MERN stack, featuring real-time availability, geolocation-based search, and seamless booking.",
    repoLinks: ["https://github.com/ShreyasiSen/Booking_App"],
  },
  {
    icon: <RxPencil2 />,
    title: "Spreadsheet App",
    description:
      "Built a web-based spreadsheet application with Google Sheets features, formula support, and efficient data processing, enhancing productivity.",
    repoLinks: [
      "https://github.com/ShreyasiSen/ShreySheets-Frontend",
      "https://github.com/ShreyasiSen/ShreySheets-Backend",
    ],
  },
  {
    icon: <RxRocket />,
    title: "Chat App",
    description:
      "Created a real-time chat application with WebSocket integration, user authentication, and media sharing, ensuring smooth communication.",
    repoLinks: [""],
  },
  {
    icon: <RxCrop />,
    title: "GPCR Prediction (GNN)",
    description:
      "Designed a Graph Neural Network-based model for GPCR interaction prediction, improving accuracy in drug-target discovery through deep learning techniques.",
    repoLinks: [""],
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[250px] sm:h-[350px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex
            sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] 
            transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-3xl text-accent mb-2">{item.icon}</div>

            {/* Title & Description */}
            <div className="mb-8">
              <div className="text-md">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* Multiple Links Handling */}
            <div className="text-3xl flex gap-10">
              {item.repoLinks.map((link, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <RxArrowTopRight
                    className="group-hover:rotate-45 group-hover:text-accent 
                    transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
