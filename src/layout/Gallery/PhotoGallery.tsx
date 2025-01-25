import images from '@/layout/Gallery/Images.ts';
import { useEffect, useRef, useState } from 'react';

interface divProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children?: React.ReactNode;
}

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const timeoutRef = useRef<number | null>(null); // 타임아웃을 저장할 Ref

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) { // 50px 이상 움직이면 슬라이드
      if (diffX > 0) nextSlide(); // 왼쪽 스와이프
      else prevSlide(); // 오른쪽 스와이프
      setIsDragging(false); // 한 번만 반응하도록
    }
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // 기존 타이머 제거
    }
  };
  
  useEffect(() => {
    resetTimeout(); // 슬라이드가 변경되면 타이머 초기화
    timeoutRef.current = window.setTimeout(nextSlide, 5000); // 5초마다 슬라이드 변경

    return () => resetTimeout(); // 컴포넌트 언마운트 시 타이머 제거
  }, [currentIndex]);

  return (
    <SliderContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className='flex w-full h-full transition-transform duration-500 ease-in-out'
        style={{ 'transform': `translateX(-${Math.round(currentIndex * 100)}%)` }}
      >
        {images.map((image, index) => (
          <div
            className='shrink-0 w-full h-full bg-contain bg-no-repeat bg-center box-border'
            key={index}
            style={{ backgroundImage: `url(${image.source})` }}
          />
        ))}
      </div>
      <Controls>
        <Button onClick={prevSlide}>❮</Button>
        <Button onClick={nextSlide}>❯</Button>
      </Controls>
    </SliderContainer>
  );
};

const SliderContainer = ({children}: divProps) => (
  <div className='relative w-full overflow-hidden my-0 mx-auto touch-pan-y box-border aspect-[2/3]'>
    {children}
  </div>
)

const Controls = ({children}: divProps) => (
  <div className='absolute top-[50%] w-full flex justify-between transform-[translateY(-50%)]'>{children}</div>
)

const Button = ({children}:ButtonProps) => (
  <button className='bg-[rgba(0,0,0,0.5)] text-white border-0 p-[10px] cursor-pointer text-lg hover:bg-[rgba(0,0,0,0.8)]'>
    {children}
  </button>
)

export default PhotoGallery;
