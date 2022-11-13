import '@styles/tailwind.css';
import MainLayout from 'layouts/MainLayout';
import type { AppProps } from 'next/app';
import { ProviderAuth } from 'hooks/useAuth';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}
