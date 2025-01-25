import React from "react";

interface RoundButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const RoundButton = ({children, ...props}: RoundButtonProps) => (
  <a {...props}
    className='py-[0.5em] px-[1em] rounded-[20px] outline-0 shadow-none text-[0.9rem] cursor-pointer text-[#44484d] no-underline bg-[#e6ece1]'
  >{children}</a>
)

export default RoundButton;
