import Theme from '../styles/theme';
import '../styles/flagship-showcase.css';
import '../styles/tailwind.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 