import data from 'data.json';
import { Caption, PointTitle } from '@/components/Text.tsx';
import { ILocationInfo } from '@/types/data.ts';

const Address = () => {
  const { locationInfo } = data;
  return (
    <div className='flex flex-col my-5 gap-5'>
      {locationInfo?.map((item: ILocationInfo) => {
        const { title, desc } = item;
        return (
          <div key={title} className='flex flex-col text-left'>
            <PointTitle>{title}</PointTitle>
            <Caption>{desc}</Caption>
          </div>
        );
      })}
    </div>
  );
};

export default Address;
