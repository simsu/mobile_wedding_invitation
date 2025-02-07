import data from 'data.json';
import mainImg from '@/assets/images/01.webp'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <h1 className='font-[NanumRoundEB] text-stone-300 text-3xl leading-none mt-0 ml-0 mr-0 pb-3'>Wedding Day</h1>
      <h3 className='font-[NanumRoundB] text-2xl mb-[1.5rem] text-stone-500'>심수연 & 남현철</h3>
      <div className='flex justify-center'>
        <img src={mainImg} className='w-[90%] max-w-[450px]' />
      </div>
      <p className='font-[NanumRoundB] text-2xl text-stone-600 leading-[120%] whitespace-pre-line mt-[1.5rem] pb-4'>{greeting.title}</p>
      <p className='font-[NanumRoundB] text-base text-stone-600 leading-[140%] whitespace-pre-line'>{greeting.eventDetail}</p>
    </div>
  );
};

export default Main;
