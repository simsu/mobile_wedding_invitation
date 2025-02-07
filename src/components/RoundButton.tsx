import React from "react";

interface RoundButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const RoundButton = ({children, ...props}: RoundButtonProps) => (
  <a {...props}
    className='font-[NanumRoundB] pt-[0.6em] pb-[0.5em] px-[1em] rounded-[20px] outline-0 shadow-none text-[0.9rem] cursor-pointer text-stone-700 no-underline bg-stone-100'
  >{children}</a>
)

export default RoundButton;
