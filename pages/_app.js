// pages/_app.js
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <main className="min-h-screen min-w-screen bg-gray-50 pt-20" style={{ fontFamily: 'Dovemayo_gothic, sans-serif' }}>
      <Component {...pageProps} />
    </main>
  );
}