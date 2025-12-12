import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <div>
      <header className="border-b">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-semibold">Global Mindset</h1>
          <div>
            <a href="/" className="mr-4">EN</a>
            <a href="/uz">UZ</a>
          </div>
        </div>
      </header>
      <main className="container py-8">
        <Component {...pageProps} locale={locale} />
      </main>
    </div>
  );
}
