import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/globals.css';
import "../styles/Animation.css";
import { DM_Sans } from '@next/font/google'
import { appWithTranslation } from 'next-i18next'
import { AppWrapper } from '../components/context/state';
import { Analytics } from '@vercel/analytics/react';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

function App({ Component, pageProps }) {
  return (
    <div className={dmSans.className}>
      <AppWrapper>
        <Component {...pageProps} />
        <Analytics />
      </AppWrapper>
    </div>
  )
}

export default appWithTranslation(App)