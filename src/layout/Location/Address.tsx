import data from 'data.json';
import { PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <div className='flex flex-col my-5 gap-5'>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <div key={title} className='flex flex-col text-left gap-4'>
            <PointTitle><span>📍&nbsp;</span>{title}</PointTitle>
            {
              desc.map((value, index) => (
              <p className='flex font-extralight text-stone-500' key={index}>
                <span>👉🏻&nbsp;</span>
                <span className='whitespace-pre-wrap'>{value}</span>
              </p>
            ))
            }
          </div>
        );
      })}
    </div>
  );
};

export default Address;
