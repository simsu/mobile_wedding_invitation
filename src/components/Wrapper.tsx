interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({children}: WrapperProps) => (
  <section className='p-[30px] flex flex-col items-center text-[#222] w-full max-w-full box-border relative'>
    {children}
  </section>
)

export default Wrapper;
