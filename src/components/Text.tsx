interface childrenProps {
  children: React.ReactNode;
}

interface CaptionProps {
  children: React.ReactNode;
  textAlign?: "start" | "center" | "end" | "justify" | "left" | "right";
}

export const Heading1 = ({children}: childrenProps) => (
  <p className='font-[NanumRoundB] text-2xl mb-1em mt-1em text-[#e88ca6] whitespace-pre-line'>
    {children}
  </p>
)
export const Heading2 = ({children}: childrenProps) => (
  <p className='font-[NanumRoundB] text-base m-[10px] whitespace-pre-line'>
    {children}
  </p>
)

export const PointTitle = ({children}: childrenProps) => (
  <p className='font-[NanumRoundB] leading-none m-0 text-[#e88ca6] whitespace-pre-line'>
    {children}
  </p>
)

export const Paragraph = ({children}: childrenProps) => (
  <p className='leading-[2.2rem] whitespace-pre-line'>
    {children}
  </p>
)

export const Caption = ({children, textAlign}: CaptionProps) => (
  <p className='whitespace-pre-line font-extralight' style={{'textAlign': textAlign || 'start'}}>
    {children}
  </p>
)