import '../styles/globals.css';
import "../styles/Animation.css";
import { DM_Sans } from '@next/font/google'
import { appWithTranslation } from 'next-i18next'

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

function App({ Component, pageProps }) {
  return (
    <div className={dmSans.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(App)