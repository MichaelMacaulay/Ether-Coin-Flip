import { createClient, Provider } from 'urql';

const client = createClient({
  url: 'https://api.studio.thegraph.com/query/25902/ether-coin-flip/v0.0.1',
});

function MyApp({ Component, pageProps }) {
  return (
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>

  );
}

export default MyApp;