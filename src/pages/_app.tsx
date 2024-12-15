// pages/_app.tsx
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@/context/UserContext';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="main-container">
            <UserProvider>
                <main>
                    <Component {...pageProps} />
                </main>
            </UserProvider>

            <footer>
                <p>© 2024 Ranjeth Ravichandran</p>
            </footer>
        </div>
    );
}