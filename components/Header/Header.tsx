import Link from 'next/link';

// style
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.HeaderWrap}>
      <ul className={styles.HeaderContent}>
        <li className={styles.HeaderItem}><Link href="/front-page">FrontPage</Link></li>
        <li className={styles.HeaderItem}><Link href="/chat-room">ChatRoom</Link></li>
        <li className={styles.HeaderItem}><Link href="/study-page">StudyPage</Link></li>
      </ul>
    </div>
  );
}

export default Header;
