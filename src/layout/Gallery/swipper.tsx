import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/mousewheel';
import { forwardRef, useState } from 'react';

const images = Array(21).fill(0).map((_, index) => `/resized_img_320x480/${(index + 2).toString().padStart(2, '0')}.webp`);

export default forwardRef<SwiperRef, { onClick: (idx: number) => void }>(({ onClick }, ref) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
  <Swiper
      ref={ref}
      modules={[Mousewheel]}
      mousewheel
      spaceBetween={10}
      slidesPerView={5}
      loop
      centeredSlides
      grabCursor
      onSlideChange={(swiper) => {
        setCurrentIndex(swiper.realIndex);
      }}
      onSlideChangeTransitionEnd={(swiper) => {
        onClick(swiper.realIndex);
      }}
      className=''
    >
      <div className="flex items-center">
        {
            images.map((image, index) => (
                <SwiperSlide key={index} className='aspect-square'>
                    <img onClick={() => onClick(index) } src={image} alt={`slide ${index + 1}`} key={image} className={`object-contain aspect-square border-[1.5px] ${currentIndex === index ? 'border-yellow-400' : 'border-transparent'}`} />
                </SwiperSlide>
            ))
        }
      </div>
    </Swiper>
  );
});