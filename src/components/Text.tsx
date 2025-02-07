interface childrenProps {
  children: React.ReactNode;
}

interface CaptionProps {
  children: React.ReactNode;
  textAlign?: "start" | "center" | "end" | "justify" | "left" | "right";
}

export const Heading1 = ({children}: childrenProps) => (
  <p className='font-[NanumRoundEB] text-3xl mb-1em text-[#568a35]/80 whitespace-pre-line'>
    {children}
  </p>
)
export const Heading2 = ({children}: childrenProps) => (
  <p className='font-[NanumRound] text-stone-600 text-base m-[10px] whitespace-pre-line'>
    {children}
  </p>
)

export const PointTitle = ({children}: childrenProps) => (
  <p className='font-[NanumRoundB] leading-none m-0 text-xl text-stone-700 whitespace-pre-line'>
    {children}
  </p>
)

export const Paragraph = ({children}: childrenProps) => (
  <p className='leading-[2.2rem] whitespace-pre-line'>
    {children}
  </p>
)

export const Caption = ({children, textAlign}: CaptionProps) => (
  <p className='whitespace-pre-line font-extralight text-stone-500' style={{'textAlign': textAlign || 'start'}}>
    {children}
  </p>
)