import Copy from '@/assets/icons/copy.svg?react';
import kakaopay from '@/assets/icons/kakaopay.webp?url';
import toss from '@/assets/icons/toss.webp?url';

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
  kakaopayAccount?: string;
  tossAccount?: string;
}
const AccountWrap = ({
  name,
  relation,
  bank,
  account,
  kakaopayAccount,
  tossAccount,
}: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert('계좌번호가 복사되었습니다.😉😉');
      },
      () => {
        alert('계좌번호 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  return (
    <div className='font-[NEXONLv1Light] flex flex-col py-2.5 border-b border-[#dfdfdf] last-of-type:mb-0 last-of-type:border-b-0'>
      <div className='flex items-center gap-0.5 my-[5px]'>
        <span className='text-[#44484d]'>{relation}</span>
        <span className='text-base'>{name}</span>
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <span>{bank}</span>
          &nbsp;
          <span>{account}</span>
        </div>
        <button className='border-0 rounded-[5px] px-[0.1rem] py-[0.2rem] cursor-pointer gap-[2px] outline-0 shadow-none bg-white' onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </button>
      </div>
    </div>
  );
};

export default AccountWrap;
