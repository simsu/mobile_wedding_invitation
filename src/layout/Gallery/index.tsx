import { useEffect, useRef, useState } from 'react';
import { SwiperRef } from 'swiper/react';
import Swipper from "./swipper";

const images = Array(21).fill(0).map((_, index) => `/resized_img_640x960/${(index + 2).toString().padStart(2, '0')}.webp`);


export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  // 갤러리 노출 여부
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const startY = useRef(0);
  const moving = useRef('');
  const ref = useRef<SwiperRef>(null);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.025,
  });

  useEffect(() => {
    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }
  }, []);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    moving.current = '';
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (moving.current !== '') return;
    const diffX = e.targetTouches[0].clientX - startX.current;
    const diffY = e.targetTouches[0].clientY - startY.current;
    moving.current = Math.abs(diffY) > Math.abs(diffX) ? 'y' : 'x';
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (moving.current === 'y') return; // y축 터치 시 스와이프 생략
    const diffX = e.changedTouches[0].clientX - startX.current;
    const criteria = 60;
    if (diffX > criteria) {
      prev();
    } else if (diffX < -criteria) {
      next();
    }
  };

  const next = () => {
    if (ref.current) {
      const { swiper } = ref.current;
      swiper.slideNext();
      setIndex(swiper.realIndex);
    }
  };

  const prev = () => {
    if (ref.current) {
      const { swiper } = ref.current;
      swiper.slidePrev();
      setIndex(swiper.realIndex);
    }
  };

  const handleClick = (idx: number) => {
    setIndex(idx);
    ref.current?.swiper.slideToLoop(idx);
  }


  return (
    <section ref={galleryRef} className={`py-10 -mx-[30px] md:mx-5 duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <p className="mb-1em text-3xl text-[#ffc531]/80 font-[NanumRoundEB]">Gallery</p>
      <div>
        <div className="relative flex px-2 justify-between">
          <button onClick={prev} className="text-3xl text-stone-600 p-2.5 cursor-pointer">❮</button>
          <img
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            src={images[index]}
            className="w-[320px]"/>
          <button onClick={next} className="text-3xl text-stone-600 p-2.5 cursor-pointer">❯</button>
        </div>
        <div className="p-4 my-1em bg-stone-800">
          <Swipper ref={ref} onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};
