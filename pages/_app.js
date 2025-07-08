// pages/_app.js
import PeekingCorgi from "@/components/PeekingCorgi";
import "@/styles/globals.css";
import { Jua } from 'next/font/google'

const jua = Jua({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jua',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${jua.className} min-h-screen min-w-screen bg-gray-50 pt-20`}>
      <Component {...pageProps} />
      <PeekingCorgi/>
    </main>
  );
}