import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <div className='w-[90%] flex flex-col gap-6'>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>
        <span className='pb-1'>{mapInfo.address2}</span>
        <br/>
        <span>{mapInfo.address3}</span>
      </Caption>
      <Map />
      <MapButtons />
      <Address />
    </div>
  );
};

export default Location;
