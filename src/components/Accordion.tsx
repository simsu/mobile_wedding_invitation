import { ReactNode, useState } from 'react';
import ExpandMore from '@/assets/icons/expand_more.svg?react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

interface AccordionWrapperProps {
  children: ReactNode; // children의 타입을 ReactNode로 지정
};

interface AccordionHeaderProps {
  children: ReactNode; // children의 타입을 ReactNode로 지정
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const AccordionWrapper: React.FC<AccordionWrapperProps> = ({ children }: AccordionWrapperProps) => (
  <div className='font-[NEXONLv1Bold] border border-[#568a35]/20 mb-5 rounded-lg overflow-hidden transition-all duration-30'>
    { children }
  </div>
)

const AccordionHeaderProps = ({children, onClick}: AccordionHeaderProps) => (
  <div
    onClick={onClick}
    className='flex items-center justify-between bg-[#568a35]/20 px-[15px] pointer'
  >
    {children}
  </div>
)

const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeaderProps onClick={toggleAccordion}>
        <p className='text-stone-800 my-4'>{title}</p>
        <span
          className='flex items-center justify-center select-none transition-all duration-30'
          style={{ 'transform': isOpen ? 'rotate(180deg)' : undefined }}
        >
          <ExpandMore fill="#568a35" />
        </span>
      </AccordionHeaderProps>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, paddingBlock: '0px' }}
            animate={{ height: 'auto', paddingBlock: '10px' }}
            exit={{ height: 0, paddingBlock: '0px' }}
            transition={{ duration: 0.3 }}
            className='text-sm text-justify px-5 bg-white'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionWrapper>
  );
};

export default Accordion;
