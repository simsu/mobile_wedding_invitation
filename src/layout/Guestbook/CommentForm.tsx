import { useState } from 'react';
import { push, ref, serverTimestamp } from 'firebase/database';
import { realtimeDb } from '../../firebase.ts';

// TODO: 방명록 기능 사용시, realtime db에 guestbook 추가
const guestbookRef = ref(realtimeDb, 'guestbook');

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !message) {
      alert('이름과 메시지를 채워주세요. 🥹');
    } else {
      // TODO: 이름, 메시지, 생성시간, 작성날짜 저장.
      const guestbookMessage = {
        sender: name,
        message: message,
        createdAt: serverTimestamp(),
        date: new Date().toLocaleString(),
      };
      void push(guestbookRef, guestbookMessage);
      
      alert('메시지를 보냈습니다. 💌');
      setName('');
      setMessage('');
    }
  };

  return (
    <form className='flex flex-col gap-0.5 overflow-visible items-center' onSubmit={handleSubmit}>
      <input
        className='w-full box-border rounded-sm p-1 text-base leading-none outline-0 border border-[#ccc] font-light'
        placeholder="이름"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        className='w-full h-full box-border rounded-sm p-1 text-base leading-[1.5] outline-0 border border-[#ccc] resize-none font-light'
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className='w-full px-[6px] py-3 rounded-sm text-base leading-[1.5] border border-[lightgray] bg-white'
        type="submit"
      >등록</button>
    </form>
  );
};

export default CommentForm;
