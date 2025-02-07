import CommentForm from './CommentForm.tsx';
import { Heading2 } from '@/components/Text.tsx';

const Guestbook = () => {
  return (
    <div className='flex flex-col gap-2 mb-[50px]'>
      <Heading2>
        메시지를 남겨주세요.
        <br />
        결혼식 후 신랑 신부에게 전달됩니다.
      </Heading2>
      <CommentForm />
    </div>
  );
};

export default Guestbook;
