import { useEffect, useRef, useState } from 'react';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({children, className = ''}: WrapperProps) => {
  const ref = useRef<HTMLElement>(null);
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
    }
  }, []);

  return (
    <section ref={ref} className={`p-[30px] flex flex-col items-center text-[#222] w-full max-w-full box-border relative duration-500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
    } ${className}`}>
      {children}
    </section>
  );
}

export default Wrapper;
