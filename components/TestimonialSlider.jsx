import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "DINUWA",
    position: "HELPR & CEO",
    message:
      "Dinuwa is the second-in-command of the Legion of Doom team, positioned right after the current owner. While not the creator of the Solo-Leveling Bot, Dinuwan plays a crucial role in its coding oversight and group management, ensuring smooth operation and coordination within the community.",
  },
  {
    image: "/t-avt-2.png",
    name: "JOSHUWA",
    position: "LOD CEO",
    message:
      "JOSHUWA is currently a key figure in the Legion of Doom. He financially supported and advised the creation of the Solo-Leveling bot. However, he recently stepped down from his leadership role and left the team after handing over his position.!",
  },
  {
    image: "/t-avt-3.png",
    name: "RUKSHAN",
    position: "SOLO-LEVELING OWNER",
    message:
      "I am a tech enthusiast with a strong passion for innovation and modern technology. After completing my O/L examinations, I pursued and successfully completed an IT course, earning multiple certifications. I have gained professional experience working in the IT department of a private company and am currently studying for a Diploma in Cyber Security and IT.I specialize in developing JavaScript-based WhatsApp bots, designing websites, and exploring advanced AI-powered solutions to create impactful and creative digital tools.!",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
