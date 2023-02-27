import { createClient, Provider } from 'urql';
import { graphExchange } from '@graphprotocol/client-urql'
import * as GraphClient from '../.graphclient'
import '../styles/dashboard.css';
import '../styles/button.css';

const client = createClient({
  url: 'graphclient://dummy',
  requestPolicy: 'cache-and-network',
  exchanges: [graphExchange(GraphClient)],
});

function MyApp({ Component, pageProps }) {
  return (
      <Provider value={client}>
        <Component {...pageProps} />
      </Provider>

  );
}

export default MyApp;