interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Button = ({children, onClick}: ButtonProps) => (
  <a 
    onClick={onClick}
    className='font-[NEXONLv1Bold] py-[0.5em] px-[0.8em] rounded-lg border border-[#dfdfdf] outline-0 shadow-none text-[0.9rem] cursor-pointer bg-white flex items-center text-stone-800 no-underline gap-0.5'>
    {children}
  </a>
)

export default Button;
