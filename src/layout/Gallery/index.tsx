import { useRef, useState, CSSProperties, useEffect } from 'react';

// 이미지 배열
const _images = Array.from({ length: 21 }).fill(0).map((_, index) => `/img/${(index + 2).toString().padStart(2, '0')}.webp`);
// 이미지 배열 앞 뒤로 trick 사진 추가. 1개씩만 했기 때문에 0.5초 이내에 광클하면 앞으로 돌아가는 효과가 나옴...
const images = [_images[_images.length - 1], ..._images, _images[0]];

export default function Gallery() {
  // 터치 슬라이드 전용 ref
  const ref = useRef<HTMLDivElement>(null);
  // 슬라이드 스타일
  const [style, setStyle] = useState<CSSProperties>({
    transform: 'translateX(-100%)',
    transition: 'transform 0.5s ease-in-out',
  });
  // 현재 슬라이드 인덱스
  const [currentIndex, setCurrentIndex] = useState(1);
  // 터치 시작 위치
  const [touchStart, setTouchStart] = useState(0);

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
    setTouchStart(e.touches[0].pageX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    // 슬라이드 이동 기준 (100px)
    const criteria = 100;
    const touchEnd = e.changedTouches[0].pageX;
    if (touchEnd - touchStart > criteria) {
      prev();
    } else if (touchEnd - touchStart < -criteria) {
      next();
    } else {
      setStyle({
        transform: `translateX(-${currentIndex * 100}%)`,
        transition: 'transform 0.5s ease-in-out',
      });
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (ref.current) {
      const currentX = ref.current.clientWidth * -currentIndex;
      const result = currentX + (e.targetTouches[0].pageX - touchStart);
      setStyle({
        transform: `translateX(${result}px)`,
        transition: 'none',
      });
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
    <div className="pt-7 -mx-[30px] md:mx-5">
      <p className="text-2xl text-[#e88ca6] font-[CookieRun]">Gallery</p>
      <div className="mt-[46px] relative">
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
          className="overflow-hidden w-full touch-pan-auto">
          <div ref={ref} style={style} className="flex">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`image ${index + 1}`} className="w-full h-full object-cover" />
            ))}
          </div>
        </div>
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-white p-2.5 bg-pink-100/50 hover:bg-pink-200/50 cursor-pointer">❮</button>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-white p-2.5 bg-pink-100/50 hover:bg-pink-200/50 cursor-pointer">❯</button>
      </div>
    </div>
  );
}
