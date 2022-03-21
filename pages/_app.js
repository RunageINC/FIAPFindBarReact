import SiteLayout from '../components/template/NavLayout/SiteLayout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  )
}

export default MyApp
