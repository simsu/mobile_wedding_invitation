import data from 'data.json';
import Host from '../Contact/Host.tsx';
import RoundButton from '@/components/RoundButton.tsx';
import { Caption, Paragraph } from '@/components/Text.tsx';
import Flower from '@/assets/images/icon_flower.webp';

interface ChildrenProps {
  children: React.ReactNode;
}

// const MiddleImg = styled.div`
//     margin: 0 auto;
//     margin-bottom: 1rem;
//     width: 20px;
//     height: 40px;
//     background: url(${Flower});
//     background-size: cover;
// `;

const Invitation = () => {
  const { greeting } = data;
  return (
    <InvitationWrapper>
      <Paragraph>{greeting.message}</Paragraph>
      <div style={{'background': `url(${Flower}) 0% 0% / cover no-repeat`}} className='my-4 mx-auto w-5 h-10'></div>
      <Host />
      <Caption textAlign={'center'}>{greeting.eventDetail}</Caption>
      {/* TODO: 구글캘린더 추가하기 기능을 넣는다면 링크 수정 */}
      <ContactWrapper>
        <RoundButton
          target='_blank'
          href={`tel:${greeting.tel1}`}
          rel="noreferrer">
          신랑에게 연락하기
        </RoundButton>
        <RoundButton
          target='_blank'
          href={`tel:${greeting.tel2}`}
          rel="noreferrer">
          신부에게 연락하기
        </RoundButton>
      </ContactWrapper>
    </InvitationWrapper>
  );
};

export default Invitation;

const InvitationWrapper = ({children}: ChildrenProps) => (
  <div className='flex flex-col items-center gap-5'>
    {children}
  </div>
)

const ContactWrapper = ({children}: ChildrenProps) => (
  <div className='flex gap-5 items-center mt-2'>
    {children}
  </div>
)