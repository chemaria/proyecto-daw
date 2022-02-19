import '../styles/globals.css'
import { SessionProvider } from '../context/SessionProvider'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
