import Theme from '../styles/theme';
import '../styles/flagship-showcase.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 