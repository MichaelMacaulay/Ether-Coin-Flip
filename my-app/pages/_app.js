
import '../styles/dashboard.css';
import '../styles/button.css';
import { client } from '../components/dashboard.js';

function MyApp({ Component, pageProps }) {
  return (
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>

  );
}

export default MyApp;