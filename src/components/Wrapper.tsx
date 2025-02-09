import { useEffect, useRef, useState } from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  onScroll?: (below: boolean) => void;
}

const Wrapper = ({children, className = '', onScroll}: WrapperProps) => {
  const ref = useRef<HTMLElement>(null);
  const visibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
  });

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      window.addEventListener('scroll', () => {});
      return () => window.removeEventListener('scroll', () => {});
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current && onScroll) {
        if (!visibleRef.current && ref.current.getBoundingClientRect().top < window.innerHeight) {
          visibleRef.current = true;
          onScroll(true);
        } else if (visibleRef.current && ref.current.getBoundingClientRect().top > window.innerHeight) {
          visibleRef.current = false;
          onScroll(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return (
    <section ref={ref} className={`px-5 py-10 flex flex-col items-center text-[#222] w-full max-w-full box-border relative duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    } ${className}`}>
      {children}
    </section>
  );
}

export default Wrapper;
