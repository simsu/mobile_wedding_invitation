import { useRef, useState, CSSProperties, useEffect } from 'react';

// 이미지 배열
const _images = Array.from({ length: 21 }).fill(0).map((_, index) => `/img/${(index + 2).toString().padStart(2, '0')}.webp`);
// 이미지 배열 앞 뒤로 trick 사진 추가. 1개씩만 했기 때문에 0.5초 이내에 광클하면 앞으로 돌아가는 효과가 나옴...
const images = [_images[_images.length - 1], ..._images, _images[0]];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  // 터치 슬라이드 전용 ref
  const wrapper = useRef<HTMLDivElement>(null);
  // 슬라이드 스타일
  const [style, setStyle] = useState<CSSProperties>({
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease-in-out',
  });
  // 현재 슬라이드 인덱스
  const [currentIndex, setCurrentIndex] = useState(1);
  
  const startX = useRef(0);
  const startY = useRef(0);
  const isScrolling = useRef(false);

  // 갤러리 노출 여부
  const [isVisible, setIsVisible] = useState(false);
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
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, []);

  const next = () => {
    setCurrentIndex(currentIndex + 1);
    setStyle({
      transform: `translateX(-${(currentIndex + 1) * 100}%)`,
      transition: 'transform 0.5s ease-in-out',
    });
  }

  const prev = () => {
    setCurrentIndex(currentIndex - 1);
    setStyle({
      transform: `translateX(-${(currentIndex - 1) * 100}%)`,
      transition: 'transform 0.5s ease-in-out',
    });
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (wrapper.current) {
      const diffX = e.targetTouches[0].clientX - startX.current;
      const diffY = e.targetTouches[0].clientY - startY.current;

      isScrolling.current = Math.abs(diffY) > Math.abs(diffX);
      if (isScrolling.current) return;

      const currentX = wrapper.current.clientWidth * -currentIndex;
      const result = currentX + diffX;
      setStyle({
        transform: `translateX(${result}px)`,
        transition: 'none',
      });
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (wrapper.current) {
      const diffX = e.changedTouches[0].clientX - startX.current;
      const criteria = 60;
      if (diffX > criteria) {
        prev();
      } else if (diffX < -criteria) {
        next();
      } else {
        setStyle({
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        });
      }
    }
  };

  useEffect(() => {
    // 이미지 루프 처리용 trick 이펙트
    if (currentIndex === images.length - 1) {
      setCurrentIndex(1);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-100%)`,
          transition: 'none',
        });
      }, 500);
    } else if (currentIndex === 0) {
      setCurrentIndex(images.length - 2);
      setTimeout(() => {
        setStyle({
          transform: `translateX(-${(images.length - 2) * 100}%)`,
          transition: 'none',
        });
      }, 500);
    }
  }, [currentIndex]);

  return (
    <section ref={ref} className={`pt-7 -mx-[30px] md:mx-5 duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    }`}>
      <p className="text-3xl text-[#ffc531]/80 font-[NanumRoundEB]">Gallery</p>
      <div className="mt-[46px] relative">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          className="overflow-hidden w-full">
          <div ref={wrapper} style={style} className="flex">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`image ${index + 1}`} className="w-full h-full object-cover" />
            ))}
          </div>
        </div>
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-white p-2.5 bg-black/20 hover:bg-black/50 cursor-pointer">❮</button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-white p-2.5 bg-black/20 hover:bg-black/50 cursor-pointer">❯</button>
      </div>
    </section>
  );
};
