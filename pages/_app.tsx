import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ModalProvider } from '../components/utils/modal/modalContext';
import Header from '../components/Header/Header';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalProvider>
      <Header />
      <Component {...pageProps} />
    </ModalProvider>
  );
};

export default MyApp;
