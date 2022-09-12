import Footer from '../components/Footer'
import Header from '../components/Header'
import { CartProvider } from '../context/cartContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </CartProvider>
  )
}

export default MyApp
