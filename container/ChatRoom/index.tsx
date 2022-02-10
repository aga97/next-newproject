import React, { createRef, useContext, useEffect, useState } from 'react';
import styles from './index.module.css';
import { ModalContext } from '../../components/utils/modal/modalContext';
import useInput from '../../hooks/useInput';

function ChatRoom() {
  const { handleModal } = useContext(ModalContext);

  const chatInput = useInput((value: string) => value.trim() !== '');
  const [chatList, setChatList] = useState<string[]>([]);

  const chatAreaRef = createRef<HTMLInputElement>();

  useEffect(() => {
    chatAreaRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatList]);

  useEffect(() => {
    async function getDate() {
      await fetch('/api/hello').then((res) => {
        console.log(res.status);
        console.log(res.json());
      }).catch((err) => {
        console.log(err);
      });
    }
    getDate();
  }, []);

  const handleInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      if (chatInput.isValid === false) {
        return;
      }
      setChatList([...chatList, chatInput.value]);
      chatInput.reset();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.chatWrap}>
          <div className={styles.chatArea}>
            {chatList.map((chatItem, index) => (
              <div
                key={`${chatItem}_${index.toString()}`}
                className={styles.chatItem}
              >
                <p>{chatItem}</p>
              </div>
            ))}
            <div ref={chatAreaRef} />
          </div>
          <input
            type="text"
            className={styles.chatInput}
            value={chatInput.value}
            onChange={chatInput.valueChangeHandler}
            onKeyPress={handleInput}
          />
        </div>
      </div>
    </div>
  );
}

export default ChatRoom;
