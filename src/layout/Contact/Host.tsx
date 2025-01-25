import React from 'react';
import data from 'data.json';
import { BrideAndGroom } from '@/types/data.ts';

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <>
      <div className='gap-2 font-[CookieRun]'>
        <HostInfo person={groom} />
        <HostInfo person={bride} />
      </div>
    </>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
    <div className='py-0 px-[55px] justify-center whitespace-nowrap flex gap-[6px] align-center items-center font-bold'>
      {person.parents && (
        <>
          {person.parents.map((parent, index) => (
            <React.Fragment key={index}>
              {index > 0 && ' · '}
              {parent.name}
            </React.Fragment>
          ))}
        </>
      )}
      <div className='not-italic leading-[26px] w-[50px] flex gap-[6px]'>
        <div>의</div>
        <div className='w-[inherit]'>{person.relation}</div>
      </div>
      <span className='font-semibold text-[1.1rem] text-[#4f4f4f] mr-[5px]'>{person.name}</span>
    </div>
  );
};
